"use strict";

const listeElements = [
	{
		compositeur: 'Anton Brückner',
		oeuvre: 'Symphonie n°1 en do mineur'
	},
	{
		compositeur: 'Anton Brückner',
		oeuvre: 'Symphonie n°4 en mi bémol majeur'
	},
	{
		compositeur: 'Gustav Mahler',
		oeuvre: 'Symphonie n°2 "Résurrection" en ut mineur'
	},
	{
		compositeur: 'Johannes Brahms',
		oeuvre: 'Symphonie n°2 en ré majeur'
	},
	{
		compositeur: 'Ludwig Van Beethoven',
		oeuvre: 'Symphonie n°6 en fa majeur'
	},
	{
		compositeur: 'Félix Mendelsohn',
		oeuvre: 'Symphonie n°3 en la mineur'
	}
];

function createArticles(listeArticles) {
	const envies = document.getElementById('liste-envie');
	envies.innerHTML = ""
	// faire une boucle pour la création des articles
	for () {
	// créer des articles dans la section
		const article = document.createElement('article')
		envies.appendChild(article)
	
	// créer un hgroup dans l'article
		const groupe = createElement('hgroup')
		article.appendChild(groupe)

	// h3 et p dans le hgroup
	
	}
	

}

function moveUp() {

}

function moveDown() {

}

function removeElement() {

}

document.addEventListener("DOMContentLoaded", function () {
	createArticles();

});