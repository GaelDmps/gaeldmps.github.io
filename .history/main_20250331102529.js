// Création de la section projets
const projets = [
  {
    image: "./projets/images/liste.png",
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
    image1: "./img/escalade/salle-vide.jpg",
    image2: "./img/escalade/salle-haut.jpg",
    image3: "./img/escalade/escalade-moi.jpg",
    image4: "./img/escalade/suspendu.jpg",
    image5: "./img/escalade/suspendu-2.jpg",
    titre: "Ma passion sport : l'escalade",
    commentaire: "Je me suis mit a l'escalade avec mon meilleur ami et j'ai vite accroché au point d'en faire jusqu'à 12 heures par semaine quand j'étais a l'université. Depuis que j'y suis plus je vais a la grande salle de Besançon quand je peux."
}]

// création de la deuxième partie de la section passions --> la div manga
const manga = [
  {
    image1: "./img/manga/carnets-tome-14.jpg",
    image2: "./img/manga/carnets.jpg",
    image3: "./img/manga/frieren2.jpg",
    image4: "./img/manga/one-piece-100.jpg",
    image5: "./img/manga/sun-ken-rock.jpg",
    titre: "Les manga",
    commentaire: "Depuis quelques années j'adore les manga, lire tome après tome et découvrir les avecnturs des personnages que j'adore. Que ça soit du combat, de l'aventure, ou juste tout calme et plein de réflexion j'aime tout type d'histoire et si je suis pris dedans je peux lire jusqu'a un tome en une heure donc tout lire en une journée si je veux. Les dessins d'artistes tous aussi talentueux les uns que les autres me font plonger dasn leur univers j'aime cette sensation de liberté quand je lis."
}]

const setup = [
  {
    image1: "./img/setup/montage.jpg",
    image2: "./img/setup/setup-avant-pc.jpg",
    image3: "./img/setup/setup.jpg",
    image4: "./img/setup/setup-2.jpg",
    image5: "./img/setup/bibliotheque.jpg",
    titre: "Mon setup et mon décor?",
    commentaire: "En 2022 j'ai monté mon pc gamer pour mon plus grand bonheur. Dépenser mon premier salaire de job d'été dans un pc qui me donne toujours autant de délires pendant mes soirées jeux avec mes amis ou juste me permet de regarder ce que je veux posé tranquillement c'est incroyable. Le fait de l'avoir monté moi même a été une expérience que j'ai adoré. Depuis le montagede ce pc je l'améliore en ajoutant des composants comme plus de stockage en SSD ou plus de RAM ou en changeant certaines parties de mon setup comme la souris le tapis le clavier. Les parties les plus récentes sont une nouvelle chaise et un micro qui a changé mon expérience de jeu. J4ai hate de rejouer dessus après chaque fin de session, découvrir de nouveaux jeux et avoir toujours autant de fous rires avec mes amis."
}]

const jeux = [
  {
    image1: "./img/jeux/auto-craft.png",
    image2: "./img/jeux/horreur-1.png",
    image3: "./img/jeux/horreur-2.png",
    image4: "./img/jeux/subnautica-1.jpg",
    image5: "./img/jeux/subnautica.jpg",
    titre: "Les Jeux vidéo",
    commentaire: "Quand j'étais petit je jouais sur la Wii et maintenant je joue encore mais sur un ordinateur monté par mes soins et assez performant pour faire tourner plein de jeux comme ARK, Cyberpunk, Minecraft avec des mods par dizaines, Subnautica et plein d'autres. Les osirées jeux entre amis j'aodre ça qu'on joue a des jeux droles comme Lethal company ou des jeux plus calmes mais tout aussi droles en multi comme Minecraft. J¨Les jeux vidéo m'ont fait grandir et m'ont permi de profiter de moments inoubliables avec mes amis."
}]

