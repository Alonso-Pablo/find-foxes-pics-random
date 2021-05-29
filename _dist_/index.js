/*
const fox = document.getElementById("fox")
const apiURL = "https://randomfox.ca/floof/";
console.log("Hola")
let numberImgToShow = 10;

const response = async (nImages) => {
    const urlSave = [];
    const elImg = [];
    
    // Fetch
    for (let i = 0; i<nImages; i++){
        try {
            const responseFetch = await fetch(apiURL);
            const data = await responseFetch.json();
            urlSave.push(data.image)
        } catch (error){console.log(error.message)}
    };

    // Create html el
    urlSave.forEach((image) => {
        const img = document.createElement('img');
        img.classList.add("mx-auto")
        img.style = 'max-width: 320px';
        img.src = image;

        const container = document.createElement('div')
        container.classList.add("p-4")
        container.append(img);

        elImg.push(container)
        console.log(image);
    });

    fox.append(...elImg);

}

    
    
    // const img = document.createElement('img');

response(numberImgToShow);

*/
// Como lo hizo el profesor:
import { registerImage } from './lazy.js'

export const createImageNode = () => {
    const container = document.createElement('div');
    container.className = "p-4 div-fox";

    const imagen = document.createElement('img')
    imagen.className = "loading bg-gray-100";
    imagen.width = '320'
    // imagen.src = `https:\/\/randomfox.ca\/images\/${random()}.jpg`;

    container.appendChild(imagen);

    return container;
};

const imagesContainer = document.getElementById('images-container');

const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');

const addImage = () => {
    const newImage = createImageNode();
    imagesContainer.append(newImage);
    // quiero que la registres en el lazy loading y la empiezes a escuchar 
    registerImage(newImage);
}

function deleteImages() {
while (imagesContainer.firstChild){
    imagesContainer.removeChild(imagesContainer.firstChild)
}}

addButton.addEventListener('click', addImage)
deleteButton.addEventListener('click', deleteImages)

