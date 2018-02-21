var div_balle; // <div> de la Balle
var timer;     // pour l'animation avec setInterval
var x = 600;   // balle au centre du cadre
var y = 200;   // 1/2*(largeur_cadre, hauteur_cadre)
var dx = 7;    // vecteur du mouvement de la balle
var dy = 3;    // par exemple (5, 2)
var dt = 10;   // temps en milli secondes entre chaque pas
var murDroit = 1200 - 100; // largeur_cadre -largeur_balle;
var murBas = 600 - 100;    // hauteur_cadre -hauteur_balle;

// appel tous le dt milli secondes
function avancerBalleDunPas() {
    x = x + dx;
    y = y + dy;
    if (x < 0 || x > murDroit) { // rebond horizontal
        dx = -dx;
    } else if (y < 0 || y > murBas) { // rebond vertical
        dy = -dy;
    } else { // on change la position de la balle
        div_balle.style.left = x + "px";
        div_balle.style.top = y + "px";
    }
}

// appel lors d'un clic sur la balle
function clicBalle() {
    if (div_balle.className === "mobile") {
        clearInterval(timer); // Stop
        div_balle.className = "immobile"; // on change l'aspect
    } else {
        timer = setInterval(avancerBalleDunPas, dt); // on repart
        div_balle.className = "mobile"; // on change l'aspect
    }
}

// initialisation lors du chargement de la page HTML
function init() {
    div_balle = document.getElementById("balle");
    timer = setInterval(avancerBalleDunPas, dt); // chaque instant dt
}
