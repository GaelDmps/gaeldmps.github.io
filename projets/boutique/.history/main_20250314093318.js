"use strict"

//
// Définition des variables globales
//

// Tableau contenant la liste des catégories
const categories = [
	{
		id: 1,
		name: "Tables"
	},
	{
		id: 2,
		name: "Fauteuils"
	},
	{
		id: 3,
		name: "Chaises de bureau"
	}
];

// Tableau des éléments de la boutique
const products = [
	{
		id: 1,
		price: 150,
		title: "Table de cuisine bois naturel",
		image: "img/table-cuisine-bois-naturel.jpg",
		categoryId: 1
	},
	{
		id: 2,
		price: 220,
		title: "Table de cuisine blanc",
		image: "img/table-cuisine-blanc.jpg",
		categoryId: 1
	},
	{
		id: 3,
		price: 280,
		title: "Table basse de salon",
		image: "img/table-basse-salon.jpg",
		categoryId: 1
	},
	{
		id: 4,
		price: 170,
		title: "Table de salon",
		image: "img/table-salon.jpg",
		categoryId: 1
	},
	{
		id: 5,
		price: 210,
		title: "Table à hauteur réglable",
		image: "img/table-hauteur-reglable.jpg",
		categoryId: 1
	},
	{
		id: 6,
		price: 90,
		title: "Table ronde",
		image: "img/table-ronde.jpg",
		categoryId: 1
	},
	{
		id: 7,
		price: 280,
		title: "Fauteuil bleu",
		image: "img/fauteuil-bleu.png",
		categoryId: 2
	},
	{
		id: 8,
		price: 250,
		title: "Fauteuil vert",
		image: "img/fauteuil-vert.png",
		categoryId: 2
	},
	{
		id: 9,
		price: 200,
		title: "Fauteuil marron",
		image: "img/fauteuil-marron.png",
		categoryId: 2
	},
	{
		id: 10,
		price: 60,
		title: "Chaise de bureau bleu",
		image: "img/chaise-bureau-bleu.png",
		categoryId: 3
	},
	{
		id: 11,
		price: 120,
		title: "Fauteuil de bureau bleu",
		image: "img/fauteuil-bureau-bleu.png",
		categoryId: 3
	},
	{
		id: 12,
		price: 160,
		title: "Fauteuil de bureau noir",
		image: "img/fauteuil-bureau-noir.png",
		categoryId: 3
	}
];

// Tableau contenant la liste des envies
let wishlist = [];

// Tableau contenant le panier d'achats
let cart = [];

// Montant total du panier
let cartTotal = 0;

// Nombre d'éléments dans le panier
let qteTotal = 0;

// Affichage des produits de la boutique
function displayProducts() {

	// Tous les éléments ajoutés aux différents éléments sont récupérés dans le tableau au début du JS de la ligne 24 à 109

	// selection de la div avec l'ID shop dans le HTML
	const shop = document.getElementById('shop')
	shop.innerHTML = ""
	// créé une boucle pour paramétrer tous les articles en même temps
	for (const element of products) {
		const article = document.createElement('article')
		shop.appendChild(article)
		
		// ajout d'une image dans l'article
		const image = document.createElement('img')
		image.src = element.image
		image.alt = element.title
		article.appendChild(image)

		// créer un titre avec le nom dans l'article
		const titre = document.createElement('h2')
		titre.innerText = element.title
		article.appendChild(titre)
		
		// créer un paragraphe avec le prix dans l'article
		const paragraphe = document.createElement('p')
		paragraphe.innerText = element.price+'€'
		paragraphe.classList.add('price')
		article.appendChild(paragraphe)

		// Ajout a la liste d'envies
		const bouton = document.createElement('a')
		bouton.innerHTML = '<i class="fa-solid fa-heart"></i> ajouter a ma liste d\'envies'
		article.appendChild(bouton)
		bouton.classList.add('envie')
		bouton.setAttribute('title', element.title)
		bouton.addEventListener('click', addToWishList)

		// Création bouton ajouter au panier
		const panier = document.createElement('button')
		panier.innerHTML = '<i class="fa-solid fa-cart-plus"></i> ajouter au panier'
		article.appendChild(panier)
		panier.classList.add('btn-cart', 'btn')
		panier.setAttribute('data-id', element.id)
		panier.setAttribute('data-name', element.title)
		panier.setAttribute('data-price', element.price)
		panier.setAttribute('data-category', element.categoryId)
		panier.addEventListener('click', addToCart)
	}
}

// Tri ascendant
function ascendingSorting() {
	  products.sort((a, b) => {
		return a.price - b.price
});
	  displayProducts()	
}

// Tri descendant
function descendingSorting() {
	products.sort((a, b) => {
	  return b.price - a.price
	});
	displayProducts()}

//
// GESTION DES CATÉGORIES (BONUS)
//

function displayCategories() {
}

function filterCategories() {
}

//
// GESTION DE LA LISTE D'ENVIES
//

function addToWishList() {
	if (wishlist.indexOf(this.title) === -1){
		wishlist.push(this.title)
		
		// Stocker dans le local storage
		localStorage.setItem('wishlist', JSON.stringify(wishlist))

		displayWishList(wishlist)
	}
};

