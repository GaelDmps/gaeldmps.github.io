// Script pour la page d'affiches Goodiiz

// Variables globales pour l'administration
let isAdminLoggedIn = false;
let isAdminModeActive = false;
let posterStatuses = JSON.parse(localStorage.getItem('posterStatuses')) || {};

// Mapping des catégories vers les dossiers d'images
const categoryMapping = {
    'Cinéma': 'CINÉMA',
    'Marvel': 'MARVEL',
    'DC Comics': 'DC COMICS',
    'Star Wars': 'STAR WARS',
    'Indiana Jones': 'INDIANA JONES',
    'Jurassic Park': 'JURASSIC PARK',
    'Transformers': 'TRANSFORMERS',
    'Disney': 'DISNEY',
    'Harry Potter': 'HARRY POTTER',
    'Le Seigneur des Anneaux': 'SEIGNEUR DES ANNEAUX',
    'Teenage Mutant Ninja Turtles': 'TMNT',
    'Les Goonies': 'GOONIES',
    'Retour vers le futur': 'RETOUR VERS LE FUTUR',
    'Friends': 'FRIENDS',
    'Mercredi': 'MERCREDI',
    'Stranger Things': 'STRANGER THINGS',
    'Peaky Blinders': 'PEAKY BLINDERS',
    'Rick et Morty': 'RICK ET MORTY',
    'Horreur': 'HORREUR',
    'Divers': 'DIVERS'
};

// Liste des images disponibles pour chaque catégorie (basée sur votre structure de dossiers)
// Extrait en global pour réutilisation (cartes et affichage des posters)
const posterImages = {
    'CINÉMA': [
        'images/CINÉMA/BEETLEJUICE - ABYDCO626 (12).jpg',
    ],
    'MARVEL': [
        'images/MARVEL/AVENGERS EARTH MIGHTIEST HEROES - GPE5307 (189).jpg',
    ],
    'DC COMICS': [
        'images/DC COMICS/BATMAN ARKHAM ORIGINS - GPE4909 (86).jpg',
    ],
    'DISNEY': [
        'images/DISNEY/ETRANGE NOEL DE MONSIEUR JACK - GPE5520 (108).jpg',
    ],
    'DIVERS': [
        'images/DIVERS/BASKETBALL SUPERSTARS - GPE5676 (6).jpg',
    ],
    'FRIENDS': [
        'images/FRIENDS/FRIENDS CENTRAL PERK - ABYDCO730 (5).jpg',
    ],
    'GOONIES': [
        'images/GOONIES/LES GOONIES - G710090 - 102X69  (271).jpg',
    ],
    'HARRY POTTER': [
        'images/HARRY POTTER/BAGUETTES SORCIERS - PP34395 (182).jpg',
    ],
    'HORREUR': [
        'images/HORREUR/ALIEN RESURRECTION - G424652 - 98X68.5 (285).jpg',
    ],
    'INDIANA JONES': [
        'images/INDIANA JONES/INDIANA JONES ET LE TEMPLE MAUDIT - G164161 - 102X68 (260).jpg',
    ],
    'JURASSIC PARK': [
        'images/JURASSIC PARK/BACK COUNTRY - GBYDCO033 (219).jpg',
    ],
    'MERCREDI': [
        'images/MERCREDI/MERCREDI DANSE - GPE5748 (68).jpg',
    ],
    'PEAKY BLINDERS': [
        'images/PEAKY BLINDERS/PEAKY BLINDERS TOMMY - MX00053 (105).jpg',
    ],
    'RETOUR VERS LE FUTUR': [
        'images/RETOUR VERS LE FUTUR/RETOUR VERS LE FUTUR 1.21 GW - PP35035 (165).jpg',
    ],
    'RICK ET MORTY': [
        'images/RICK ET MORTY/DOODOO DADDY - GPE5448 (9).jpg',
    ],
    'SEIGNEUR DES ANNEAUX': [
        'images/SEIGNEUR DES ANNEAUX/ANNEAU UNIQUE - ABYDCO774 (31).jpg',
    ],
    'STAR WARS': [
        'images/STAR WARS/AHSOKA - GPE5494 (106).jpg',
    ],
    'STRANGER THINGS': [
        'images/STRANGER THINGS/DEMOGORGON LIVE - GPE5775 (154).jpg',
    ],
    'TMNT': [
        'images/TMNT/TMNT STOP - GPE5894 (213).jpg',
    ],
    'TRANSFORMERS': [
        'images/TRANSFORMERS/RISE OF THE BEASTS - GPE5792 (236).jpg',
    ],
};

// Détecter l'ouverture du fichier en local (file://)
const isFileProtocol = location.protocol === 'file:';

