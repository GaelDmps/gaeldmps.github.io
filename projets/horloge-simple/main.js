"use strict";

function afficherHeure() {
    const now = new Date();
    const display = document.getElementById("horloge");
    display.innerText = now.toLocaleTimeString("fr-FR");
}

// CODE PRINCIPAL

document.addEventListener("DOMContentLoaded", function () {
    afficherHeure();
    // Raffraichir l'affichage toutes les secondes
    window.setInterval(afficherHeure, 1000);
});