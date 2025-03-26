"use strict";

//
// CODE PRINCIPAL
//
const navbar = document.getElementById('navbar-collapse')
const bouton = document.getElementById('navbar-toggle')

document.addEventListener("DOMContentLoaded", function() {
    
});

bouton.addEventListener("click", () => {
    navbar.classList.add(".visible")
})