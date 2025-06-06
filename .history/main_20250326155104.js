// Création de la section projets
const projets = [
  {
    image: "./projets/images/pagetests.png",
    titre: "Ma première page test Javascript",
    explication: "J'ai fait mes premiers tests en Javascript .",
    bouton: "Voir la page",
    lien: "./projets/js-video/index.html"
  },
  {
    image: "./projets/images/burger.png",
    titre: "Page Menu Burger",
    explication: "Nous avons fait un menu burger avec du Javascript.",
    bouton: "Voir la page",
    lien: "./projets/menu-burger/index.html"
  },
  {
    image: "./projets/images/horlogejs.png",
    titre: "Horloge en temps réel",
    explication: "Sur cette page nous avons fait une horeloge qui affiche l'heure en temps réel avec du javascript.",
    bouton: "Voir la page",
    lien: "./projets/horloge-simple/index.html"
  },
  {
    image: "./projets/images/loto.png",
    titre: "Le loto",
    explication: "Jouez au loto il tire des chiffres au hasard entre 1 et 49.",
    bouton: "Voir la page",
    lien: "./projets/tirageloto/index.html"
  },
  {
    image: "./projets/images/lancerdes.png",
    titre: "Simulateur de lancé de dé",
    explication: "Sur cette page vous porrez retrouver un simlateur de lancé de dé qui donne un chiffre aléatoire entre 1 et 6.",
    bouton: "Voir la page",
    lien: "./projets/lance-de-des/index.html"
  },
  {
    image: "./projets/images/boutique.png",
    titre: "Site boutique en ligne",
    explication: "Cette page est un site de boutique en ligne avec du HTML du CSS et du javascript pour les fonctions de tri, de wishlist et de panier",
    bouton: "Voir la page",
    lien: "./projets/boutique/index.html"
  },
]

// création de la première partie de la section passions --> la div escalade
const escalade = [
  {
    image1: "./img/escalade/escalade-moi",
    image2: "./img/escalade/salle-haut",
    image3: "./img/escalade/salle-vide",
    image4: "./img/escalade/suspendu",
    image5: "./img/escalade/suspendu-2",
    titre: "Ma passion sport : l'escalade",
    commentaire: "Je me suis mit a l'escalade avec mon meilleur ami et j'ai vite accroché au point d'en faire jusqu'à 12 heures par semaine quand j'étais a l'université. Depuis que j'y suis plus je vais a la grande salle de Besançon quand je peux."
}]

function showprojects() {

  const displayprojets = document.getElementById('projets')

  displayprojets.innerHTML = ""

  for (const element of projets) {
    const projetarticle = document.createElement('article')
    projetarticle.classList.add('articleprojets')
    displayprojets.appendChild(projetarticle)

    const projettitle = document.createElement('h3')
    projettitle.innerText = element.titre
    projetarticle.appendChild(projettitle)

    const projetimg = document.createElement('img')
    projetimg.src = element.image
    projetarticle.appendChild(projetimg)

    const projetexplain = document.createElement('p')
    projetexplain.innerText = element.explication
    projetarticle.appendChild(projetexplain)

    const projetbutton = document.createElement('a')
    projetbutton.classList.add('button')
    projetbutton.innerText = element.bouton
    projetbutton.href = element.lien
    projetarticle.appendChild(projetbutton)


  }
  
}


function showescalade

document.addEventListener('DOMContentLoaded', () => {

   // Animation des particules

  // Création de l'élément canvas

  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1'; // placé a -1 pour passer sous le contenu
  canvas.style.pointerEvents = 'none'; // Ceci assure que les clics passent à travers vers les éléments en dessous 
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  // Classe Particule
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.color = 'rgba(255, 255, 255)';
      this.shadowColor = 'rgba(255, 0, 0, 0.3)'; // Ombre de la même couleur que la particule
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Réapparition de l'autre côté de l'écran
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();

      // Ajouter l'ombre à la particule
      ctx.shadowColor = this.shadowColor;
      ctx.shadowBlur = 10; // Intensité de l'ombre
    }
  }

  // Création des particules
  const particles = [];
  const numberOfParticles = 200;

  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle());
  }

  // Boucle d'animation
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    requestAnimationFrame(animate);
  }

  // Gestion du redimensionnement de la fenêtre
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Démarrage de l'animation
  animate();


  showprojects()







});

















// Sélection de l'élément qui suivra la souris
// const mousemove = document.querySelector('.mousemove');

// // Mise à jour de la position du cercle selon la position de la souris
// window.addEventListener('mousemove', (e) => {
//   mousemove.style.left = e.pageX + 'px';
//   mousemove.style.top = e.pageY + 'px';
// });
// // Effet d'animation au survol des éléments interactifs
// document.querySelectorAll('button, a, h1, h2, p').forEach(item => {
//   item.addEventListener('mouseover', () => {
//     mousemove.classList.add('hover');
//   });

//   item.addEventListener('mouseout', () => {
//     mousemove.classList.remove('hover');
//   });
// });