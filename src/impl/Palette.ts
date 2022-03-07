import { MapNode } from "../path/MapNode";

interface Col {
    r: number;
    g: number;
    b: number;
}

function hexToRgb(hex: string): Col {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return {r, g, b}
}

function deltaE(rgbA: Col, rgbB: Col) {
    let labA = rgb2lab(rgbA);
    let labB = rgb2lab(rgbB);
    let deltaL = labA[0] - labB[0];
    let deltaA = labA[1] - labB[1];
    let deltaB = labA[2] - labB[2];
    let c1 = Math.sqrt(labA[1] * labA[1] + labA[2] * labA[2]);
    let c2 = Math.sqrt(labB[1] * labB[1] + labB[2] * labB[2]);
    let deltaC = c1 - c2;
    let deltaH = deltaA * deltaA + deltaB * deltaB - deltaC * deltaC;
    deltaH = deltaH < 0 ? 0 : Math.sqrt(deltaH);
    let sc = 1.0 + 0.045 * c1;
    let sh = 1.0 + 0.015 * c1;
    let deltaLKlsl = deltaL / (1.0);
    let deltaCkcsc = deltaC / (sc);
    let deltaHkhsh = deltaH / (sh);
    let i = deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh;
    return i < 0 ? 0 : Math.sqrt(i);
  }
  
  function rgb2lab(rgb: Col){
    let r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255, x, y, z;
    r = (r > 0.04045) ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = (g > 0.04045) ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = (b > 0.04045) ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
    z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    x = (x > 0.008856) ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
    y = (y > 0.008856) ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
    z = (z > 0.008856) ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;
    return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)]
  }

export class Palette {
  cols: Col[] = [];
  mapping: Record<number, Col> = {};

  constructor(hexValues: string) {
    for (const hex of hexValues.split("\n")) {
        this.cols.push(hexToRgb(hex));
    }
  }

  findBestMatch(r: number, g: number, b: number): Col {
    const toMatchCol: Col = { r, g, b };
    let bestMatch: Col = this.cols[0];
    let smallestDelta = 1000;

    for (const palCol of this.cols) {
        const dif = deltaE(palCol, toMatchCol);
        if (dif < smallestDelta) {
            smallestDelta = dif;
            bestMatch = palCol;
        }
    }

    return bestMatch;
  }

  adjustImage(image: HTMLImageElement): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d") as CanvasRenderingContext2D;
        if (ctx) {
            ctx.drawImage(image, 0, 0);
            const id: ImageData = ctx.getImageData(0,0,image.width,image.height);
            for (let i=0;i<id.data.length;i+=4) {
                const col: number = id.data[i];

                const r = id.data[i];
                const g = id.data[i + 1];
                const b = id.data[i + 2];
                const combined = r | (0xFF00 & (g << 8)) | (0xFF0000 & (b << 16));
                let bestMatch = this.mapping[combined];
                if (!bestMatch) {
                    bestMatch = this.findBestMatch(r, g, b);
                    this.mapping[combined] = bestMatch;
                }
                id.data[i] = bestMatch.r;
                id.data[i + 1] = bestMatch.g;
                id.data[i + 2] = bestMatch.b;
            }
            ctx.putImageData(id, 0, 0);

            const result = new Image();
            result.onload = () => {
                resolve(result);
            }
            result.src = canvas.toDataURL();
        } else {
            reject("Failure to create context");
        }
    });
  }
}