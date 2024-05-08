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

// Fonction pour changer de slide
function changeSlide(index) {
    const bannerImg = document.querySelector(".banner-img");
    const tagLine = document.querySelector("#banner p");

    currentIndex = index;

    // Mettre à jour l'image et la ligne de balise
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    tagLine.innerHTML = slides[index].tagLine;

    // Mettre à jour les points bullet
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

// Ajouter un écouteur d'événements sur la flèche "droite"
arrowClickRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    changeSlide(currentIndex);
});

// Ajouter un écouteur d'événements sur la flèche "gauche"
arrowClickLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(currentIndex);
});

