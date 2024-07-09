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

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

let index = 0;


arrow_left.addEventListener('click', function() {
	index--;
	if(index === -1) {
		index = 3;
	}
	const bannerImg = document.querySelector(".banner-img")
	const image = slides[index].image;
	bannerImg.src="./assets/images/slideshow/ " + image;
});


arrow_right.addEventListener('click',function() {
	index++;
	if(index === 4) {
		index = 0;
	}
	const bannerImg = document.querySelector(".banner-img")
	const image = slides[index].image
	bannerImg.src="./assets/images/slideshow/" + image;
});




