// Sélectionner toutes les images du diaporama
let banner = document.querySelectorAll("#banner .banner__img");
console.log("Nombre d'images : " + banner.length);

// Sélectionner les éléments des points (bullets)
let dots = document.querySelector(".dots");
let bullet = '<div class="dot"></div>';

// Créer les bullets en fonction du nombre d'images
dots.innerHTML = bullet.repeat(banner.length);
dots.firstChild.classList.add("dot_selected");

// Sélectionner tous les bullets
let bullets = document.querySelectorAll(".dot");

// Ajouter un écouteur d'événement pour chaque bullet
bullets.forEach((bullet, index) => {
	bullet.addEventListener("click", () => {
		changeSlide(index);
	});
});

// Index de la diapositive actuelle
let currentSlide = 0;

// Passer à la prochaine diapositive
function nextSlide() {
	currentSlide = (currentSlide + 1) % banner.length;
	changeSlide(currentSlide);
}

// Changer de diapositive en fonction de l'index donné
function changeSlide(index) {
	// Masquer toutes les diapositives
	banner.forEach((slide) => {
		slide.classList.remove("active");
	});

	// Afficher la diapositive sélectionnée
	banner[index].classList.add("active");

	// Mettre à jour le bullet sélectionné
	dots.querySelector(".dot_selected").classList.remove("dot_selected");
	dots.childNodes[index].classList.add("dot_selected");

	// Mettre à jour l'index de la diapositive actuelle
	currentSlide = index;
}

// Définir un intervalle pour passer automatiquement aux diapositives suivantes
let interval = setInterval(nextSlide, 3000);





// fonction qui permet de gérer le carousel
let banner__img = document.getElementsByClassName('banner__img');
let etape = 0;
let nbrImg = banner__img.length;

let precedent = document.querySelector('.arrow_left.arrow');
let suivant = document.querySelector('.arrow_right.arrow');

function enleverActiveImages() {
	for (let i = 0; i < nbrImg; i++) {
		banner__img[i].classList.remove('active');
	}
}

suivant.addEventListener('click', function () {
	etape++;
	if (etape >= nbrImg) {
		etape = 0;
	}
	enleverActiveImages();
	banner__img[etape].classList.add('active');
});

precedent.addEventListener('click', function () {
	etape--;
	if (etape < 0) {
		etape = nbrImg - 1;
	}
	enleverActiveImages();
	banner__img[etape].classList.add('active');
});


setInterval(function () {
	etape++;
	if (etape >= nbrImg) {
		etape = 0;
	}
	enleverActiveImages();
	banner__img[etape].classList.add('active');
}, 3000);



// Initilisation de l'affichage par rapport au tableau

let left = document.querySelector(".arrow_left");
let right = document.querySelector('.arrow_right')



left.addEventListener("click", () => {
	ChangeSlide(-1);
	ChangeDot(-1)
})

right.addEventListener("click", () => {
	ChangeSlide(-1);
	ChangeDot(1)

})