// Fonction pour afficher les posters d'une catégorie
function showPosters(categoryName) {
    const folderName = categoryMapping[categoryName];
    if (!folderName) {
        console.error('Catégorie non trouvée:', categoryName);
        return;
    }

    // Recharger les statuts depuis localStorage au cas où ils auraient changé
    posterStatuses = JSON.parse(localStorage.getItem('posterStatuses')) || {};

    // Masquer les sections principales
    document.querySelector('main').style.display = 'none';
    document.querySelector('header').style.display = 'none';
    document.querySelector('footer').style.display = 'none';

    // Afficher la section des posters
    const postersSection = document.getElementById('posters-section');
    const postersTitle = document.getElementById('posters-title');
    const postersGrid = document.getElementById('posters-grid');

    postersTitle.textContent = categoryName;
    postersSection.style.display = 'block';
    
    // Ajouter l'attribut data-category pour les styles spécifiques
    postersSection.setAttribute('data-category', categoryName);
    
    // Ajouter aussi une classe CSS pour plus de compatibilité
    postersSection.className = 'posters-section category-' + categoryName.toLowerCase().replace(/\s+/g, '-').replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o').replace(/[ùúûü]/g, 'u');

    // Vider la grille des posters
    postersGrid.innerHTML = '';

    // Afficher les vraies images des posters
    // Liste des images disponibles pour chaque catégorie (basée sur votre structure de dossiers)
    const posterImages = {
        'CINÉMA': [
            'images/CINÉMA/BEETLEJUICE - ABYDCO626 (12).jpg',
            'images/CINÉMA/BEETLEJUICE BEETLEJUICE - GBYDCO670 (206).jpg',
            'images/CINÉMA/BEETLEJUICE BEETLEJUICE 2 - GPE5886 (212).jpg',
            'images/CINÉMA/DRAGON LIVE ACTION - GPE6002 (346).jpg',
            'images/CINÉMA/E.T - GPE5531 (113).jpg',
            'images/CINÉMA/E.T AFFICHE FILM - GBYDCO096 (50).jpg',
            'images/CINÉMA/EVASION NEW YORK - G141766 -101.5X68.5 (272).jpg',
            'images/CINÉMA/GHOSTBUSTERS FROZEN EMPIRE - PP2400306 (30).jpg',
            'images/CINÉMA/GLADIATOR - G680445 - 98X68.5 (289).jpg',
            'images/CINÉMA/GREMLINS NO FOOD - GBYDCOA002 (350).jpg',
            'images/CINÉMA/2001 L\'ODYSSEE DE L\'ESPACE - G878135 (301).jpg',
            'images/CINÉMA/DIRTY DANCING - G136030 - 101X68 (248).jpg',
            'images/CINÉMA/E.T VAISSEAU - GBYDCO095 (51).jpg',
            'images/CINÉMA/FIGHT CLUB INFOGRAPHIC - PP32912 (80).jpg',
            'images/CINÉMA/FIGHT CLUB SOAP - G864080 (311).jpg',
            'images/CINÉMA/FORREST GUMP - G877865 (312).jpg',
            'images/CINÉMA/FULL METAL JACKET - G123760 - 98X68.5 (288).jpg',
            'images/CINÉMA/GHOSTBUSTERS LOGO - GPE5502 (137).jpg',
            'images/CINÉMA/GODZILLA - G388260 - 101X67 (253).jpg',
            'images/CINÉMA/GODZILLA 1997 - G421805 - 101.5X68.5 (254).jpg',
            'images/CINÉMA/GREMLINS ORIGINALS - GPE5344 (100).jpg',
            'images/CINÉMA/KING KONG - G179450 - 100X70 (263).jpg',
            'images/CINÉMA/LE SIXIEME SENS - G588582 - 98X68.5 (292).jpg',
            'images/CINÉMA/LEON - G297105 - 101.5X69.5 (269).jpg',
            'images/CINÉMA/LEON - G297117 - 102X68 (270).jpg',
            'images/CINÉMA/LES AFFRANCHIS - G877860 (323).jpg',
            'images/CINÉMA/MEN IN BLACK - G405130 - 101X68 (274).jpg',
            'images/CINÉMA/METROPOLIS - G1477824 - 157X51.5 (245).jpg',
            'images/CINÉMA/ORANGE MECANIQUE - GPE5327 (103).jpg',
            'images/CINÉMA/PULP FICTION - G295049 (326).jpg',
            'images/CINÉMA/PULP FICTION - G843660 - 158X53 (246).jpg',
            'images/CINÉMA/PULP FICTION GUNS - G295064 (327).jpg',
            'images/CINÉMA/SE7EN - G326580 - 102X68 (276).jpg',
            'images/CINÉMA/TAXI DRIVER - G161150 101.5X68 (280).jpg',
            'images/CINÉMA/THE BIRDS - GPE5571 (146).jpg',
            'images/CINÉMA/THE BREAKFAST CLUB - GPE5691 (148).jpg',
            'images/CINÉMA/THE ROCKY HORROR PICTURE SHOW - G149470 - 101.5X68.5 (281).jpg',
            'images/CINÉMA/TOP GUN - PP34631 (164).jpg',
            'images/CINÉMA/VERTIGO - G173802 - 99.5X68.5 (284).jpg',
            'images/CINÉMA/JAMES BOND 25 MOVIES - G879490 (317).jpg',
            'images/CINÉMA/LA MORT AUX TROUSSES - GPE5746 (36).jpg',
            'images/CINÉMA/LE GEANT DE FER - G595605 - 100X70  (264).jpg',
            'images/CINÉMA/LE PARRAIN - GPE5896 (209).jpg',
            'images/CINÉMA/LE PARRAIN 1 - G833535 (319).jpg',
            'images/CINÉMA/LE PARRAIN COULEUR - G878360 (320).jpg',
            'images/CINÉMA/NOCES FUNEBRES VICTOR ET EMILY - ABYDCO813 (40).jpg',
            'images/CINÉMA/ROCKY FILM - GPE5754 (121).jpg',
            'images/CINÉMA/SCARFACE  - PP32598 (129).jpg',
            'images/CINÉMA/SCARFACE COVER - G140320 (328).jpg',
            'images/CINÉMA/SE7EN - G881500 (329).jpg',
            'images/CINÉMA/TARANTINO FILMS - G869005 (334).jpg',
            'images/CINÉMA/TERMINATOR - G877875 (335).jpg',
            'images/CINÉMA/THE BIG LEBOWSKI - G875945 (336).jpg',
            'images/CINÉMA/THE BREAKFAST CLUB DON\'T FORGET ABOUT ME - GPE5567 (225).jpg',
            'images/CINÉMA/TRAINSPOTTING - G349741 - 101.5X68.5 (282).jpg',
            'images/CINÉMA/TUEURS NES - G293372 - 98X68.5 (299).jpg',
            'images/CINÉMA/WEST SIDE STORY - GPE5572 (172).jpg'
        ],
        'MARVEL': [
            'images/MARVEL/AVENGERS EARTH MIGHTIEST HEROES - GPE5307 (189).jpg',
            'images/MARVEL/AVENGERS INFINITY WAR - GPE5252 (94).jpg',
            'images/MARVEL/AVENGERS ULTRON - G865990 (302).jpg',
            'images/MARVEL/BANG - PP33792 (24).jpg',
            'images/MARVEL/BLACK PANTHER - GPE5702 (133).jpg',
            'images/MARVEL/BLACK PANTHER GLOW - G873365 (303).jpg',
            'images/MARVEL/BLACK PANTHER PERSO - GPE5190 (190).jpg',
            'images/MARVEL/BLACK PANTHER STANCE - G873210 (304).jpg',
            'images/MARVEL/CAPTAIN AMERICA - GPE4475 (81).jpg',
            'images/MARVEL/CAPTAIN AMERICA BEAVE NEW WORLD - GPE5943 (239).jpg',
            'images/MARVEL/CAPTAIN AMERICA BRAVE NEW WORLD COMICS - GPE5944 (240).jpg',
            'images/MARVEL/CIVIL WAR CAPTAIN AMERICA VS IRON MAN - GPE4985 (88).jpg',
            'images/MARVEL/COMICS COVERS - GPE4785 (47).jpg',
            'images/MARVEL/DAREDEVIL BORN AGAIN - GPE6007 (347).jpg',
            'images/MARVEL/DEADPOOL BULLETS AND CHIMICHANGAS - GPE5790 (157).jpg',
            'images/MARVEL/DEADPOOL SHATTERED - PP34782 (193).jpg',
            'images/MARVEL/DEADPOOL WADE VS WADE - PP33796 (161).jpg',
            'images/MARVEL/DEADPOOL WOLVERINE COMICS - GPE5878 (199).png',
            'images/MARVEL/DEADPOOL WOLVERINE NEGATIF - GPE5880 (198).png',
            'images/MARVEL/AVENGERS ENDGAME  - GPE5310 (95).jpg',
            'images/MARVEL/BLACK WIDOW - GPE5574 (226).jpg',
            'images/MARVEL/DEADPOOL WOLVERINE WEAPONS - GPE5879 (196).png',
            'images/MARVEL/DOCTOR STRANGE MULTIVERSE  - GPE5658 (125).jpg',
            'images/MARVEL/FANTASTIC FOUR 1ST STEPS - GPE5946 (341).jpg',
            'images/MARVEL/GROOT DYNAMITE - G871665 (316).jpg',
            'images/MARVEL/LOKI BELIEVE - GPE5515 (41).jpg',
            'images/MARVEL/SPIDER MAN - G734787 - 101.5X68.5 (278).jpg',
            'images/MARVEL/SPIDER MAN COMICS - GPE5191 (187).jpg',
            'images/MARVEL/SPIDER-MAN INTO THE SPIDER-VERSE - G874890 (332).jpg',
            'images/MARVEL/VENOM LEGACY - GPE5914 (210).jpg',
            'images/MARVEL/WANDAVISION - GPE5647 (227).jpg',
            'images/MARVEL/WE ARE VENOM - GPE5645 (176).jpg',
            'images/MARVEL/GROOT CHILL TIME - GPE5716 (134).jpg',
            'images/MARVEL/GROOT GARDIENS DE LA GALAXIE 2 - GPE5150 (91).jpg',
            'images/MARVEL/GROOT GET YOUR GROOT ON - GPE5717 (135).jpg',
            'images/MARVEL/GROOT THE LITTLE GUY - GPE5718 (136).jpg',
            'images/MARVEL/LES GARDIENS DE LA GALAXIE VOL 1 - GPE4842 (84).jpg',
            'images/MARVEL/LES GARDIENS DE LA GALAXIE VOL 2 - GPE5133 (90).jpg',
            'images/MARVEL/LES GARDIENS DE LA GALAXIE VOL 3  - GPE5783 (155).jpg',
            'images/MARVEL/LOKI GLORIOUS PURPOSE - PP34928 (188).jpg',
            'images/MARVEL/MARVEL COMICS - GPE4786 (49).jpg',
            'images/MARVEL/MARVEL LEGACY ROSS - GPE5788 (233).jpg',
            'images/MARVEL/MOON KNIGHT - GPE5659 (126).jpg',
            'images/MARVEL/MULTIVERSE OF MADNESS - GPE5657 (73).jpg',
            'images/MARVEL/SPIDER GEDDON 1 - GPE5786 (173).jpg',
            'images/MARVEL/SPIDER GEDDON 2 - GPE5785 (156).jpg',
            'images/MARVEL/SPIDER MAN 2 - G789375 - 101.5X 68.5 (279).jpg',
            'images/MARVEL/SPIDER MEN - GPE5643 (174).jpg',
            'images/MARVEL/SPIDER-MAN 2 - GPE5823 (211).jpg',
            'images/MARVEL/SPIDER-MAN GOTCHA - GPE5644 (242).jpg',
            'images/MARVEL/SPIDER-MAN THWIP - GPE5642 (124).jpg',
            'images/MARVEL/SPIDER-MAN VS SINISTER 6 - GPE5787 (241).jpg',
            'images/MARVEL/THOR 2 LOKI - G862340 (338).jpg',
            'images/MARVEL/THUNDERBOLTS - GPE5997 (344).jpg',
            'images/MARVEL/VENOM COMICBOOK -GPE5646 (234).jpg',
            'images/MARVEL/VENOM DARK FACE - GPE5884 (214).jpg',
            'images/MARVEL/VENOM SYMBIOTES - GPE5883 (215).jpg',
            'images/MARVEL/X MEN 97 - GPE5903 (203).jpg',
            'images.MARVEL/SPIDER-MAN MOON - PP33446 (355).jpg'
        ],
        'DC COMICS': [
            'images/DC COMICS/BATMAN ARKHAM ORIGINS - GPE4909 (86).jpg',
            'images/DC COMICS/DC COMICS 90 ANS - GPE5848 (228).jpg',
            'images/DC COMICS/BATMAN 100TH - GPE5741 (141).jpg',
            'images/DC COMICS/BATMAN FOND ROUGE - ABYDCO704 (28).jpg',
            'images/DC COMICS/BATMAN JOKER CARTE - GBYDCO956 (232).jpg',
            'images/DC COMICS/BATMAN WARNER 100TH - GBYDCO405 (26).jpg',
            'images/DC COMICS/WONDER WOMAN SWORD - GPE5142 (221).jpg',
            'images/DC COMICS/JOKER ALEX ROSS VERSION - FP4806 (216).jpg',
            'images/DC COMICS/JOKER ARKHAM ORIGINS - GPE4908 (85).jpg',
            'images/DC COMICS/JOKER DARK KNIGHT - GPE4937 (87).jpg',
            'images/DC COMICS/JOKER HAHAHA - GPE5375 (170).jpg',
            'images/DC COMICS/JOKER MOVIE - G876435 (318).jpg',
            'images/DC COMICS/LONG LIVE THE BAT - GPE5376 (132).jpg',
            'images/DC COMICS/SUPERMAN - ABYDCO754 (27).jpg',
            'images/DC COMICS/SUPERMAN 100TH - GPE5742 (142).jpg',
            'images/DC COMICS/SUPERMAN 2025 - GPE6000 (345).jpg',
            'images/DC COMICS/THE FLASH - BATCAVE - GPE5770 (150).jpg',
            'images/DC COMICS/THE FLASH - BATMAN - GPE5772 (152).jpg',
            'images/DC COMICS/THE FLASH - FLASH - GPE5771 (151).jpg',
            'images/DC COMICS/THE FLASH SERIE - G865675 (337).jpg',
            'images/DC COMICS/WHY SO SERIOUS - G845730 - 98X68.5 (296).jpg',
            'images/DC COMICS/WONDER WOMAN 100TH - GPE5743 (143).jpg'
        ],
        'DISNEY': [
            'images/DISNEY/ETRANGE NOEL DE MONSIEUR JACK - GPE5520 (108).jpg',
            'images/DISNEY/ETRANGE NOEL DE MR JACK PORTE - PPGE8107 - 158X53 (300) 10€.jpg',
            'images/DISNEY/JACK SKELLINGTON - GPE5352 (101).jpg',
            'images/DISNEY/JACK & ZERO - PP34051 (354).jpg',
            'images/DISNEY/LE ROI LION - GPE5311 (96).jpg',
            'images/DISNEY/LE ROI LION SIMBA - GPE5303 (192).jpg',
            'images/DISNEY/PIRATES DES CARAIBES - G767583 - 98X68.5 (294).jpg',
            'images/DISNEY/PRINCESSES - GPE5773 (153).jpg',
            'images/DISNEY/STITCH - GPE5522 (110).jpg',
            'images/DISNEY/STITCH CHILLIN - GPE5732 (139).jpg',
            'images/DISNEY/STITCH LIVE ACTION AFFICHE - GPE6009 (348).jpg',
            'images/DISNEY/STITCH LIVE ACTION ALOHA - GPE5956 (343).jpg',
            'images/DISNEY/STITCH LIVE ACTION LIVE ACTION - GPE5951 (342).jpg',
            'images/DISNEY/SUMMER FEAR FEST L ETRANGE NOEL DE MONSIEUR JACK - GPE5521 (109).jpg',
            'images/DISNEY/TOY STORY 4 TO INFINITY - GPE5319 (97).jpg',
            'images/DISNEY/VICE VERSA 2 - GPE5885 (200).jpg',
        ],
        'DIVERS': [
            'images/DIVERS/BASKETBALL SUPERSTARS - GPE5676 (6).jpg',
            'images/DIVERS/BREAKING BAD THE ONE WHO KNOCKS - G861510 (306).jpg',
            'images/DIVERS/COBRA KAI - PP34737 (34).jpg',
            'images/DIVERS/DISOBEY - GPE5240 (160).jpg',
            'images/DIVERS/GAME OF THRONES CARTE DU WESTEROS - GBYDCO140 (38).jpg',
            'images/DIVERS/COBRA KAI NO MERCY - PP34736 (14).jpg',
            'images/DIVERS/COBRA KAI THE KARATE KID  - PP34735 (16).jpg',
            'images/DIVERS/DOCTOR WHO TARDIS BD - FP3470 (46).jpg',
            'images/DIVERS/DOCTOR WHO TARDIS EXPLOSION - FP3126 (21).jpg',
            'images/DIVERS/FOUR WHEELS ICONS - GPE5459 (37).jpg',
            'images/DIVERS/FUTURAMA THINK - G846430 (314).jpg',
            'images/DIVERS/HOUSE OF DRAGON FIRE & BLOOD - GPE5855 (197).png',
            'images/DIVERS/SHERLOCK - G867320 (330).jpg',
            'images/DIVERS/WALKING DEAD - G861460 (339).jpg',
            'images/DIVERS/HOUSE OF DRAGON - GBYDCO207 (180).jpg',
            'images/DIVERS/HOUSE OF DRAGON FIRE WILL REIGN - GPE5856 (201).jpg',
            'images/DIVERS/HOUSE OF DRAGON WESTEROS - GPE5857 (205).jpg',
            'images/DIVERS/KNIGHT RIDER - GPE5569 (42).jpg',
            'images/DIVERS/PINK FLOYD THE WALL - PP34838 (107).jpg',
            'images/DIVERS/ROLLING STONES LEVRES - LP1667 (43).jpg',
            'images/DIVERS/SNEAKER LEGENDS - G881370 (331).jpg',
            'images/DIVERS/SNEAKERS HALL OF FAME - GPE5534 (130).jpg',
            'images/DIVERS/THE KARATE KID SUNSET - PP34863 (159).jpg',
            'images/DIVERS/THE OFFICE SOUVENIRS - GBYDCO682 (217).jpg',
            'images/DIVERS/THE WITCHER AFFICHE - FP4981 (1).jpg',
            'images/DIVERS/THE WITCHER ESQUISSE GERALT - FP4940 (4).jpg',
            'images/DIVERS/THE WITCHER PORTAIT GERALT - FP4982 (3).jpg'
        ],
        'FRIENDS': [
            'images/FRIENDS/FRIENDS CENTRAL PERK - ABYDCO730 (5).jpg',
            'images/FRIENDS/FRIENDS PERSONNAGES - GPE5326 (167).jpg',
            'images/FRIENDS/FRIENDS MILSHAKE - FP3109 (71).jpg',
            'images/FRIENDS/FRIENDS NEW YORK - GPE5294 (72).jpg'
        ],
        'GOONIES': [
            'images/GOONIES/LES GOONIES - G710090 - 102X69  (271).jpg',
            'images/GOONIES/LES GOONIES - GPE5682 (53).jpg',
            'images/GOONIES/LES GOONIES IT´S OUR TIME DOWN HERE - GPE5722 (54).jpg',
            'images/GOONIES/LES GOONIES NEVER SAY DIE! - GPE5721 (55).jpg'
        ],
        'HARRY POTTER': [
            'images/HARRY POTTER/BAGUETTES SORCIERS - PP34395 (182).jpg',
            'images/HARRY POTTER/CARTE DU MARAUDEUR - ABYDCO543 (17).jpg',
            'images/HARRY POTTER/CHATEAU POUDLARD - ABYDCO767 (25).jpg',
            'images/HARRY POTTER/EMBLEME GRYFFONDOR - ABYDCO778 (33).jpg',
            'images/HARRY POTTER/EMBLEME POUFSOUFFLE - GBYDCO065 (11).jpg',
            'images/HARRY POTTER/EMBLEME SERDAIGLE - GBYDCO066 (69).jpg',
            'images/HARRY POTTER/EMBLEME SERPENTARD - ABYDCO777 (13).jpg',
            'images/HARRY POTTER/EXPECTO PATRONUM - GBYDCO656 (218).jpg',
            'images/HARRY POTTER/HARRY POTTER PATRONUS - FP4513 (18).jpg',
            'images/HARRY POTTER/HOGWARTS EXPRESS - ABYDCO542 (8).jpg',
            'images/HARRY POTTER/MAISONS POUDLARD - GPE5650 (184).jpg',
            'images/HARRY POTTER/SORTILEGES - GPE5160 (194).jpg',
            'images/HARRY POTTER/HARRY POTTER 100TH - GPE5744 (144).jpg',
            'images/HARRY POTTER/HARRY POTTER AFFICHE - FP2698 (7).jpg',
            'images/HARRY POTTER/HARRY POTTER EMBLEME ANIMAUX - FP4996 (19).jpg',
            'images/HARRY POTTER/HARRY POTTER INDESIRABLE NUMERO 1 - ABYDCO768 (15).jpg',
            'images/HARRY POTTER/HARRY POTTER LISTE ECOLE - ABYDCO779 (35).jpg',
            'images/HARRY POTTER/QUIDDITCH AT HOGWARTS - PP34067 (183).jpg',
            'images/HARRY POTTER/RELIQUES DE LA MORT - GPE5320 (195).jpg',
            'images/HARRY POTTER/WANTED SIRIUS BLACK - ABYDCO380 (352).jpg'
        ],
        'HORREUR': [
            'images/HORREUR/ALIEN RESURRECTION - G424652 - 98X68.5 (285).jpg',
            'images/HORREUR/CA CHAPITRE 2 - GPE5336 (23).jpg',
            'images/HORREUR/CHUCKY 2 - GBYDCO190 (79).jpg',
            'images/HORREUR/DENTS DE LA MER NB - GBYDCO134 (64).jpg',
            'images/HORREUR/DRACULA - GBYDCO191 (67).jpg',
            'images/HORREUR/EVIL DEAD II - G503610 - 98X68.5 (286).jpg',
            'images/HORREUR/FRANKENSTEIN - GBYDCO192 (66).jpg',
            'images/HORREUR/FREDDY KRUEGER - G881205 (313).jpg',
            'images/HORREUR/ALIEN - G734280 -  158X53 (243).jpg',
            'images/HORREUR/ALIEN VS PREDATOR - G827860 - 101.5X68.5 (247).jpg',
            'images/HORREUR/DENTS DE LA MER - FP4815 (65).jpg',
            'images/HORREUR/EVIL DEAD III - G266060 - 98X68 (287).jpg',
            'images/HORREUR/SHINING - G149800 - 98X68.5 (295).jpg',
            'images/HORREUR/THE SHINING LES JUMELLES - GPE5331 (98).jpg',
            'images/HORREUR/VENDREDI 13 JASON LIVES - GBYDCO221 (74).jpg',
            'images/HORREUR/HELLRAISER - G141430 - 100X68.5 (255).jpg',
            'images/HORREUR/HELLRAISER III - G258445 - 101.2X67.7 (256).jpg',
            'images/HORREUR/JAWS - G131850 - 101.3X68.8 (262).jpg',
            'images/HORREUR/JAWS AFFICHE - GPE5530 (224).jpg',
            'images/HORREUR/MASSACRE A LA TRONÇONNEUSE - G878010 (324).jpg',
            'images/HORREUR/MASSACRE A LA TRONCONNEUSE AU TEXAS - G139632 - 101X68 (273).jpg',
            'images/HORREUR/SLEEPY HOLLOW - G589705 - 101X68 (277).jpg',
            'images/HORREUR/THE EXORCIST - GPE5335 (99).jpg',
            'images/HORREUR/THE THING - GPE5563 (119).jpg',
            'images/HORREUR/UNE NUIT EN ENFER - G331240 - 101.5 X 68.5 (283).jpg',
            'images/HORREUR/THE LOST BOYS - PP34887 (356).jpeg'
        ],
        'INDIANA JONES': [
            'images/INDIANA JONES/INDIANA JONES ET LE TEMPLE MAUDIT - G164161 - 102X68 (260).jpg',
            'images/INDIANA JONES/INDIANA JONES ET LA DERNIERE CROISADE - G164170 - 101.5X68.5 (261).jpg',
            'images/INDIANA JONES/INDIANA JONES ET LE TEMPLE MAUDIT - G164160 - 101X68 (259).jpg',
            'images/INDIANA JONES/LES AVENTURIERS DE L_ARCHE PERDUE - G164150 - 101.5X68.5 (257).jpg',
            'images/INDIANA JONES/LES AVENTURIERS DE L_ARCHE PERDUE - G164152 - 101X69 (258).jpg'
        ],
        'JURASSIC PARK': [
            'images/JURASSIC PARK/BACK COUNTRY - GBYDCO033 (219).jpg',
            'images/JURASSIC PARK/JURASSIC PARK FILM - ABYDCO645 (62).jpg',
            'images/JURASSIC PARK/JURASSIC PARK BIENVENUE - GBYDCO068 (63).jpg',
            'images/JURASSIC PARK/JURASSIC PARK VINTAGE - GBYDCO713 (349).jpg',
            'images/JURASSIC PARK/JURASSIC WORLD - GPE5673 (44).jpg',
            'images/JURASSIC PARK/JURASSIC WORLD CINEMA - GBYDCO067 (61).jpg'
        ],
        'MERCREDI': [
            'images/MERCREDI/MERCREDI DANSE - GPE5748 (68).jpg',
            'images/MERCREDI/MERCREDI PARAPLUIE - GPE5735 (70).jpg',
            'images/MERCREDI/MERCREDI ROOM - GPE5749 (93).jpg'
        ],
        'PEAKY BLINDERS': [
            'images/PEAKY BLINDERS/PEAKY BLINDERS TOMMY - MX00053 (105).jpg',
            'images/PEAKY BLINDERS/PEAKY BLINDERS CARTES - MX00052 (10).jpg',
            'images/PEAKY BLINDERS/PEAKY BLINDERS DON\'T F%23CK WITH - FP4894 (104).jpg',
            'images/PEAKY BLINDERS/PEAKY BLINDERS SAISON 1 - GBYDCO668 (220).jpg',
            'images/PEAKY BLINDERS/PEAKY BLINDERS VS - GPE5591 (186).jpg'
        ],
        'RETOUR VERS LE FUTUR': [
            'images/RETOUR VERS LE FUTUR/RETOUR VERS LE FUTUR 1.21 GW - PP35035 (165).jpg',
            'images/RETOUR VERS LE FUTUR/RETOUR VERS LE FUTUR 2 - GPE5559 (116).jpg',
            'images/RETOUR VERS LE FUTUR/RETOUR VERS LE FUTUR 2 DELOREAN - GBYDCO064 (60).jpg',
            'images/RETOUR VERS LE FUTUR/RETOUR VERS LE FUTUR 1 - GPE5529 (112).jpg',
            'images/RETOUR VERS LE FUTUR/RETOUR VERS LE FUTUR 3 - GPE5560 (117).jpeg',
            'images/RETOUR VERS LE FUTUR/RETOUR VERS LE FUTUR 3 DATE - GBYDCO992 (353).jpg'
        ],
        'RICK ET MORTY': [
            'images/RICK ET MORTY/DOODOO DADDY - GPE5448 (9).jpg',
            'images/RICK ET MORTY/RICK ET MORTY CHARACTERS - GPE5235 (191).jpg',
            'images/RICK ET MORTY/RICK ET MORTY FREE RICK - GPE5251 (115).jpg',
            'images/RICK ET MORTY/RICK ET MORTY PORTAIL - ABYDCO784 (118).jpg',
            'images/RICK ET MORTY/RICK ET MORTY RICK CORNICHON - FP4584 (76).jpg',
            'images/RICK ET MORTY/RICK ET MORTY CITATIONS - GPE5241 (114).jpg',
            'images/RICK ET MORTY/RICK ET MORTY SAISON 4 - GPE5450 (120).jpg'
        ],
        'SEIGNEUR DES ANNEAUX': [
            'images/SEIGNEUR DES ANNEAUX/ANNEAU UNIQUE - ABYDCO774 (31).jpg',
            'images/SEIGNEUR DES ANNEAUX/ARBRE DU GONDOR - GBYDCO655 (202).png',
            'images/SEIGNEUR DES ANNEAUX/COMMUNAUTE DE L\'ANNEAU AFFICHE - G877905 (322).jpg',
            'images/SEIGNEUR DES ANNEAUX/CARTE TERRE DU MILIEU - GPE5632 (122).jpg',
            'images/SEIGNEUR DES ANNEAUX/SEIGNEUR DES ANNEAUX 100TH - GPE5745 (145).jpg',
            'images/SEIGNEUR DES ANNEAUX/SEIGNEUR DES ANNEAUX ARGONATH - GPE5633 (123).jpg',
            'images/SEIGNEUR DES ANNEAUX/LE RETOUR DU ROI - G791712 - 98X68.5 (290).jpg',
            'images/SEIGNEUR DES ANNEAUX/SEIGNEUR DES ANNEAUX COMMUNAUTE - FP2658 (57).jpg',
            'images/SEIGNEUR DES ANNEAUX/TOUR DE SAURON - ABYDCO771 (29).jpg'
        ],
        'STAR WARS': [
            'images/STAR WARS/AHSOKA - GPE5494 (106).jpg',
            'images/STAR WARS/CLASSIC 40TH ANIVERSAIRE - GPE5166 (92).jpg',
            'images/STAR WARS/CLASSIC COMICS COVERS - GPE4672 (75).jpg',
            'images/STAR WARS/EPISODE I - G525000 - 101.5X58.5 (249).jpg',
            'images/STAR WARS/EPISODE II - G736930 - 101.5X68.5 (250).jpg',
            'images/STAR WARS/EPISODE VIII - GPE5204 (235).jpg',
            'images/STAR WARS/AHSOKA SERIE - GPE5797 (158).jpg',
            'images/STAR WARS/BOBA FETT - G856990 (305).jpg',
            'images/STAR WARS/EPISODE IV X-WING - G873055 (307).jpg',
            'images/STAR WARS/EPISODE V FAUCON MILLENIUM - G873050 (308).jpg',
            'images/STAR WARS/EPISODE VI TIE FIGHTER - G873060 (309).jpg',
            'images/STAR WARS/GROGU POD -GPE5768 (149).jpg',
            'images/STAR WARS/HAN SOLO CARBONITE - G861990 - 158X53 (244).jpg',
            'images/STAR WARS/L\'EMPIRE CONTRE ATTAQUE SPECIAL EDITION - GPE5446 (102).jpg',
            'images/STAR WARS/MANDALORIAN CASQUE - PP34575 (20).jpg',
            'images/STAR WARS/MANDALORIAN PRECIOUS CARGO - PP34610 (22).jpg',
            'images/STAR WARS/OBI WAN KENOBI - GPE5662 (185).jpg',
            'images/STAR WARS/STAR WARS ACTION FIGURES - PP34635 (24).jpg',
            'images/STAR WARS/KENOBI TWIN SUNS - GPE5663 (127).jpg',
            'images/STAR WARS/KENOBI VADOR - GPE5664 (128).jpg',
            'images/STAR WARS/L\'EMPIRE CONTRE ATTAQUE - G163186 - 101.5X68.5 (266).jpg',
            'images/STAR WARS/L\'EMPIRE CONTRE ATTAQUE - G163187 -101.5X68.5 (267).jpg',
            'images/STAR WARS/L\'EMPIRE CONTRE ATTAQUE - G330050 - 101.5X68.5 (268).jpg',
            'images/STAR WARS/L\'EMPIRE CONTRE ATTAQUE - GPE5689 (131).jpg',
            'images/STAR WARS/L\'EMPIRE CONTRE ATTAQUE CLASSIC - GPE4674 (82).jpg',
            'images/STAR WARS/LE RETOUR DU JEDI - G163192 - 101.5X68.5 (265).jpg',
            'images/STAR WARS/LE RETOUR DU JEDI - GPE4675 (83).jpg',
            'images/STAR WARS/MANDALORIAN CLAN OF TWO - GPE5484 (222).jpg',
            'images/STAR WARS/MANDALORIAN SPEEDER BIKE - GPE5497 (204).jpg',
            'images/STAR WARS/MANDALORIAN THE CHILD - GPE5487 (223).jpg',
            'images/STAR WARS/NOUVEL ESPOIR - GPE5445 (56).jpg',
            'images/STAR WARS/STAR WARS CLASSIC - GPE5130 (89).jpg',
            'images/STAR WARS/STAR WARS EPISODE 1 25 ANS - GPE5901 (229).jpg',
            'images/STAR WARS/STAR WARS UNIVERSE - GPE5351 (163).jpg',
            'images/STAR WARS/THE MANDALORIAN S1 - GPE5384 (340).jpg',
            'images/STAR WARS/THE MANDOLARIAN - GPE5485 (238).jpg',
            'images/STAR WARS/STAR WARS COMICS DARK VADOR - PP34434 (357).jpg'
        ],
        'STRANGER THINGS': [
            'images/STRANGER THINGS/DEMOGORGON LIVE - GPE5775 (154).jpg',
            'images/STRANGER THINGS/NOT IN HAWKINS ANYMORE - PP34719 (166).jpg',
            'images/STRANGER THINGS/PALACE ARCADE - PP34806 (171).jpg',
            'images/STRANGER THINGS/UPSIDE DOWN - PP34401 (175).jpg'
        ],
        'TMNT': [
            'images/TMNT/TMNT STOP - GPE5894 (213).jpg',
            'images/TMNT/TEENAGE YEARS - PP35246 (181).jpg',
            'images/TMNT/TMNT COMICS NB - GBYDCO186 - (77).jpg',
            'images/TMNT/TMNT COULEUR ACTION - GBYDCO115 - (48).jpg'
        ],
        'TRANSFORMERS': [
            'images/TRANSFORMERS/RISE OF THE BEASTS - GPE5792 (236).jpg',
            'images/TRANSFORMERS/ROLL OUT - GPE5783 (237).jpg',
            'images/TRANSFORMERS/TRANSFORMERS - GPE5524 (168).jpg',
            'images/TRANSFORMERS/TRANSFORMERS PERSONNAGES - GPE5535 (169).jpg'
        ],
    };

    const images = posterImages[folderName] || [];
    
    if (images.length === 0) {
        // Si pas d'images spécifiques, essayer de charger toutes les images du dossier
        const fallbackImages = [
            `images/${folderName}/image1.jpg`,
            `images/${folderName}/image2.jpg`,
            `images/${folderName}/image3.jpg`
        ];
        images.push(...fallbackImages);
    }

    images.forEach((imagePath, index) => {
        const posterItem = document.createElement('div');
        posterItem.className = 'poster-item';
        
        // Extraire le nom du fichier pour l'affichage
        const fullFileName = imagePath.split('/').pop();
        const decodedFullFileName = decodeURIComponent(fullFileName);
        const baseNameRaw = decodedFullFileName.replace(/\.(jpg|jpeg|png)$/i, '');
        const nameParts = baseNameRaw.split(' - ');
        const baseTitle = nameParts[0].replace(/[_-]/g, ' ').trim();
        const codePart = nameParts.length > 1 ? nameParts[nameParts.length - 1].trim() : '';
        const adminTitle = codePart ? `${baseTitle} - ${codePart}` : baseTitle;
        const titleToShow = (isAdminLoggedIn && isAdminModeActive)
            ? formatPosterTitleHTML(baseTitle, codePart, true)
            : formatPosterTitleHTML(baseTitle, codePart, false);
        
        // Extraire les dimensions du nom de fichier si elles existent
        let dimensions = '';
        
        // Rechercher les patterns de dimensions dans le nom de fichier
        const dimensionPatterns = [
            /(\d+(?:\.\d+)?[xX]\d+(?:\.\d+)?)/g, // Format: 101.5x68.5 ou 101x68
            /(\d+(?:\.\d+)?\s*[xX]\s*\d+(?:\.\d+)?)/g, // Format avec espaces
            /(\d+(?:\.\d+)?[xX]\d+(?:\.\d+)?\s*cm)/gi, // Format avec cm
        ];
        
        for (const pattern of dimensionPatterns) {
            const match = fullFileName.match(pattern);
            if (match) {
                dimensions = match[0].replace(/[xX]/, ' × ').replace(/cm/gi, ' cm');
                if (!dimensions.includes('cm')) {
                    dimensions += ' cm';
                }
                break;
            }
        }
        
        // Si aucune dimension trouvée, utiliser les dimensions par défaut
        if (!dimensions) {
            dimensions = 'Demander'; // Dimensions par défaut
        }
        
        // Vérifier si le poster est en commande
        const posterKey = imagePath.split('/').pop();
        const isEnCommande = posterStatuses[posterKey] === 'en-commande';
        const shouldShowOverlay = isEnCommande;
        
        posterItem.innerHTML = `
            <div style="position: relative;">
                <img src="${imagePath}" alt="${baseTitle}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" style="cursor: pointer; transition: transform 0.3s ease;">
                <div style="display:none; padding:2rem; text-align:center; color:#999;">Image non disponible</div>
                <div class="poster-dimensions">${dimensions}</div>
            </div>
            <h3>${titleToShow}</h3>
        `;
        
        // Appliquer le statut visuel après création du HTML
        if (shouldShowOverlay) {
            // console.log(`Application overlay pour ${posterKey}: en-commande`);
            // Forcer l'affichage de l'overlay directement
            const imageContainer = posterItem.querySelector('div');
            if (imageContainer) {
                imageContainer.style.position = 'relative';
                
                // Créer l'overlay "COMMANDE EN COURS"
                const statusOverlay = document.createElement('div');
                statusOverlay.className = 'status-overlay';
                statusOverlay.style.cssText = `
                    position: absolute !important;
                    top: 50% !important;
                    left: 50% !important;
                    transform: translate(-50%, -50%) !important;
                    background: rgba(0,0,0,0.9) !important;
                    color: #ff0000 !important;
                    padding: 1rem 1.5rem !important;
                    border-radius: 1rem !important;
                    font-weight: 900 !important;
                    text-align: center !important;
                    font-size: 1.8rem !important;
                    text-shadow: 2px 2px 4px rgba(0,0,0,1) !important;
                    border: 3px solid #ff0000 !important;
                    box-shadow: 0 0 10px rgba(255,0,0,0.5) !important;
                    z-index: 1000 !important;
                    pointer-events: none !important;
                `;
                statusOverlay.textContent = 'COMMANDE EN COURS';
                imageContainer.appendChild(statusOverlay);
                
                // Appliquer les styles à l'image
                const img = posterItem.querySelector('img');
                if (img) {
                    img.style.opacity = '0.7';
                    img.style.cursor = 'not-allowed';
                }
                
                // console.log(`Overlay forcé pour ${posterKey}`);
            }
        }
        
        // Ajouter l'événement de clic pour le zoom (seulement si disponible)
        const img = posterItem.querySelector('img');
        if (!shouldShowOverlay) {
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                zoomPoster(this);
            });
        } else {
            // Pour les posters en commande, désactiver complètement le clic
            img.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // Ne rien faire - le poster n'est pas cliquable
                return false;
            });
            img.style.pointerEvents = 'none';
        }
        // Note: Les styles pour les posters en commande sont gérés par applyStatusOverlay()
        postersGrid.appendChild(posterItem);
    });

    // Mettre à jour les contrôles d'administration si nécessaire
    if (isAdminLoggedIn && isAdminModeActive) {
        setTimeout(() => {
            updatePostersAdminControls();
        }, 100);
    }
    
    // Vérifier et forcer l'application des statuts après un court délai
    setTimeout(() => {
        verifyAndApplyStatuses();
    }, 200);
}

