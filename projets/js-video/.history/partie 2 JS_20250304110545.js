//SELECTEURS
//selectionner la balise body dans le document
// document.querySelector('body')
// Il peut est préférable de selectionner les classes .class et les ID #id si il y plusieurs balises identiques
//change la couleur de fond du h4
// document.querySelector("h4").style.background = "yellow";


//permet de selectionner une balise plus simplement et quand on veut
// const baliseHTML = document.querySelector("h4")
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow"



//click event AJOUT DE CLASSE OU DE STYLES **
const questionContainer = document.querySelector(".click-event")

const btn1 = document.querySelector('#btn1')
const btn2 = document.getElementById("btn2")
const reponse = document.querySelector('p')

questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle("question-click")
})

btn1.addEventListener('click', () => {
    reponse.classList.add('show-reponse')
    reponse.style.background = "green"
})
btn2.addEventListener('click', () => {
    reponse.classList.add('show-reponse')
    reponse.style.background = "red"
})


//------------------------------------------------------------

const mousemove = document.querySelector('.mousemove')

// Mouse events un élément suit la souris 

window.addEventListener('mousemove', (e) =>{
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

//Quand je clique ça change

window.addEventListener("mousedown", () =>{
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})
window.addEventListener("mouseup", () =>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
})

//Hover amélioré

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)"
})
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "blue"
})

//Hover dans un sens

reponse.addEventListener('mouseover', () => {
    reponse.style.transform = "rotate(2deg)"
})

//----------------------------------------------------------------
// Key press event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");

const ring = () => {
    const audio = new Audio ();
    audio.src = "./yipee.mp3"
    audio.play();
};

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;  

    if(e.key === "j") {
        keypressContainer.style.background = "red"
    } else if (e.key === "h") {
        keypressContainer.style.background = "teal"
    } else {
        keypressContainer.style.background = "black"
    }
    // ring();
})


//--------------------------------------------------------
//Scroll Event

const nav = document.querySelector("nav");

window.addEventListener('scroll', () => {    
    if (window.scrollY > 120) {
        nav.style.top = 0
    } else {
        nav.style.top = "-50px"
    }
})

//--------------------------------------------
// Form event

const inputName = document.querySelector('input[type="text"]')
const select = document.querySelector("select")
const form = document.querySelector("form")


let pseudo = "";
let language = "";


inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;     
})
select.addEventListener('input', (e) => {
    language = e.target.value; 
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
        `
    } else {
        alert('Veuillez cocher les CGV')
    }
})


//---------------------------------------------
//Load event
window.addEventListener('load', () => {
    // console.log("doc chargé")
})

// ---------------------------------------------
// foreach

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll('.box')

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        e.target.style.transform = "scale(0.7)"
        
    })
});


// -------------------------------------------------------
// addeventlistener Vs onclick
// addeventlistener mieux 


// document.body.onscroll = function () {
//     console.log("click");
// }


// bubbling -> déclenche a la fin ( setting de base)
document.body.addEventListener("click", () => {
    console.log('click 1');   
}, false)


// usecapture déclenche au début 
document.body.addEventListener("click", () => {
    console.log('click 2');   
}, true)


// -----------------------------------------------------
// Stop propagation 

questionContainer.addEventListener('click', (e) => {
    alert("test")
    e.stopPropagation()
})

// removeEventListener pour retirer un event 

// ---------------------------------------------------------
// BOM browser object model

console.log(window.innerHeight);


