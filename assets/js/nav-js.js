const burger = document.querySelector('.h-burger-menu');
const nav = document.querySelector('.h-nav-links');

burger.addEventListener('click', () => {
nav.classList.toggle('nav-active');
});