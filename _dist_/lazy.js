import { createImageNode } from './index.js'

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum


const isIntersecting = (entry) => {
    // Tambien podemos condicionar si esta a 200px lejos de la pantalla --do--> something
    return entry.isIntersecting // True si esta dentro de la pantalla o false si no esta dentro.
}
const loadImage = (entry) => {
    const nodo = entry.target
    // Accion que sucede cuando se encuentra dentro del viewport
    // Esta accion sucede varias veces con la misma imagen cuando sale y entra denuevo asi que hay que registrarla
    // Usamos un metodo unobserve(nodo)
    // Como parte de la API, esta accion que es ejecutada por el IntersectionObserver trae en su primer argumento el entry que en ese momento sucede.
    observador.unobserve(nodo)
    nodo.firstElementChild.src = `https:\/\/randomfox.ca\/images\/${random()}.jpg`;

    // Genera una imagen al scrollear para abajo.
    const imagesContainer = document.getElementById('images-container');
    const newImage = createImageNode();
    imagesContainer.append(newImage);
    registerImage(newImage);
}

const observador = new IntersectionObserver((entries) => {
    // El intersection observer va a ejecutar esta funcion y nos va a pasar todas las entradas que en ese momento está escuchando.
    // entries es un array asi que lo vamos a filtrar.
    // por cada elemento que haya en la pantalla vamos a hacer una accion
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (image) => {
    // IntersectionObserver -> observar(image)
    observador.observe(image)
}