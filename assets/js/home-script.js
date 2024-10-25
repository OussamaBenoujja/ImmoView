/** Partie Javascript Pour Home Page  */
let currentSlideNews = 2;
let currentSlideProperties = 2;

function showSlide(index, section) {
    const slides = section.querySelectorAll('.grtdiv');
    
   
    if (index >= slides.length) {
        index = slides.length - 1;
    } else if (index < 0) {
        index = 0;
    }

   
    const offset = -index * (slides[0].offsetWidth + 40); 
    section.querySelector('.ouamslides').style.transform = `translateX(${offset}px)`;

    
    if (section.classList.contains('newssct')) {
        updateBoxColors(index, 'news');
    } else {
        updateBoxColors(index, 'properties');
    }
}

function moveSlide(direction, sectionType) {
    const newSlide = sectionType === 'news' ? currentSlideNews + direction : currentSlideProperties + direction;

    const section = sectionType === 'news' ? document.querySelector('.newssct') : document.querySelector('.prprtssct');
    const slidesCount = section.querySelectorAll('.grtdiv').length;

    if (newSlide >= 0 && newSlide < slidesCount) {
        if (sectionType === 'news') {
            currentSlideNews = newSlide;
        } else {
            currentSlideProperties = newSlide;
        }
        showSlide(newSlide, section);
    }
}

function updateBoxColors(index, sectionType) {
    const colors = [
        getComputedStyle(document.documentElement).getPropertyValue('--color-2'),
        getComputedStyle(document.documentElement).getPropertyValue('--color-5')
    ];

    const boxPrefix = sectionType === 'news' ? '' : 'properties-';
    document.getElementById(`box1${boxPrefix}`).style.backgroundColor = colors[index % colors.length];
    document.getElementById(`box2${boxPrefix}`).style.backgroundColor = colors[(index + 1) % colors.length];
    document.getElementById(`box3${boxPrefix}`).style.backgroundColor = colors[(index + 2) % colors.length];
    
}

showSlide(currentSlideNews, document.querySelector('.newssct'));
showSlide(currentSlideProperties, document.querySelector('.prprtssct'));

/** La fin de la Partie Javascript Pour Home Page  */
