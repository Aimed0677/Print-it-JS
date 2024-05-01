const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Ajout des even listener sur les fleches 
let arrowClickRight = document.querySelector(".arrow_right");
arrowClickRight.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton droit")
});
let arrowClickLeft = document.querySelector(".arrow_left");
arrowClickLeft.addEventListener("click", function () {
	console.log("Vous avez cliqué sur le bouton gauche")
});
