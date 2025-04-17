// Création de la section projets
"use strict"

const projets = [
  {
    image: "./projets/images/liste.webp",
    titre: "Trier une liste en JavaScript",
    explication: "Sur cette page il est possible de trier une liste. J'ai fait ça en travaux dirigés en groupe.",
    bouton: "Voir la page",
    lien: "./projets/liste-triee/index.html",
    page: "_blank",
    alt: "Trier une liste en JavaScript"
  },
  {
    image: "./projets/images/burger.png",
    titre: "Page Menu Burger",
    explication: "J'ai eu l'occasion de faire un menu burger en JavaScript.",
    bouton: "Voir la page",
    lien: "./projets/menu-burger/index.html",
    page: "_blank",
    alt: "Page Menu Burger"
  },
  {
    image: "./projets/images/horlogejs.png",
    titre: "Horloge en temps réel",
    explication: "Sur cette page une horloge qui affiche l'heure en temps réel avec JavaScript.",
    bouton: "Voir la page",
    lien: "./projets/horloge-simple/index.html",
    page: "_blank",
    alt: "Horloge en temps réel"
  },
  {
    image: "./projets/images/loto.png",
    titre: "Le loto",
    explication: "Jouez au loto, il tire des chiffres au hasard entre 1 et 49.",
    bouton: "Voir la page",
    lien: "./projets/tirageloto/index.html",
    page: "_blank",
    alt: "Le loto"
  },
  {
    image: "./projets/images/lancerdes.png",
    titre: "Simulateur de lancé de dé",
    explication: "Sur cette page vous pourrez retrouver un simlateur de lancé de dé à 6 faces.",
    bouton: "Voir la page",
    lien: "./projets/lance-de-des/index.html",
    page: "_blank",
    alt: "Simulateur de lancé de dé"
  },
  {
    image: "./projets/images/boutique.png",
    titre: "Site boutique en ligne",
    explication: "Cette page est un site de boutique en ligne faite avec du HTML, du CSS et du JavaScript pour les fonctions de tri, de wishlist et de panier.",
    bouton: "Voir la page",
    lien: "./projets/boutique/index.html",
    page: "_blank",
    alt: "Site boutique en ligne"
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
    commentaire: "L'escalade est pour moi bien plus qu'un sport. La salle d'escalade est un endroit ou je peux me surpasser et grimper toujours plus haut et augmenter la difficulté quand je me sens prêt a passer au palier suivant. C'est aussi un un sport qui se pratique en duo, donc communiquer, avoir confiance en la personne avec qui je grimpe est primordial pour éviter les accidents. En pratiquant j'ai donc appris a communiquer et travailler en équipe qui sont aujourd'hui des compétences très utiles dans le monde du travail.",
    alt1: "Salle d'escalade vide",
    alt2: "Salle d'escalade haute",
    alt3: "Moi en train de grimper",
    alt4: "Moi suspendu",
    alt5: "Moi suspendu 2",
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
    commentaire: "Depuis quelques années je lis des manga. Ces oeuvres aux histoires variées et pleines de magie, de combats ou simplement de planches a couper le souffle m'ont beaucoup apporté depuis le début. Voir mes personnages préférés se surpasser pour obtenir ce qu'ils veulent et atteindre leurs objectifs m'a inspiré et je fais de mon mieux pour ateindre mes propres objectifs personnels ou professionnels.",
    alt1: "Tome 14 de Carnets de l'apothicaire",
    alt2: "Carnets de l'apothicaire autres tomes",
    alt3: "Tome de Frieren",
    alt4: "Tome 100 de One Piece",
    alt5: "Tome de Sun Ken Rock",
  }]
  
