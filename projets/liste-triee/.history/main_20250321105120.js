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
	console.table(listeArticles);
	const envies = document.getElementById('liste-envie');
	envies.innerHTML = ""
	// faire une boucle pour la création des articles
	for (const element of listeArticles) {
	// créer des articles dans la section
		const article = document.createElement('article')
		envies.appendChild(article)
	
	// créer un hgroup dans l'article
		const groupe = document.createElement('hgroup')
		article.appendChild(groupe)

	// h3 et p dans le hgroup
		const titre = document.createElement('h3')
		titre.innerText = element.compositeur
		groupe.appendChild(titre)

	// p dans le hgroup 
		const oeuvre = document.createElement('p')
		oeuvre.innerText = element.oeuvre
		groupe.appendChild(oeuvre)

	// div pour les boutons dans l'article
		const triboutons = document.createElement('div')
		triboutons.classList.add('buttons')
		article.appendChild(triboutons)

	// bouton haut dans la div
		const trihaut = document.createElement('button')
		trihaut.classList.add('moveUp')
		trihaut.innerHTML = `<i class="fa-solid fa-caret-up"></i>`
		triboutons.appendChild(trihaut)
		
		// bouton bas dans la div
		const tribas = document.createElement('button')
		tribas.classList.add('moveDown')
		tribas.innerHTML = `<i class="fa-solid fa-sort-down"></i>`
		triboutons.appendChild(tribas)

	// bouton poubelle dans la div
		const suppr = document.createElement('button')
		suppr.classList.add('remove')
		suppr.innerHTML = `<i class="fa-solid fa-trash"></i>`
		triboutons.appendChild(suppr)
	}
	

}

function moveUp() {
	const item = this.closest('article')
	const previtem = item.previousElementSibling
	if(previtem) {
		item.parentNode.insertBefore(item, previtem)
	}
}

function moveDown() {
	const item = this.closest('article')
	const nextItem = item.nextElementSibling
	if(nextItem) {
		item.parentNode.insertBefore(nextItem, item)
	}
	
}

function removeElement() {
	const item = this.closest('article')
	EventTarget.remove
}

document.addEventListener("DOMContentLoaded", function () {
	createArticles(listeElements);
	const moveup = this.querySelectorAll('.moveUp')
	for (const element of moveup) {
		element.addEventListener('click', moveUp)
	}
	const movedown = this.querySelectorAll('.moveDown')
	for (const element of movedown) {
		element.addEventListener('click', moveDown)
	}
});