import { checkSession, getLocation, getUserInfo, login } from './util';

let systemInfo = tt.getSystemInfoSync()
let canvas = tt.createCanvas();
let ctx = canvas.getContext('2d');

async function main() {
    if (!await checkSession()) {
        await login();
    }
    let u = await getUserInfo();
    let location = await getLocation();
}

main();

let params = {
    type: "text",
    text: "text button",
    style: {
        left: 100,
        top: 100,
        width: 200,
        height: 20,
        textColor: "#111111",
    },
    success(button) {
        function button_tap(res) {
            logger.log("button_tap:" + res.buttonid);
            // button.hide();
            // button.offTap(button_tap);
            // button.destroy();
        }
        button.onTap(button_tap);
    },
    fail(res) {
        console.log("创建失败", res.errMsg);
    },
};
tt.createInteractiveButton(params);

tt.showLoading({
    title: "请求中，请稍后...",
    success(res) {
        console.log(`${res}`);
    },
    fail(res) {
        console.log(`showLoading调用失败`);
    },
});

function draw() {
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, systemInfo.windowWidth, systemInfo.windowHeight)

    ctx.fillStyle = '#000000'
    ctx.font = `${parseInt(systemInfo.windowWidth / 20)}px Arial`
    ctx.fillText('欢迎使用字节跳动开发者工具，', 10, systemInfo.windowHeight * 1 / 5)
    ctx.fillText('可在控制台中查看小游戏开发文档的地址。', 10, systemInfo.windowHeight * 1 / 5 + 30)
}

draw();