// création de la troisième partie de la section passions --> la div setup
const setup = [
  {
    image1: "./img/setup/montage.jpg",
    image2: "./img/setup/setup-avant-pc.jpg",
    image3: "./img/setup/setup.jpg",
    image4: "./img/setup/setup-2.jpg",
    image5: "./img/setup/bibliotheque.jpg",
    titre: "Mon setup et mon décor?",
    commentaire: "En 2022 j'ai monté mon pc gaming. C'était la première fois que je touchais a des composants d'ordinateur, un ami qui avait aussi monté le sien m'a aidé. J'ai vraiment trouvé ce montage très intéressant et cela m'a permit d'aquérir des compétences dans ce domaine. C'est en partie grâce au montage de mon PC que j'ai voulu apprendre à coder. Cet ordinateur me permet également de jouer avec mes amis ou seul et découvrir des jeux vidéo de tout type piur découvrir dans quel univers je vais devoir évoluer, survivre ou construire pour avancer dans l'histoire. J'ai hâte de voir les jeux qui sortiront durant ces prochaines années pour pouvoir rire et les découvrir seul ou avec mes amis.",
    alt1: "Montage de mon PC",
    alt2: "Mon setup avant le montage de mon PC",
    alt3: "Mon setup",
    alt4: "Mon setup 2",
    alt5: "Ma bibliothèque",
}]

// création de la quatrième partie de la section passions --> la div jeux
const jeux = [
  {
    image1: "./img/jeux/auto-craft.png",
    image2: "./img/jeux/horreur-1.png",
    image3: "./img/jeux/horreur-2.png",
    image4: "./img/jeux/subnautica-1.jpg",
    image5: "./img/jeux/subnautica.jpg",
    titre: "Les Jeux vidéo",
    commentaire: "Quand j'étais petit je jouais sur la Wii, puis la Xbox One pour passer sur ordinateur. Je dois avoir une centaine de jeux sur mon PC, des jeux de plateau, de logique, d'horreur, de survie, j'ai tout type de jeux mais un en particulier me fait toujours autant rêver depuis que je peux jouer c'est Minecraft. Minecraft avec des mods qui ajoutent tout type de contenu que ça soit des créatures effrayantes, des biomes, ou même le mod le plus complet que j'ai trouvé jusqu'à aujourd'hui, le mod Create qui ajoute des mécanismes qui servent a tout faire. Transporter des objets, en fabriquer d'autres, les stocker et automatiser tout ce qui est possible et imaginables. Ce mod qui allie logique et imagination m'a fait me lancer dans le code, construire une structure pour tout relier et donner un résultat qui est esthétique, fonctionnel et pratique c'est tout ce que j'aime faire.",
    alt1: "machine minecraft pour Auto Craft",
    alt2: "mod minecraft d'horreur 1",
    alt3: "mod minecraft d'horreur 2",
    alt4: "Subnautica abysses",
    alt5: "Subnautica couché de soleil",
}]

// création de la cinquième partie de la section passions --> la div lego
const lego = [
  {
    image1: "./img/lego/camera-lego.png",
    image2: "./img/lego/fleur.jpg",
    image3: "./img/lego/lego-marvel.jpg",
    image4: "./img/lego/pots1.jpg",
    image5: "./img/lego/roses.jpg",
    titre: "Les Lego",
    commentaire: "Les Lego une de mes passions depuis mon plus jeune âge. Du plus loin que je me souvienne j'ai toujours été entouré de Lego, une source de créativité sans limite. J'ai sans doute commencé a jouer a minecraft parce que j'ai énormémément joué aux Lego avant. Plus récemment j'ai commencé une collection de Lego représentant des plantes. Je préfère davantage les Lego qui peuvent servir de décoration par rapport à avant quand je préférais les Lego pour avoir des personnages et créer des histoires. Je trouve les détails des plantes magnifiques et je suis impatient de voir les prochaines qui vont sortir pour possiblement les acheter.",
    alt1: "Lego camera disney",
    alt2: "Lego chrysantheme",
    alt3: "Lego Marvel",
    alt4: "Lego pots de fleurs",
    alt5: "Lego roses",
}]