// Fonction pour zoomer sur un poster
function zoomPoster(img) {
    // Obtenir la position et taille de l'image originale
    const rect = img.getBoundingClientRect();
    const originalWidth = rect.width;
    const originalHeight = rect.height;
    const originalX = rect.left;
    const originalY = rect.top;
    
    // Masquer l'image originale immédiatement
    img.style.opacity = '0';
    
    // Créer l'overlay de zoom
    const overlay = document.createElement('div');
    overlay.id = 'zoom-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
        transition: background-color 0.4s ease;
    `;
    
    // Créer l'image zoomée avec la position et taille originales
    const zoomedImg = document.createElement('img');
    zoomedImg.src = img.src;
    zoomedImg.alt = img.alt;
    zoomedImg.style.cssText = `
        position: absolute;
        left: ${originalX}px;
        top: ${originalY}px;
        width: ${originalWidth}px;
        height: ${originalHeight}px;
        object-fit: contain;
        border-radius: 1rem;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform-origin: center center;
    `;
    
    // Ajouter l'image à l'overlay
    overlay.appendChild(zoomedImg);

    // Ajouter un message d'aide pour revenir (au-dessus du poster zoomé)
    const hint = document.createElement('div');
    hint.id = 'zoom-hint';
    hint.style.cssText = `
        position: absolute;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.65);
        color: #fff;
        padding: 0.4rem 0.8rem;
        border-radius: 0.6rem;
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.02rem;
        border: 1px solid rgba(255,255,255,0.2);
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.3s ease 0.25s;
        pointer-events: none;
        left: 50%;
        top: 12px;
    `;
    hint.textContent = "Cliquez n'importe où pour revenir";
    overlay.appendChild(hint);
    
    // Ajouter l'overlay au body
    document.body.appendChild(overlay);
    
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
    
    // Calculer la taille finale (90% de l'écran)
    const finalWidth = Math.min(window.innerWidth * 0.9, window.innerHeight * 0.9 * (originalWidth / originalHeight));
    const finalHeight = finalWidth * (originalHeight / originalWidth);
    const finalX = (window.innerWidth - finalWidth) / 2;
    const finalY = (window.innerHeight - finalHeight) / 2;
    
    // Démarrer l'animation après un petit délai pour que l'overlay soit rendu
    requestAnimationFrame(() => {
        // Animer le fond
        overlay.style.background = 'rgba(0, 0, 0, 0.9)';
        
        // Animer l'image vers sa position finale
        zoomedImg.style.left = `${finalX}px`;
        zoomedImg.style.top = `${finalY}px`;
        zoomedImg.style.width = `${finalWidth}px`;
        zoomedImg.style.height = `${finalHeight}px`;
        zoomedImg.style.boxShadow = '0 0 50px rgba(255, 255, 255, 0.3)';

        // Afficher le message d'aide après un court délai
        const hintEl = document.getElementById('zoom-hint');
        if (hintEl) {
            // Positionner au-dessus du poster zoomé
            hintEl.style.left = `${finalX + finalWidth / 2}px`;
            const topTarget = Math.max(finalY - 16 - hintEl.offsetHeight, 12);
            hintEl.style.top = `${topTarget}px`;
            hintEl.style.opacity = '1';
        }
    });
    
    // Fonction pour fermer avec animation inverse
    function closeZoom() {
        // Animer le fond vers transparent
        overlay.style.background = 'rgba(0, 0, 0, 0)';
        
        // Animer l'image vers sa position originale
        zoomedImg.style.left = `${originalX}px`;
        zoomedImg.style.top = `${originalY}px`;
        zoomedImg.style.width = `${originalWidth}px`;
        zoomedImg.style.height = `${originalHeight}px`;
        zoomedImg.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
        
        // Supprimer l'overlay après l'animation et restaurer l'image originale
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
                document.body.style.overflow = 'auto';
                // Restaurer l'opacité de l'image originale
                img.style.opacity = '1';
            }
        }, 500);
    }
    
    // Ajouter l'événement de clic pour fermer
    overlay.addEventListener('click', closeZoom);
    
    // Ajouter l'événement de clic sur l'image pour fermer aussi
    zoomedImg.addEventListener('click', function(e) {
        e.stopPropagation();
        closeZoom();
    });
}

// Fonction pour revenir aux catégories
function hidePosters() {
    document.getElementById('posters-section').style.display = 'none';
    document.querySelector('main').style.display = 'block';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('footer').style.display = 'block';
}

// Fonction pour appliquer l'overlay de statut sur un poster
function applyStatusOverlay(posterItem, status) {
    const img = posterItem.querySelector('img');
    let statusOverlay = posterItem.querySelector('.status-overlay');
    
    // console.log('applyStatusOverlay appelée:', status, 'pour', posterItem);
    
    if (status === 'en-commande') {
        if (!statusOverlay) {
            // console.log('Création de l\'overlay...');
            statusOverlay = document.createElement('div');
            statusOverlay.className = 'status-overlay';
            statusOverlay.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0,0,0,0.9);
                color: #ff0000;
                padding: 1rem 1.5rem;
                border-radius: 1rem;
                font-weight: 900;
                text-align: center;
                font-size: 1.8rem;
                text-shadow: 2px 2px 4px rgba(0,0,0,1);
                border: 3px solid #ff0000;
                box-shadow: 0 0 10px rgba(255,0,0,0.5);
                z-index: 10;
            `;
            statusOverlay.textContent = 'COMMANDE EN COURS';
            const imageContainer = posterItem.querySelector('div');
            if (imageContainer) {
                imageContainer.style.position = 'relative';
                imageContainer.appendChild(statusOverlay);
                // console.log('Overlay ajouté au container');
            } else {
                console.error('Container d\'image non trouvé!');
            }
        } else {
            // console.log('Overlay existe déjà');
        }
        img.style.opacity = '0.7';
        img.style.cursor = 'not-allowed';
        img.style.pointerEvents = 'none';
    } else {
        if (statusOverlay) {
            statusOverlay.remove();
            // console.log('Overlay supprimé');
        }
        img.style.opacity = '1';
        img.style.cursor = 'pointer';
        img.style.pointerEvents = 'auto';
    }
}

