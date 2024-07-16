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
]

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

let index = 0;


arrow_left.addEventListener('click', function () {
	index--;
	if (index === -1) {
		index = slides.length - 1;
	}

	afficheSlide();

});


arrow_right.addEventListener('click', function () {
	index++;
	if (index === slides.length) {
		index = 0;
	}

	afficheSlide();

});

const afficheSlide = () => {

	const bannerImg = document.querySelector(".banner-img");
	const image = slides[index].image
	bannerImg.src = "./assets/images/slideshow/" + image;

	const tagLine = document.querySelector("#banner p");
	tagLine.innerHTML = slides[index].tagLine;

	const dotSelected = document.querySelector('.dot_selected');
	dotSelected.classList.remove('dot_selected');

	const dotList = document.querySelectorAll('.dot');
	dotList[index].classList.add('dot_selected');

}

const displayPoins = () => {

	const dots = document.querySelector('.dots');
	for(let i = 0; i<slides.length; i++) {
	const span = document.createElement('span');
	span.classList.add('dot');
    dots.appendChild(span);

	if(i===0){
		span.classList.add('dot_selected');
	}

	span.addEventListener('click' , () => {
		index = i;
		afficheSlide();
	})

}


}

displayPoins();




