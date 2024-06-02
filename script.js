import adjustScreenSize from './functions/adjustScreenSize.js';

// Appel de la fonction adjustScreenSize
adjustScreenSize();
// ajuadjustScreenSize à chaque resize de la fenêtre
window.addEventListener('resize', adjustScreenSize);