// Fonction pour vérifier et appliquer les statuts sur tous les posters visibles
function verifyAndApplyStatuses() {
    const currentStatuses = JSON.parse(localStorage.getItem('posterStatuses')) || {};
    // console.log('Vérification des statuts:', currentStatuses);
    
    const posterItems = document.querySelectorAll('.poster-item');
    posterItems.forEach(posterItem => {
        const img = posterItem.querySelector('img');
        if (img && img.src) {
            const posterKey = img.src.split('/').pop();
            const status = currentStatuses[posterKey];
            
            if (status === 'en-commande') {
                // Vérifier si l'overlay existe déjà
                let existingOverlay = posterItem.querySelector('.status-overlay');
                if (!existingOverlay) {
                    // console.log(`Application forcée de l'overlay pour ${posterKey}`);
                    
                    const imageContainer = posterItem.querySelector('div');
                    if (imageContainer) {
                        imageContainer.style.position = 'relative';
                        
                        // Créer l'overlay
                        const statusOverlay = document.createElement('div');
                        statusOverlay.className = 'status-overlay';
                        statusOverlay.style.cssText = `
                            position: absolute !important;
                            top: 50% !important;
                            left: 50% !important;
                            transform: translate(-50%, -50%) !important;
                            background: rgba(0,0,0,0.9) !important;
                            color: #ff0000 !important;
                            padding: 1rem 1.5rem !important;
                            border-radius: 1rem !important;
                            font-weight: 900 !important;
                            text-align: center !important;
                            font-size: 1.8rem !important;
                            text-shadow: 2px 2px 4px rgba(0,0,0,1) !important;
                            border: 3px solid #ff0000 !important;
                            box-shadow: 0 0 10px rgba(255,0,0,0.5) !important;
                            z-index: 1000 !important;
                            pointer-events: none !important;
                        `;
                        statusOverlay.textContent = 'COMMANDE EN COURS';
                        imageContainer.appendChild(statusOverlay);
                        
                        // Appliquer les styles à l'image
                        img.style.opacity = '0.7';
                        img.style.cursor = 'not-allowed';
                        img.style.pointerEvents = 'none';
                    }
                }
            }
        }
    });
}

