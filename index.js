// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

const sideBar = document.getElementById("side-bar");
const burgerMenu = document.querySelectorAll(".toggle-btn span");
const firstSpan = burgerMenu[0];
const secondSpan = burgerMenu[1];
const thirdSpan = burgerMenu[2];

const content = document.querySelector(".content");
let isClosed = true;

btn.addEventListener("click", () => {

    if (isClosed) {
        sideBar.style.left = 0;
        isClosed = false;
        content.style.filter = "blur(5px)";
        firstSpan.style.transform = "rotate(45deg) translateX(15%)";
        secondSpan.style.transform = "rotate(-45deg) translateX(15%)";
        thirdSpan.style.opacity = 0;
    } else {
        sideBar.style.left = "-230px";
        isClosed = true;
        content.style.filter = "none";
        firstSpan.style.transform = "rotate(0) translateX(0)";
        secondSpan.style.transform = "rotate(0) translateX(0)";
        thirdSpan.style.opacity = 1;
    };


});

content.addEventListener("click", () => {

    if (isClosed === false) {
        sideBar.style.left = "-230px";
        isClosed = true;
        content.style.filter = "none";
        firstSpan.style.transform = "rotate(0) translateX(0)";
        secondSpan.style.transform = "rotate(0) translateX(0)";
        thirdSpan.style.opacity = 1;
    };


});