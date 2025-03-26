"use strict";


function getRandom(max) {
	// Tirage d'un numLoto aléatoire entre 1 et max
	return Math.floor(Math.random() * max) + 1;
}

// ATTENDRE QUE LE DOM (CÀD LA PAGE HTML) SOIT COMPLÈTEMENT CHARGÉ

document.addEventListener("DOMContentLoaded", function () {
	const bouton = document.getElementById("btnLancer");
	bouton.addEventListener("click", function () {
		// Initialisation du tableau qui contient les tirages
		let loto = [];
		// Initialisation du compteur à 0
		let count = 0;
		const display = document.getElementById("display");
		display.innerHTML = "";
		while (count < 7) {
			// Tirage d'un nombre aléatoire
			let numLoto;
			if (count < 6) {
				// Tirage d'un numéro entre 1 et 49
				numLoto = getRandom(49);
			}
			else {
				// Tirage du numéro complémentaire entre 1 et 10
				numLoto = getRandom(10);
			}

			console.log(numLoto);
			// Si le nombre tiré n'est pas dans le tableau
			if (loto.indexOf(numLoto) === -1) {
				loto.push(numLoto);
				count++;
				// Créer la boule dans le code
				const boule = document.createElement("span");
				boule.innerText = numLoto;
				boule.classList.add("boule");
				display.appendChild(boule);
			}
		}
		console.table(loto);
	})
});