import { AUDIO_CONTEXT, SoundImpl } from "./impl/SoundImpl";
import { Sound } from "./Sound";

interface SoundPoint {
    x?: number
    y?: number
    volume: number
    source: AudioScheduledSourceNode
    gain: GainNode
    category: string
}

export enum SoundEasing {
    Linear,
    Quadratic,
    Cubic
}

interface SoundCategory {
    name: string
    volume: number
    maxDistance2: number
    scale2: number
    easing: SoundEasing
}

export class SoundScape {
    private _soundVolume: number = 1;

    private points: SoundPoint[] = []
    private listenerX: number = 0
    private listenerY: number = 0
    private categories: Record<string, SoundCategory> = {}

    category(name: string, volume: number, maxDistance: number, scale: number, easing: SoundEasing): SoundScape {
        this.categories[name] = {
            name, volume, maxDistance2: maxDistance * maxDistance, scale2: scale * scale, easing
        }
        return this
    }
    
    get soundVolume(): number {
        return this._soundVolume;
    }

    set soundVolume(value: number) {
        this._soundVolume = value;
    }

    moveTo(x: number, y: number) {
        this.listenerX = x
        this.listenerY = y
        this.updateVolumes()
    }

    clear() {
        for (const point of this.points) {
            point.source.stop()
        }
        this.points = []
    }

    play(sound: Sound, volume: number, category: string, x?: number, y?: number) {
        // protect against playing sounds too early or without auto working
        if (!AUDIO_CONTEXT) {
            return;
        }

        const impl = <SoundImpl>sound
        const source = AUDIO_CONTEXT.createBufferSource();
        source.buffer = impl.buffer;
        const gain = AUDIO_CONTEXT.createGain();
        source.connect(gain);
        gain.connect(AUDIO_CONTEXT.destination);
        const point: SoundPoint = {
            x, y, volume,
            source, gain, category
        }
        gain.gain.value = this.calculateVolume(point)
        this.points.push(point)
        source.addEventListener("ended", ev => {
            const index = this.points.indexOf(point)
            this.points.splice(index, 1)
            // GuteLog.log(`Sound ended: ${sound.name}, total: ${this.points.length}`)
        })
        source.start()
        // GuteLog.log(`Sound started: ${sound.name}, total: ${this.points.length}`)
    }

    private updateVolumes() {
        for (const point of this.points) {
            let value = this.calculateVolume(point);
            point.gain.gain.linearRampToValueAtTime(value, AUDIO_CONTEXT.currentTime)
        }
    }

    private calculateVolume(point: SoundPoint): number {
        const category = this.categories[point.category]
        if (category === undefined) {
            return point.volume * this._soundVolume
        }
        
        if (point.x === undefined || point.y === undefined) {
            return point.volume * category.volume * this._soundVolume
        }
        const dx: number = point.x - this.listenerX
        const dy: number = point.y - this.listenerY
        const distance = (dx * dx + dy * dy) / category.scale2;
        // * (los ? 1 : 0.3) TODO: callback
        const reduction = Math.max(1 - distance / category.maxDistance2, 0);
        switch (category.easing) {
            case SoundEasing.Linear:
                return this._soundVolume * point.volume * category.volume * reduction
            case SoundEasing.Quadratic:
                return this._soundVolume * point.volume * category.volume * reduction * reduction
            case SoundEasing.Cubic:
                return this._soundVolume * point.volume * category.volume * reduction * reduction * reduction
        }
    }
}
