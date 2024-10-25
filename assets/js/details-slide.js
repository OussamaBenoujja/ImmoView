const photos = ["../assets/img/detail-1.jpg", "../assets/img/detail-2.jpg", "../assets/img/detail-3.jpg", "../assets/img/detail-4.jpg", "../assets/img/detail-5.jpg"];
let currentIndex = 0;


function showPhoto(index) {
    const mainPhoto = document.getElementById('main-photo');
    mainPhoto.src = photos[index];
    currentIndex = index;
}

document.getElementById('btn-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto(currentIndex);
});

document.getElementById('btn-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto(currentIndex);
});