const lego = [
  {
    image1: "./img/camera-lego.png",
    image2: "./img/fleur.jpg",
    image3: "./img/lego-marvel.jpg",
    image4: "./img/pots1.jpg",
    image5: "./img/roses.jpg",
    titre: "Les Lego",
    commentaire: ""
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


function showescalade() {

  const displayescalade = document.getElementById('escalade')

  displayescalade.innerHTML = ""

  for(const element of escalade){

    const articleesc = document.createElement('article')
    articleesc.classList.add('position')
    displayescalade.appendChild(articleesc)

    const divimages = document.createElement('div')
    divimages.classList.add('slider')
    articleesc.appendChild(divimages)
    
    const imgcontainer = document.createElement('div')
    imgcontainer.classList.add('slider-img')
    divimages.appendChild(imgcontainer)
    
    const imgescalade1 = document.createElement('img')
    imgescalade1.src = element.image1
    imgcontainer.appendChild(imgescalade1)
    
    const imgescalade2 = document.createElement('img')
    imgescalade2.src = element.image2
    imgcontainer.appendChild(imgescalade2)
    
    const imgescalade3 = document.createElement('img')
    imgescalade3.src = element.image3
    imgcontainer.appendChild(imgescalade3)
    
    const imgescalade4 = document.createElement('img')
    imgescalade4.src = element.image4
    imgcontainer.appendChild(imgescalade4)

    const imgescalade5 = document.createElement('img')
    imgescalade5.src = element.image5
    imgcontainer.appendChild(imgescalade5)
    
    const imgescaladeretour = document.createElement('img')
    imgescaladeretour.src = element.image1
    imgcontainer.appendChild(imgescaladeretour)

    const group = document.createElement('hgroup')
    articleesc.appendChild(group)

    const esctitre = document.createElement('h2')
    esctitre.innerText = element.titre
    group.appendChild(esctitre)

    const esccommentaire = document.createElement('p')
    esccommentaire.innerText = element.commentaire
    group.appendChild(esccommentaire)
  }
}
  
  function showmanga() {
  
    const displaymanga = document.getElementById('manga')
  
    displaymanga.innerHTML = ""
  
    for(const element of manga){
  
      const articlemanga = document.createElement('article')
      articlemanga.classList.add('position-inverse')
      displaymanga.appendChild(articlemanga)

      const group = document.createElement('hgroup')
      articlemanga.appendChild(group)
  
      const mangatitre = document.createElement('h2')
      mangatitre.innerText = element.titre
      group.appendChild(mangatitre)
  
      const mangacommentaire = document.createElement('p')
      mangacommentaire.innerText = element.commentaire
      group.appendChild(mangacommentaire)
  
      const divimages = document.createElement('div')
      divimages.classList.add('slider')
      articlemanga.appendChild(divimages)
      
      const imgcontainer = document.createElement('div')
      imgcontainer.classList.add('slider-img')
      divimages.appendChild(imgcontainer)
      
      const imgmanga1 = document.createElement('img')
      imgmanga1.src = element.image1
      imgcontainer.appendChild(imgmanga1)
      
      const imgmanga2 = document.createElement('img')
      imgmanga2.src = element.image2
      imgcontainer.appendChild(imgmanga2)
      
      const imgmanga3 = document.createElement('img')
      imgmanga3.src = element.image3
      imgcontainer.appendChild(imgmanga3)
      
      const imgmanga4 = document.createElement('img')
      imgmanga4.src = element.image4
      imgcontainer.appendChild(imgmanga4)
  
      const imgmanga5 = document.createElement('img')
      imgmanga5.src = element.image5
      imgcontainer.appendChild(imgmanga5)
      
      const imgmangaretour = document.createElement('img')
      imgmangaretour.src = element.image1
      imgcontainer.appendChild(imgmangaretour)
  
    }

}


function showsetup() {

  const displaysetup = document.getElementById('setup')

  displaysetup.innerHTML = ""

  for(const element of setup){

    const articlesetup = document.createElement('article')
    articlesetup.classList.add('position')
    displaysetup.appendChild(articlesetup)

    const divimages = document.createElement('div')
    divimages.classList.add('slider')
    articlesetup.appendChild(divimages)
    
    const imgcontainer = document.createElement('div')
    imgcontainer.classList.add('slider-img')
    divimages.appendChild(imgcontainer)
    
    const imgsetup1 = document.createElement('img')
    imgsetup1.src = element.image1
    imgcontainer.appendChild(imgsetup1)
    
    const imgsetup2 = document.createElement('img')
    imgsetup2.src = element.image2
    imgcontainer.appendChild(imgsetup2)
    
    const imgsetup3 = document.createElement('img')
    imgsetup3.src = element.image3
    imgcontainer.appendChild(imgsetup3)
    
    const imgsetup4 = document.createElement('img')
    imgsetup4.src = element.image4
    imgcontainer.appendChild(imgsetup4)

    const imgsetup5 = document.createElement('img')
    imgsetup5.src = element.image5
    imgcontainer.appendChild(imgsetup5)
    
    const imgsetupretour = document.createElement('img')
    imgsetupretour.src = element.image1
    imgcontainer.appendChild(imgsetupretour)

    const group = document.createElement('hgroup')
    articlesetup.appendChild(group)

    const setuptitre = document.createElement('h2')
    setuptitre.innerText = element.titre
    group.appendChild(setuptitre)

    const setupcommentaire = document.createElement('p')
    setupcommentaire.innerText = element.commentaire
    group.appendChild(setupcommentaire)
  }

}

function showjeux() {

  const displayjeux = document.getElementById('jeux')

  displayjeux.innerHTML = ""

  for(const element of jeux){

    const articlejeux = document.createElement('article')
    articlejeux.classList.add('position-inverse')
    displayjeux.appendChild(articlejeux)
    
    const group = document.createElement('hgroup')
    articlejeux.appendChild(group)

    const jeuxtitre = document.createElement('h2')
    jeuxtitre.innerText = element.titre
    group.appendChild(jeuxtitre)

    const jeuxcommentaire = document.createElement('p')
    jeuxcommentaire.innerText = element.commentaire
    group.appendChild(jeuxcommentaire)

    const divimages = document.createElement('div')
    divimages.classList.add('slider')
    articlejeux.appendChild(divimages)
    
    const imgcontainer = document.createElement('div')
    imgcontainer.classList.add('slider-img')
    divimages.appendChild(imgcontainer)
    
    const imgjeux1 = document.createElement('img')
    imgjeux1.src = element.image1
    imgcontainer.appendChild(imgjeux1)
    
    const imgjeux2 = document.createElement('img')
    imgjeux2.src = element.image2
    imgcontainer.appendChild(imgjeux2)
    
    const imgjeux3 = document.createElement('img')
    imgjeux3.src = element.image3
    imgcontainer.appendChild(imgjeux3)
    
    const imgjeux4 = document.createElement('img')
    imgjeux4.src = element.image4
    imgcontainer.appendChild(imgjeux4)

    const imgjeux5 = document.createElement('img')
    imgjeux5.src = element.image5
    imgcontainer.appendChild(imgjeux5)
    
    const imgjeuxretour = document.createElement('img')
    imgjeuxretour.src = element.image1
    imgcontainer.appendChild(imgjeuxretour)
  }
}

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
      this.color = 'rgb(14, 149, 19)';
      this.shadowColor = 'rgba(255, 255, 255, 0.7)'; // Ombre de la même couleur que la particule
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

// Appel des fonctions qui affichent les différentes parties de la page

  showprojects()
  showescalade()
  showmanga()
  showsetup()  
  showjeux()



});
