const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const arrowClickRight = document.querySelector(".arrow_right");
const arrowClickLeft = document.querySelector(".arrow_left");
const dotsContainer = document.querySelector(".dots");
let currentIndex = 0;

// Fonction pour créer les points bullet
function createDots() {
    slides.forEach((_dot, index) => {
        const dot = document.createElement("div");
		dotsContainer.appendChild(dot);
        dot.classList.add("dot");
		if (index === 0) {
            dot.classList.add("dot_selected");
        }
    });
}
// Appeler la fonction pour créer les points bullet
createDots();



