import { createImageNode } from './index.js'

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum


const isIntersecting = (entry) => {
    return entry.isIntersecting
}
const loadImage = (entry) => {
    const nodo = entry.target
    observador.unobserve(nodo)
    nodo.firstElementChild.src = `https:\/\/randomfox.ca\/images\/${random()}.jpg`;

    // Genera una imagen al scrollear para abajo.
    const imagesContainer = document.getElementById('images-container');
    const newImage = createImageNode();
    imagesContainer.append(newImage);
    registerImage(newImage);
}

const observador = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (image) => {
    observador.observe(image)
}
