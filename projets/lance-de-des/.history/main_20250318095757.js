"use strict";

// Fonction appelée lors d'un nouveau tirage de dés
function rollDice() {
    // tirer un nombre aléatoire entre 1 et 6
    const dicevalue = Math.floor(Math.random() * 6) + 1;
    // console.log(dicevalue);
    const face = document.querySelector('.face');
    // vider le HTML de la face du dé
    face.innerHTML = ""
    // bouclesur le nombre tiré
    for (const i = 1; i <= dicevalue; i++){
        // création des poinds a afficher sur le dé
        const pip = document.createElement('span')
        face.appendChild(pip)
        pip.classList.add('pip')
    }
}

// ATTENDRE QUE LE DOM (CÀD LA PAGE HTML) SOIT COMPLÈTEMENT CHARGÉ

document.addEventListener("DOMContentLoaded", function () {
    const bouton = document.getElementById('btnLancer', rollDice);
    bouton.addEventListener('click', rollDice)
});