// Fonction pour initialiser les statuts des posters au chargement
function initializePosterStatuses() {
    // Recharger les statuts depuis localStorage
    posterStatuses = JSON.parse(localStorage.getItem('posterStatuses')) || {};
    // console.log('Statuts des posters initialisés:', posterStatuses);
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les statuts des posters
    initializePosterStatuses();
    
    // Ajouter les événements de clic sur les cartes
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            showPosters(categoryName);
        });
    });

    // Ajouter l'événement de clic sur le bouton retour
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', hidePosters);

    // Appliquer automatiquement le premier poster de chaque catégorie comme image de carte
    const cards = Array.from(document.querySelectorAll('.category-card'));
    
    function resizeImageToCard(img, callback) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Dimensions de la carte en pixels (18rem × 27rem à 16px/rem)
        const cardWidth = 288;
        const cardHeight = 432;
        
        canvas.width = cardWidth;
        canvas.height = cardHeight;
        
        // Dessiner l'image redimensionnée sur le canvas
        ctx.drawImage(img, 0, 0, cardWidth, cardHeight);
        
        // Convertir en data URL
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        callback(dataUrl);
    }
    
    function applyFirstPosterBackground(card) {
        const name = card.querySelector('h3') ? card.querySelector('h3').textContent.trim() : '';
        const folder = categoryMapping[name];
        if (!folder) return;
        const candidates = (posterImages[folder] || []).slice();
        if (candidates.length === 0) return;
        
        // Pas de tri particulier, utiliser l'ordre naturel
        
        const tryLoad = (idx) => {
            if (idx >= candidates.length) return;
            const url = candidates[idx];
			const img = new Image();
			// En ouverture locale (file://), ne pas utiliser crossOrigin ni canvas/toDataURL
			if (!isFileProtocol) {
				img.crossOrigin = 'anonymous';
				img.onload = function() {
					resizeImageToCard(img, (resizedDataUrl) => {
						card.style.backgroundImage = `url('${resizedDataUrl}')`;
						card.style.backgroundSize = 'cover';
						card.style.backgroundPosition = 'center center';
						card.style.backgroundRepeat = 'no-repeat';
						card.classList.add('with-expo-bg');
					});
				};
				img.onerror = function() { tryLoad(idx + 1); };
			} else {
				// En file://, poser directement l'image en background pour éviter le canvas "tainted"
				img.onload = function() {
					card.style.backgroundImage = `url('${url}')`;
					card.style.backgroundSize = 'cover';
					card.style.backgroundPosition = 'center center';
					card.style.backgroundRepeat = 'no-repeat';
					card.classList.add('with-expo-bg');
				};
				img.onerror = function() { tryLoad(idx + 1); };
			}
			img.src = url;
        };
        tryLoad(0);
    }
    
    cards.forEach(applyFirstPosterBackground);

    // Initialiser les fonctionnalités d'administration
    initializeAdminFeatures();
});

