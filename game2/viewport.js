export class Viewport {
    constructor(si, cnv, ctx) {
        this.systemInfo = si;
        this.canvas = cnv;
        this.context = ctx;
        this.status = {
            fontSize: parseInt(this.systemInfo.windowWidth / 20),
            fontFamily: 'Arial',
            fillStyle: '#ffffff',
        };
    }

    loadStatus() {
        this.context.font = `${this.status.fontSize}px ${this.status.fontFamily}`;
        this.context.fillStyle = this.status.fillStyle;
    }

    drawText(text, x, y, fillStyle='#000000', fontSize=null, fontFamily='Arial') {
        if (fontSize == null) {
            fontSize = Math.max(4, Math.floor(this.systemInfo.windowWidth / 20));
        }
        this.context.fillStyle = fillStyle;
        this.context.font = `${fontSize}px ${fontFamily}`;
        this.context.fillText(text, x, y);
        this.loadStatus();
    }

    drawImage(image, x, y, width, height) {
        this.context.drawImage(
            image,
            0, 0, image.width, image.height,
            x, y, width, height
        );
    }

    drawImagePart(image, x, y, width, height, part) {
        this.context.drawImage(
            image,
            part.x, part.y, part.width, part.height,
            x, y, width, height
        );
    }
}

export function createViewport() {
    let systemInfo = tt.getSystemInfoSync()
    let canvas = tt.createCanvas();
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, systemInfo.windowWidth, systemInfo.windowHeight)

    return new Viewport(
        systemInfo,
        canvas,
        ctx
    );
}