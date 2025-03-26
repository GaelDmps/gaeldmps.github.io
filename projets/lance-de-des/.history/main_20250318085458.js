"use strict";

// Fonction appelée lors d'un nouveau tirage de dés
function rollDice() {
    // tirer un nombre aléatoire entre 1 et 6
    const dicevalue = Math.floor(Math.random() * 6) + 1;
    // console.log(dicevalue);
    
}

// ATTENDRE QUE LE DOM (CÀD LA PAGE HTML) SOIT COMPLÈTEMENT CHARGÉ

document.addEventListener("DOMContentLoaded", function () {
    const bouton = document.getElementById('btnLancer', rollDice);
    bouton.addEventListener('click', rollDice)
});