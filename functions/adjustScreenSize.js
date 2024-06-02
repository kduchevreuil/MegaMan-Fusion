// ajustScreenSize ajuste la taille du canvas à la taille de la fenêtre

function adjustScreenSize() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const windowsWidthScreen = window.innerWidth;
    const windowHeightScreen = window.innerHeight;

    let scale;

    if (windowHeightScreen < windowsWidthScreen) {
        scale = windowHeightScreen / 256;
    } else {
        scale = windowsWidthScreen / 240;
    }

    const newWidth = 252;
    const newHeight = 236;

    canvas.width = newWidth * scale;
    canvas.height = newHeight * scale;

    ctx.scale(scale, scale);
}

export default adjustScreenSize;
