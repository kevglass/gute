import { isMusicOn, isSoundOn } from "../Gute";
import { Sound } from "../Sound";

let AudioContext: any;

if (typeof window !== "undefined") {
  AudioContext = window.AudioContext || (<any>window).webkitAudioContext;
}
let AUDIO_CONTEXT: AudioContext;

function handleVisibilityChange() {
  if (isMusicOn()) {
    if (SoundImpl.CURRENT_MUSIC) {
      if (document.hidden) {
        SoundImpl.CURRENT_MUSIC.stop();
      } else {
        SoundImpl.CURRENT_MUSIC.play(SoundImpl.CURRENT_MUSIC.volume);
      }
    }
  }
}
if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", handleVisibilityChange);
}

export class SoundImpl implements Sound {
  static CURRENT_MUSIC: SoundImpl | null;

  static soundVolume: number = 1;
  static musicVolume: number = 1;

  static setSoundVolume(v: number): void {
    this.soundVolume = v;
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

  constructor(url: string, music: boolean) {
    this.url = url;
    this.music = music;
    
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    
    req.onload = (event) => {
      var arrayBuffer = req.response; 
      if (arrayBuffer) {
        this.data = arrayBuffer;
        this.loaded = true;
        this.tryLoad();
      }
    };
    
    req.send(null);
  }

  private tryLoad(): void {
    if (AUDIO_CONTEXT && this.data) {
      AUDIO_CONTEXT.decodeAudioData(this.data, (buffer: AudioBuffer) => {
        this.buffer = buffer;
        if (SoundImpl.CURRENT_MUSIC === this) {
          SoundImpl.CURRENT_MUSIC = null;
          this.play(this.volume);
        }
      }, (e) => { console.log("Failed to load: "+ this.url) });
    }
  }

  initOnFirstClick(): void {
    if (!AUDIO_CONTEXT) {
      AUDIO_CONTEXT = new AudioContext();
      AUDIO_CONTEXT.resume();
    }

    this.tryLoad();
  }

  play(volume: number): void {
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
    }
    
    if (this.music && !isMusicOn()) {
      return;
    } else if (!isSoundOn()) {
      return;
    }

    this.source = AUDIO_CONTEXT.createBufferSource();
    this.source.buffer = this.buffer;
    this.gain = AUDIO_CONTEXT.createGain();
    this.source.connect(this.gain);
    this.gain.connect(AUDIO_CONTEXT.destination);

    if (this.music) {
      this.gain.gain.value = 0;
      this.source.loop = true;
    } 

    this.source.start(0);
    
    if (this.music) {
      this.gain.gain.linearRampToValueAtTime(volume * SoundImpl.musicVolume, AUDIO_CONTEXT.currentTime + 2);
    }  else {
      this.gain.gain.value = volume * SoundImpl.soundVolume;
    }
  }

  stop(): void {
    if (this.source) {
      if (this.music) {
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
  }
}