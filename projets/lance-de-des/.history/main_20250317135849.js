"use strict";

// Fonction appelée lors d'un nouveau tirage de dés
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice);


// ATTENDRE QUE LE DOM (CÀD LA PAGE HTML) SOIT COMPLÈTEMENT CHARGÉ

document.addEventListener("DOMContentLoaded", function () {

});