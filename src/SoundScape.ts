import { AUDIO_CONTEXT, SoundImpl } from "./impl/SoundImpl";
import { Sound } from "./Sound";

interface SoundPoint {
    x?: number
    y?: number
    volume: number
    source: AudioScheduledSourceNode
    gain: GainNode
    // category: string // TODO: category-based volumes
}

export class SoundScape {
    private points: SoundPoint[] = []
    private listenerX: number = 0
    private listenerY: number = 0
    private maxDistance2: number;
    private scale2: number;

    constructor(maxDistance: number, scale: number) {
        this.maxDistance2 = maxDistance * maxDistance;
        this.scale2 = scale * scale;
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
    
    play(sound: Sound, volume: number, x?: number, y?: number) {
        const impl = <SoundImpl>sound
        const source = AUDIO_CONTEXT.createBufferSource();
        source.buffer = impl.buffer;
        const gain = AUDIO_CONTEXT.createGain();
        source.connect(gain);
        gain.connect(AUDIO_CONTEXT.destination);
        const point: SoundPoint = {
            x, y, volume,
            source, gain
        }
        gain.gain.value = this.calculateVolume(point)
        const index = this.points.push(point) - 1
        source.addEventListener("ended", ev => {
            this.points.splice(index, 1)
        })
        source.start()
    }

    private updateVolumes() {
        for (const point of this.points) {
            let value = this.calculateVolume(point);
            point.gain.gain.linearRampToValueAtTime(value, AUDIO_CONTEXT.currentTime)
        }
    }

    private calculateVolume(point: SoundPoint): number {
        if (point.x === undefined || point.y === undefined) {
            return point.volume
        }
        const dx: number = point.x - this.listenerX
        const dy: number = point.y - this.listenerY
        const distance = (dx * dx + dy * dy) / this.scale2;
        // * (los ? 1 : 0.3) TODO: callback
        const reduction = Math.max(1 - distance / this.maxDistance2, 0);
        return point.volume * reduction * reduction * reduction
    }
}
