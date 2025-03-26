"use strict";

//
// CODE PRINCIPAL
//
const navbarToggle = document.getElementById('navbar-collapse')
const navbarCollapse = document.getElementById('navbar-toggle')

document.addEventListener("DOMContentLoaded", function() {
    
});

navbarCollapse.addEventListener("click", () => {
    navbarToggle.classList.toggle("visible")

});

// Changer l'icône (hamburger <-> croix)
const icon = navbarToggle.querySelector("i");
if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark"); // Font Awesome icône X
} else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
}
});

// Fermer le menu lorsqu'un lien est cliqué (optionnel)
const navLinks = navbarCollapse.querySelectorAll("a");
navLinks.forEach(link => {
link.addEventListener("click", function() {
    // Vérifier si on est en mode mobile (le bouton hamburger est visible)
    if (window.getComputedStyle(navbarToggle).display !== 'none') {
        navbarCollapse.classList.remove("visible");
        // Remettre l'icône hamburger
        const icon = navbarToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});
});
});