// ========================================
// FONCTIONNALITÉS D'ADMINISTRATION
// ========================================

function initializeAdminFeatures() {
    const adminLoginBtn = document.getElementById('admin-login-btn');
    const adminModal = document.getElementById('admin-modal');
    const closeModal = document.querySelector('.close');
    const adminLoginForm = document.getElementById('admin-login-form');
    const toggleAdminModeBtn = document.getElementById('toggle-admin-mode');

    // Ouvrir la modal de connexion ou se déconnecter
    adminLoginBtn.addEventListener('click', function() {
        if (isAdminLoggedIn) {
            // Déconnexion
            logout();
        } else {
            // Connexion
            adminModal.style.display = 'flex';
        }
    });

    // Fermer la modal
    closeModal.addEventListener('click', function() {
        adminModal.style.display = 'none';
        clearLoginForm();
    });

    // Fermer la modal en cliquant à l'extérieur
    adminModal.addEventListener('click', function(e) {
        if (e.target === adminModal) {
            adminModal.style.display = 'none';
            clearLoginForm();
        }
    });

    // Gérer la soumission du formulaire de connexion
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;
        
        if (username === 'admin' && password === 'admin123') {
            isAdminLoggedIn = true;
            adminModal.style.display = 'none';
            clearLoginForm();
            updateAdminUI();
            showAdminControls();
        } else {
            showLoginError();
        }
    });

    // Gérer le toggle du mode admin
    toggleAdminModeBtn.addEventListener('click', function() {
        isAdminModeActive = !isAdminModeActive;
        updateAdminModeUI();
        updatePostersAdminControls();
    });
}

