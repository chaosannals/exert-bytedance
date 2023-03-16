
export function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        const image = tt.createImage();
        image.src = url;
        image.onload = () => {
            resolve(image);
        };
        image.onerror = (e) => {
            reject(e);
        }
    });
}