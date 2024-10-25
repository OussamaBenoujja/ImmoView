const selectElement = document.getElementById("filter_type");

const closeFilter = document.getElementById("closeFilter");

const partHouses = document.getElementById("sep1");
const partApartments = document.getElementById("sep2");
const partVillas = document.getElementById("sep3");

const filterBtn = document.getElementById("Mfilterbtn");
const filterBurger = document.getElementById("filterburger");

const listicon = document.getElementById("listIcon");
const gridicon = document.getElementById("gridIcon");

const propSec = document.getElementById("property-section");
const propSecSliders = document.getElementById("property-section2");

const slides = document.querySelectorAll('.houseSlide');
const prevButton = document.querySelector('.ob-prev');
const nextButton = document.querySelector('.ob-next');
let currentSlide = 0;

const slides1 = document.querySelectorAll('.apSlide');
const prevButton1 = document.querySelector('.ob-prev1');
const nextButton1 = document.querySelector('.ob-next1');
let currentSlide1 = 0;

const slides2 = document.querySelectorAll('.vaSlide');
const prevButton2 = document.querySelector('.ob-prev2');
const nextButton2 = document.querySelector('.ob-next2');
let currentSlide2 = 0;

const cardImages = document.querySelectorAll('.innerCard');


/*
const images = ["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg","img/img7.jpg","img/img8.jpg","img/img9.jpg","img/img10.jpg"]


for (let i = 0; i < images.length; i++) {
    cardImages[i].style.backgroundImage = `url(${images[i]})`;
  }
*/

filterBurger.style.display = "none";
propSecSliders.style.display = "none";

showSlide(currentSlide);
showSlide2(currentSlide2);
showSlide1(currentSlide1);


selectElement.addEventListener("change", function() {
    const selectedValue = selectElement.value; 

    partHouses.style.display = "none";
    partApartments.style.display = "none";
    partVillas.style.display = "none";
    
    if (selectedValue === "1") {
        partHouses.style.display = "block"; 
    } else if (selectedValue === "2") {
        partApartments.style.display = "block"; 
    } else if (selectedValue === "3") {
        partVillas.style.display = "block"; 
    }else{
        partHouses.style.display = "block";
        partApartments.style.display = "block";
        partVillas.style.display = "block";
    }

});

filterBtn.addEventListener("click", displayFilterOptions); 
closeFilter.addEventListener("click", ()=>{
    filterBurger.style.display = "none";
    filterBtn.style.display = "flex";
})

listicon.addEventListener("click", displaySliders);
gridicon.addEventListener("click", displayGrids);

//House cards silder 
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});


//Apartments cards silder 
nextButton1.addEventListener('click', () => {
    currentSlide1 = (currentSlide1 + 1) % slides1.length;
    showSlide1(currentSlide1);
});

prevButton1.addEventListener('click', () => {
    currentSlide1 = (currentSlide1 - 1 + slides1.length) % slides1.length;
    showSlide1(currentSlide1);
});

//Villas cards silder 
nextButton2.addEventListener('click', () => {
    currentSlide2 = (currentSlide2 + 1) % slides2.length;
    showSlide2(currentSlide2);
});

prevButton2.addEventListener('click', () => {
    currentSlide2 = (currentSlide2 - 1 + slides2.length) % slides2.length;
    showSlide2(currentSlide2);
});

function displayFilterOptions(){
    filterBurger.style.display = "flex";
    filterBtn.style.display = "none";
}

function displaySliders() {
        propSec.style.display = "none";
        listicon.style.display = "none";
        gridicon.style.display = "flex";
        propSecSliders.style.display = "flex";
}

function displayGrids() {
    propSecSliders.style.display = "none";
    propSec.style.display = "flex";
    listicon.style.display = "flex";
    gridicon.style.display = "none";
}


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function showSlide1(index) {
    slides1.forEach((slide1, i) => {
        slide1.style.display = (i === index) ? 'block' : 'none';
    });
}

function showSlide2(index) {
    slides2.forEach((slide2, i) => {
        slide2.style.display = (i === index) ? 'block' : 'none';
    });
}


window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width < 768) {
        console.log("Viewport is now in mobile view");
        listicon.style.display = 'none';
        gridicon.style.display = "none";
        propSecSliders.style.display = "none";
        propSec.style.display = "flex";
        filterBtn.style.display = 'flex';
    }else if(width =>768){
        listicon.style.display = 'flex';
        filterBtn.style.display = 'none';
    }
});