function clearLoginForm() {
    document.getElementById('admin-username').value = '';
    document.getElementById('admin-password').value = '';
    document.getElementById('login-error').style.display = 'none';
}

function showLoginError() {
    document.getElementById('login-error').style.display = 'block';
}

function updateAdminUI() {
    // Aucun effet visuel - connexion complètement invisible
    // Le logo reste exactement pareil, connecté ou pas
}

function showAdminControls() {
    if (isAdminLoggedIn) {
        document.getElementById('admin-controls').style.display = 'block';
    }
}

function updateAdminModeUI() {
    const toggleBtn = document.getElementById('toggle-admin-mode');
    if (isAdminModeActive) {
        toggleBtn.textContent = 'Mode Admin: ON';
        toggleBtn.classList.add('active');
    } else {
        toggleBtn.textContent = 'Mode Admin: OFF';
        toggleBtn.classList.remove('active');
    }
    // Mettre à jour les titres des posters selon le mode admin
    refreshPosterTitlesForAdminMode();
}

function updatePostersAdminControls() {
    const posterItems = document.querySelectorAll('.poster-item');
    posterItems.forEach(posterItem => {
        let adminControls = posterItem.querySelector('.poster-admin-controls');
        
        if (isAdminModeActive && isAdminLoggedIn) {
            if (!adminControls) {
                adminControls = createAdminControls(posterItem);
                posterItem.style.position = 'relative';
                posterItem.appendChild(adminControls);
            }
            adminControls.style.display = 'block';
        } else if (adminControls) {
            adminControls.style.display = 'none';
        }
    });
}

