const images = ["1.jpg", "2.jpg", "3.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${choseImage}`;

document.body.appendChild(bgimage);