// Fonction pour afficher les projets
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
    projetimg.alt = element.alt
    projetarticle.appendChild(projetimg)

    const projetexplain = document.createElement('p')
    projetexplain.innerText = element.explication
    projetarticle.appendChild(projetexplain)

    const projetbutton = document.createElement('a')
    projetbutton.classList.add('boutons-projets')
    projetbutton.innerText = element.bouton
    projetbutton.href = element.lien
    projetbutton.target = element.page
    projetarticle.appendChild(projetbutton)
  }
  
}

// Fonction pour afficher la section escalade
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
    imgescalade1.alt = element.alt1
    imgcontainer.appendChild(imgescalade1)
    
    const imgescalade2 = document.createElement('img')
    imgescalade2.src = element.image2
    imgescalade2.alt = element.alt2
    imgcontainer.appendChild(imgescalade2)
    
    const imgescalade3 = document.createElement('img')
    imgescalade3.src = element.image3
    imgescalade3.alt = element.alt3
    imgcontainer.appendChild(imgescalade3)
    
    const imgescalade4 = document.createElement('img')
    imgescalade4.src = element.image4
    imgescalade4.alt = element.alt4
    imgcontainer.appendChild(imgescalade4)

    const imgescalade5 = document.createElement('img')
    imgescalade5.src = element.image5
    imgescalade5.alt = element.alt5
    imgcontainer.appendChild(imgescalade5)
    
    const imgescaladeretour = document.createElement('img')
    imgescaladeretour.src = element.image1
    imgescaladeretour.alt = element.alt1
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
  
// Fonction pour afficher la section manga
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
      imgmanga1.alt = element.alt1
      imgcontainer.appendChild(imgmanga1)
      
      const imgmanga2 = document.createElement('img')
      imgmanga2.src = element.image2
      imgmanga2.alt = element.alt2
      imgcontainer.appendChild(imgmanga2)
      
      const imgmanga3 = document.createElement('img')
      imgmanga3.src = element.image3
      imgmanga3.alt = element.alt3
      imgcontainer.appendChild(imgmanga3)
      
      const imgmanga4 = document.createElement('img')
      imgmanga4.src = element.image4
      imgmanga4.alt = element.alt4
      imgcontainer.appendChild(imgmanga4)
  
      const imgmanga5 = document.createElement('img')
      imgmanga5.src = element.image5
      imgmanga5.alt = element.alt5
      imgcontainer.appendChild(imgmanga5)
      
      const imgmangaretour = document.createElement('img')
      imgmangaretour.src = element.image1
      imgmangaretour.alt = element.alt1
      imgcontainer.appendChild(imgmangaretour)
  
    }

}

// Fonction pour afficher la section setup
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
    imgsetup1.alt = element.alt1
    imgcontainer.appendChild(imgsetup1)
    
    const imgsetup2 = document.createElement('img')
    imgsetup2.src = element.image2
    imgsetup2.alt = element.alt2
    imgcontainer.appendChild(imgsetup2)
    
    const imgsetup3 = document.createElement('img')
    imgsetup3.src = element.image3
    imgsetup3.alt = element.alt3
    imgcontainer.appendChild(imgsetup3)
    
    const imgsetup4 = document.createElement('img')
    imgsetup4.src = element.image4
    imgsetup4.alt = element.alt4
    imgcontainer.appendChild(imgsetup4)

    const imgsetup5 = document.createElement('img')
    imgsetup5.src = element.image5
    imgsetup5.alt = element.alt5
    imgcontainer.appendChild(imgsetup5)
    
    const imgsetupretour = document.createElement('img')
    imgsetupretour.src = element.image1
    imgsetupretour.alt = element.alt1
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

