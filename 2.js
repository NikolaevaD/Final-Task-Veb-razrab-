const images = [
    "1.webp",
    "11.webp",
    "3.webp",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.webp",
    "8.webp",
    "9.webp",
    "10.webp",
    "11.webp",
    "2.webp",
];

let currentPhotoIndex = 0;

function openModal(index) {
    currentPhotoIndex = index;
    document.getElementById('modal').style.display = "flex";
    document.getElementById('modalImg').src = images[currentPhotoIndex];
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

function changePhoto(direction) {
    currentPhotoIndex += direction;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = images.length - 1;
    } else if (currentPhotoIndex >= images.length) {
        currentPhotoIndex = 0;
    }

    document.getElementById('modalImg').src = images[currentPhotoIndex];
}