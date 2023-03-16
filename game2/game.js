import { loadImageAsync } from "./assets";
import { createViewport } from "./viewport";

const viewport = createViewport();

async function draw() {   
    viewport.drawText('欢迎使用抖音开发者工具', 80, 200)
    const image = await loadImageAsync('icon.png');
    viewport.drawImage(image, (viewport.systemInfo.windowWidth - 100)/2, 60, 100, 100);
}

draw();