function displayWishList() {
	const envies = document.getElementById('wishlist-detail');	
	envies.innerHTML = "";
	const ol = document.createElement("ol");
	for (const element of wishlist) {
		const li = document.createElement("li");
		li.innerText = element
		ol.appendChild(li)
	}
	envies.appendChild(ol)

	// Si il y a quelque chose dans la wishlist le bouton apparait et si il y a rien il n'apparait pas
	if (wishlist.length > 0){
		document.getElementById('btn-empty-list').style.display = "block"
	} else {
		document.getElementById('btn-empty-list').style.display = "none"
	}
};

function emptyWishList() {
	wishlist = []
	localStorage.removeItem('wishlist')
	displayWishList()
};

//
// GESTION DU PANIER D'ACHATS
//

// Ajouter un élément au panier
function addToCart() {
	const id = this.dataset.id
	const nom = this.dataset.name
	const prix = this.dataset.price
	const index = cart.findIndex(x => x.id === id)
	if (index === -1){
		cart.push({ id: id, nom: nom, prix: prix, qte: 1 });
	} else {
		cart[index].qte++
	}
	sessionStorage.setItem("panier", JSON.stringify(cart))
	cartTotals()
	displayCart()
};

// Calculer le total du panier
function cartTotals() {
	cartTotal = 0
	qteTotal = 0
	for (const element of cart) {
		cartTotal = cartTotal+(Number(element.prix)*element.qte)
		qteTotal = qteTotal+element.qte
	}
};

// Affichage du panier
function displayCart() {
	const cartresume = document.getElementById('cart')
	if (qteTotal > 0) {
		cartresume.innerText = qteTotal+" article(s) "+cartTotal+"€"
	} else {
		cartresume.innerText = "Le panier est vide"
	}
	const detail = document.getElementById('cart-detail')
	if (cart.length > 0){
		detail.innerHTML = "";
		const table = document.createElement('table')
		detail.appendChild(table)
		const caption = document.createElement('caption')
		caption.innerText = "Détail du panier"
		table.appendChild(caption)
		const tr = document.createElement('tr')
		table.appendChild(tr)

		const th1 = document.createElement('th')
		th1.innerText = "Nom"
		tr.appendChild(th1)

		const th2 = document.createElement('th')
		th2.innerText = "Prix"
		tr.appendChild(th2)

		const th3 = document.createElement('th')
		th3.innerText = "Quantité"
		tr.appendChild(th3)

		const th4 = document.createElement('th')
		th4.innerText = "Total"
		tr.appendChild(th4)


		for (const element of cart) {

			const trd = document.createElement('tr')
			table.appendChild(trd)

			const td1 = document.createElement('td')
			td1.innerText = element.nom
			trd.appendChild(td1)

			const td2 = document.createElement('td')
			td2.innerText = element.prix+"€"
			trd.appendChild(td2)

			const td3 = document.createElement('td')
			td3.innerText = element.qte
			trd.appendChild(td3)

			const td4 = document.createElement('td')
			td4.innerText = element.prix*element.qte+"€"
			trd.appendChild(td4)
		}
	} else {
		detail.innerHTML = "votre panier est vide"
	}
	if (cart.length > 0){
		document.getElementById('btn-empty-cart').style.display = "block"
	} else {
		document.getElementById('btn-empty-cart').style.display = "none"
	}
};

// Afficher/cacher le détail du panier
function showHideCart() {
	const show = document.getElementById('popover')
	show.classList.toggle('visible')
};

// Mise à jour du panier (quantité, suppression d'un article) => BONUS
function updateCart(ev) {
};

// Vider le panier
function emptyCart() {
	cart = []
	sessionStorage.removeItem('panier')
	cartTotal = 0
	qteTotal = 0
	displayCart()
};

//
// CODE PRINCIPAL
//

document.addEventListener('DOMContentLoaded', function () {
	// Récupération des données du localStorage
	if (typeof localStorage !== "undefined" && "wishlist" in localStorage){
		wishlist = JSON.parse(localStorage.getItem("wishlist"))
	}
	// Récupération des données du sessionStorage
	if (typeof sessionStorage !== "undefined" && "panier" in sessionStorage){
		cart = JSON.parse(sessionStorage.getItem("panier"))
		cartTotals()
	}
	// Affichage de la boutique, de la liste d'envies et du contenu du panier

	displayProducts();
	displayWishList();
	displayCart()

	// Définition des écouteurs d'événement

	// Tri croissant
	const croissant = document.getElementById('sort-ascending');
	croissant.addEventListener('click', ascendingSorting);

	// Tri décroissant
	const decroissant = document.getElementById('sort-descending');
	decroissant.addEventListener('click', descendingSorting);

	// Vider la wishlist
	const vider = document.getElementById('btn-empty-list');
	vider.addEventListener('click', emptyWishList);

	const afficher = document.getElementById('cart-resume')
	afficher.addEventListener('click', showHideCart)

	const viderpanier = document.getElementById('btn-empty-cart')
	viderpanier.addEventListener('click', emptyCart)
});
