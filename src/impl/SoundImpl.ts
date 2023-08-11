import { isMusicOn, isSoundOn } from "../Gute";
import { Sound } from "../Sound";

let AudioContext: any;

if (typeof window !== "undefined") {
  AudioContext = window.AudioContext || (<any>window).webkitAudioContext;
}
export let AUDIO_CONTEXT: AudioContext;

function handleVisibilityChange() {
  if (isMusicOn()) {
    if (SoundImpl.CURRENT_MUSIC) {
      if (document.hidden) {
        SoundImpl.CURRENT_MUSIC.stop();
        try {
          AUDIO_CONTEXT.suspend().catch((e) => {
            console.log("Suspend audio context failed");
            console.error(e);
          });
        } catch (e) {
          console.log("Suspend audio context failed");
          console.error(e);
        }
      } else {
        try {
          AUDIO_CONTEXT.resume().catch((e) => {
            console.log("Resume audio context failed");
            console.error(e);
          });
        } catch (e) {
          console.log("Resume audio context failed");
          console.error(e);
        }
        setTimeout(() => {
          SoundImpl.CURRENT_MUSIC!.play(SoundImpl.CURRENT_MUSIC!.volume);
        }, 500);
      }
    }
  }

  if (isSoundOn()) {
    for (const loop of SoundImpl.CURRENT_LOOPS) {
      if (document.hidden) {
        loop.stop(false);
      } else {
        loop.play(loop.volume);
      }
    }
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", handleVisibilityChange);
}

export class SoundImpl implements Sound {
  static CURRENT_MUSIC: SoundImpl | null;
  static CURRENT_LOOPS: SoundImpl[] = [];

  static soundVolume: number = 1;
  static musicVolume: number = 1;

  static setSoundVolume(v: number): void {
    this.soundVolume = v;

    for (const loop of this.CURRENT_LOOPS) {
      loop.gain.gain.linearRampToValueAtTime(loop.volume * SoundImpl.soundVolume, AUDIO_CONTEXT.currentTime + 0.25);
    }
  }

  static getSoundVolume(): number {
    return this.soundVolume;
  }

  static setMusicVolume(v: number): void {
    this.musicVolume = v;

    if (SoundImpl.CURRENT_MUSIC) {
      if (SoundImpl.CURRENT_MUSIC.gain) {
        SoundImpl.CURRENT_MUSIC.gain.gain.linearRampToValueAtTime(SoundImpl.CURRENT_MUSIC.volume * SoundImpl.musicVolume, AUDIO_CONTEXT.currentTime + 0.25);
      }
    }
  }

  static getMusicVolume(): number {
    return this.musicVolume;
  }
  
  loaded: boolean = false;
  data!: ArrayBuffer;
  volume: number = 1;
  buffer!: AudioBuffer;
  music: boolean = false;
  source!: AudioBufferSourceNode | null;
  gain!: GainNode;
  url: string;
  looped: boolean = false;
  name: string;

  constructor(url: string, music: boolean, arrayBuffer: Promise<ArrayBuffer> | undefined) {
    this.name = url;
    this.url = url;
    this.music = music;
    
    if (arrayBuffer) {
      this.loaded = true;
      arrayBuffer.then((arrayBuffer: ArrayBuffer) => {
        this.data = arrayBuffer;
        this.tryLoad();
      });
    } else {
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "arraybuffer";
      
      req.onload = (event) => {
        var arrayBuffer = req.response; 
        if (arrayBuffer) {
          this.data = arrayBuffer;
          this.tryLoad();
        }
      };
      
      req.send();
    }
    
    this.loaded = true;
  }

  private tryLoad(): void {
    if (AUDIO_CONTEXT && this.data) {
      try {
        const promise = AUDIO_CONTEXT.decodeAudioData(this.data, (buffer: AudioBuffer) => {
          this.buffer = buffer;
          if (SoundImpl.CURRENT_MUSIC === this) {
            SoundImpl.CURRENT_MUSIC = null;
            this.play(this.volume);
          }
        }, (e) => { console.log("Failed to load: "+ this.url) });
        if (promise) {
          promise.then(() => {}).catch((e) => {});
        }
      } catch (e) {
        console.log("decodeAudioData exception on loading " + this.url);
      }
    }
  }

  confirmAudioContext() {
    try {
      AUDIO_CONTEXT.resume().catch((e) => {
        console.log("Resume audio context failed");
        console.error(e);
      });
    } catch (e) {
      console.log("Resume audio context failed");
    }
  }

  initOnFirstClick(): void {
    if (!AUDIO_CONTEXT) {
      try {
        AUDIO_CONTEXT = new AudioContext();
        AUDIO_CONTEXT.resume().catch((e) => {
          console.log("Resume audio context failed");
          console.error(e);
        });
      } catch (e) {
        console.log("Resume audio context failed");
      }
    }

    this.tryLoad();
  }

  play(volume: number, loop: boolean = false): void {
    this.confirmAudioContext();
    this.volume = volume;

    if (!this.buffer) {
      if (this.music) {
        if (SoundImpl.CURRENT_MUSIC) {
          SoundImpl.CURRENT_MUSIC.stop();
        }
        SoundImpl.CURRENT_MUSIC = this;
      }
      return;
    }

    if (this.music) {
      if (SoundImpl.CURRENT_MUSIC !== this) {
        if (SoundImpl.CURRENT_MUSIC) {
          SoundImpl.CURRENT_MUSIC.stop();
        }

        SoundImpl.CURRENT_MUSIC = this;
      }

      if (this.source) {
        return;
      }
    } else {
      // don't play sound effects in the background or they all
      // get stacked up
      if (document.hidden) {
        return;
      }
    }
    
    if (this.music && !isMusicOn()) {
      return;
    } else if (!this.music && !isSoundOn()) {
      return;
    }

    this.source = AUDIO_CONTEXT.createBufferSource();
    this.source.buffer = this.buffer;
    this.gain = AUDIO_CONTEXT.createGain();
    this.source.connect(this.gain);
    this.gain.connect(AUDIO_CONTEXT.destination);

    this.looped = false;
    if (this.music || loop) {
      this.gain.gain.value = 0;
      this.source.loop = true;
      this.looped = true;
    } 

    this.source.start(0);
    
    if (this.music || loop) {
      this.gain.gain.linearRampToValueAtTime(volume * (loop ? SoundImpl.soundVolume : SoundImpl.musicVolume), AUDIO_CONTEXT.currentTime + 2);
    }  else {
      this.gain.gain.value = volume * SoundImpl.soundVolume;
    }

    if (loop) {
      SoundImpl.CURRENT_LOOPS.push(this);
    }
  }

  stop(remove: boolean = true): void {
    if (this.source) {
      if (this.looped) {
        this.gain.gain.linearRampToValueAtTime(0, AUDIO_CONTEXT.currentTime + 3);
        const tempSource: AudioBufferSourceNode = this.source;
        setTimeout(() => {
          tempSource.stop();
        }, 4000);
      } else {
        this.source.stop();
      }

      this.source = null;
    }

    if (remove) {
      const index: number = SoundImpl.CURRENT_LOOPS.findIndex(a => a === this);
      if (index >= 0) {
        SoundImpl.CURRENT_LOOPS.splice(index, 1);
      }
    }
  }
}
