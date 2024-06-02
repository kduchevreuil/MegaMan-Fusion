import adjustScreenSize from './functions/adjustScreenSize.js';

// ajuadjustScreenSize à chaque resize de la fenêtre
window.addEventListener('resize', adjustScreenSize);
let fps = 60;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


// Charger l'image
const imageTitle = new Image();
imageTitle.src = './images/titleScreen/title01.png'; // Remplacez par le chemin de votre image


// Fonction de dessin
function draw() {
    adjustScreenSize();
    canvas.getContext('2d');
    //pas d'amélioration de performance
    ctx.imageSmoothingEnabled = false;
    // Effacer le canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Ecrire "fusion" en blanc


    // Dessiner l'image
    ctx.drawImage(imageTitle, 0, 0); // Ajustez les coordonnées et la taille selon vos besoins
    ctx.fillStyle = '#0070EC';
    ctx.font = '25px retro';
    ctx.fillText('FUSION', 65, 120);
    ctx.fillStyle = "white";
    ctx.font = '25px retro';
    ctx.fillText('FUSION', 63, 118);
    console.log('draw');
    // Appel récursif pour créer une boucle d'animation à 60 fps
    requestAnimationFrame(draw);
}

// Démarrer l'animation
requestAnimationFrame(draw);