function createAdminControls(posterItem) {
    const img = posterItem.querySelector('img');
    const imagePath = img.src;
    const posterKey = imagePath.split('/').pop();
    
    const adminControls = document.createElement('div');
    adminControls.className = 'poster-admin-controls';
    
    const statusBtn = document.createElement('button');
    statusBtn.className = 'poster-status-btn';
    
    // Déterminer le statut actuel
    const currentStatus = posterStatuses[posterKey] || 'disponible';
    updateStatusButton(statusBtn, currentStatus);
    
    statusBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        togglePosterStatus(posterKey, statusBtn, posterItem);
    });
    
    adminControls.appendChild(statusBtn);
    return adminControls;
}

function updateStatusButton(button, status) {
    button.className = `poster-status-btn ${status}`;
    button.textContent = status === 'en-commande' ? 'En commande' : 'Disponible';
}

function togglePosterStatus(posterKey, statusBtn, posterItem) {
    const currentStatus = posterStatuses[posterKey] || 'disponible';
    const newStatus = currentStatus === 'disponible' ? 'en-commande' : 'disponible';
    
    posterStatuses[posterKey] = newStatus;
    localStorage.setItem('posterStatuses', JSON.stringify(posterStatuses));
    
    updateStatusButton(statusBtn, newStatus);
    updatePosterVisualStatus(posterItem, newStatus);
}

function updatePosterVisualStatus(posterItem, status) {
    const img = posterItem.querySelector('img');
    
    // Supprimer tous les event listeners existants en clonant l'élément
    if (img) {
        const newImg = img.cloneNode(true);
        img.parentNode.replaceChild(newImg, img);
        
        // Réappliquer les bons event listeners selon le statut
        if (status === 'en-commande') {
            newImg.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
            newImg.style.pointerEvents = 'none';
        } else {
            newImg.addEventListener('click', function(e) {
                e.stopPropagation();
                zoomPoster(this);
            });
            newImg.style.pointerEvents = 'auto';
        }
    }
    
    applyStatusOverlay(posterItem, status);
}

function savePosterStatuses() {
    localStorage.setItem('posterStatuses', JSON.stringify(posterStatuses));
}

function logout() {
    // Réinitialiser les variables d'état
    isAdminLoggedIn = false;
    isAdminModeActive = false;
    
    // Réinitialiser l'interface utilisateur du logo
    updateAdminUI();
    
    // Masquer les contrôles d'administration
    document.getElementById('admin-controls').style.display = 'none';
    
    // Réinitialiser le bouton de mode admin
    const toggleBtn = document.getElementById('toggle-admin-mode');
    toggleBtn.textContent = 'Mode Admin: OFF';
    toggleBtn.classList.remove('active');
    
    // Masquer tous les contrôles d'administration sur les posters
    updatePostersAdminControls();
    
    // console.log('Déconnexion administrateur réussie');
    // Rafraîchir les titres (retour au mode non-admin)
    refreshPosterTitlesForAdminMode();
}

// ========================================
// AFFICHAGE DES TITRES AVEC CODE EN MODE ADMIN
// ========================================

function computePosterTitles(fullFileName) {
    // Décoder les caractères encodés (%20, etc.) avant tout traitement
    const decoded = decodeURIComponent(fullFileName);
    const baseNameRaw = decoded.replace(/\.(jpg|jpeg|png)$/i, '');
    const nameParts = baseNameRaw.split(' - ');
    const baseTitle = nameParts[0].replace(/[_-]/g, ' ').trim();
    const codePart = nameParts.length > 1 ? nameParts[nameParts.length - 1].trim() : '';
    const adminTitle = codePart ? `${baseTitle} - ${codePart}` : baseTitle;
    return { baseTitle, codePart, adminTitle };
}

function formatPosterTitleHTML(baseTitle, codePart, isAdminMode) {
    if (!codePart) return baseTitle;
    
    // Extraire seulement le numéro entre parenthèses
    const match = codePart.match(/\((\d+)\)/);
    if (!match) {
        return baseTitle; // Pas de numéro trouvé, retourner juste le titre
    }
    
    const number = match[0]; // Le numéro avec les parenthèses, ex: "(12)"
    
    // Classe différente selon le mode : rouge en admin, noir sinon
    const colorClass = isAdminMode ? 'admin-code-number' : 'user-code-number';
    const colored = `<span class="${colorClass}">${number}</span>`;
    
    return `${baseTitle} ${colored}`;
}

function refreshPosterTitlesForAdminMode() {
    const posterItems = document.querySelectorAll('.poster-item');
    posterItems.forEach(posterItem => {
        const img = posterItem.querySelector('img');
        const titleEl = posterItem.querySelector('h3');
        if (!img || !titleEl) return;
        const fullFileName = img.src.split('/').pop();
        const { baseTitle, codePart, adminTitle } = computePosterTitles(fullFileName);
        // Toujours afficher le code avec le numéro, mais avec une couleur différente selon le mode
        titleEl.innerHTML = formatPosterTitleHTML(baseTitle, codePart, isAdminLoggedIn && isAdminModeActive);
        // Maintenir l'alt cohérent
        img.alt = baseTitle;
    });
}
