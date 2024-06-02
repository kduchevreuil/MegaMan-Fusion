import adjustScreenSize from './functions/adjustScreenSize.js';

// ajuadjustScreenSize à chaque resize de la fenêtre
window.addEventListener('resize', adjustScreenSize);
let fps = 60;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function draw() {
    // Fonction qui n'ont pas besoin d'être redessinées
    adjustScreenSize();
    // Fonction qui ont besoin d'être redessinées
    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //drawPlayer();
        console.log('draw');
    }, 1000 / fps);

}
draw();