// Fonction pour afficher la section jeux
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
    imgjeux1.alt = element.alt1
    imgcontainer.appendChild(imgjeux1)
    
    const imgjeux2 = document.createElement('img')
    imgjeux2.src = element.image2
    imgjeux2.alt = element.alt2
    imgcontainer.appendChild(imgjeux2)
    
    const imgjeux3 = document.createElement('img')
    imgjeux3.src = element.image3
    imgjeux3.alt = element.alt3
    imgcontainer.appendChild(imgjeux3)
    
    const imgjeux4 = document.createElement('img')
    imgjeux4.src = element.image4
    imgjeux4.alt = element.alt4
    imgcontainer.appendChild(imgjeux4)

    const imgjeux5 = document.createElement('img')
    imgjeux5.src = element.image5
    imgjeux5.alt = element.alt5
    imgcontainer.appendChild(imgjeux5)
    
    const imgjeuxretour = document.createElement('img')
    imgjeuxretour.src = element.image1
    imgjeuxretour.alt = element.alt1
    imgcontainer.appendChild(imgjeuxretour)
  }
}

// Fonction pour afficher la section lego
function showlego() {

  const displaylego = document.getElementById('lego')

  displaylego.innerHTML = ""

  for(const element of lego){

    const articlelego = document.createElement('article')
    articlelego.classList.add('position')
    displaylego.appendChild(articlelego)
    
    const divimages = document.createElement('div')
    divimages.classList.add('slider')
    articlelego.appendChild(divimages)
    
    const imgcontainer = document.createElement('div')
    imgcontainer.classList.add('slider-img')
    divimages.appendChild(imgcontainer)
    
    const imglego1 = document.createElement('img')
    imglego1.src = element.image1
    imglego1.alt = element.alt1
    imgcontainer.appendChild(imglego1)
    
    const imglego2 = document.createElement('img')
    imglego2.src = element.image2
    imglego2.alt = element.alt2
    imgcontainer.appendChild(imglego2)
    
    const imglego3 = document.createElement('img')
    imglego3.src = element.image3
    imglego3.alt = element.alt3
    imgcontainer.appendChild(imglego3)
    
    const imglego4 = document.createElement('img')
    imglego4.src = element.image4
    imglego4.alt = element.alt4
    imgcontainer.appendChild(imglego4)
    
    const imglego5 = document.createElement('img')
    imglego5.src = element.image5
    imglego5.alt = element.alt5
    imgcontainer.appendChild(imglego5)
    
    const imglegoretour = document.createElement('img')
    imglegoretour.src = element.image1
    imglegoretour.alt = element.alt1
    imgcontainer.appendChild(imglegoretour)
    
    const group = document.createElement('hgroup')
    articlelego.appendChild(group)
    
    const legotitre = document.createElement('h2')
    legotitre.innerText = element.titre
    group.appendChild(legotitre)
    
    const legocommentaire = document.createElement('p')
    legocommentaire.innerText = element.commentaire
    group.appendChild(legocommentaire)
  }
}

// event pour charger le contenu de la page une fois le DOM chargé
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

  // Classe Particule qui définit leurs propriétés et comportements
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 4 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.color = 'rgb(18, 205, 25)';
      this.shadowColor = 'rgba(255, 255, 255, 0.85)'; // Ombre blanche pour faire ressortir les particules
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
  const numberOfParticles = 300; // Nombre de particules à créer sur la page

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


  // Event scroll pour le header et le bouton de retour en haut de page

  const header = document.querySelector("header");

  window.addEventListener('scroll', () => {    
    if (window.scrollY > 100) {
        header.classList.add('headerscroll')
    } else {
        header.classList.remove('headerscroll')
    }
})


// Menu Burger
const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger-menu');

if (burgerIcon) {
  burgerIcon.addEventListener('click', function() {
    this.classList.toggle('change');
    burgerMenu.classList.toggle('active');
  });
}

// Fermer le menu si on clique sur un lien
const burgerLinks = document.querySelectorAll('.burger-menu a');
burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerIcon.classList.remove('change');
    burgerMenu.classList.remove('active');
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
  if (!burgerIcon.contains(e.target) && !burgerMenu.contains(e.target) && burgerMenu.classList.contains('active')) {
    burgerIcon.classList.remove('change');
    burgerMenu.classList.remove('active');
  }
});

// Appel des fonctions qui affichent les différentes parties de la page

  showprojects()
  showescalade()
  showmanga()
  showsetup()  
  showjeux()
  showlego()
});
