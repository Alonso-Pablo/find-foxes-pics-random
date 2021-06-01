import { registerImage } from './lazy.js'

export const createImageNode = () => {
    const container = document.createElement('div');
    container.className = "p-4 div-fox";

    const imagen = document.createElement('img')
    imagen.className = "loading bg-gray-100";
    imagen.width = '320'

    container.appendChild(imagen);

    return container;
};

const imagesContainer = document.getElementById('images-container');

const addButton = document.getElementById('addButton');
const deleteButton = document.getElementById('deleteButton');

const addImage = () => {
    const newImage = createImageNode();
    imagesContainer.append(newImage);
    registerImage(newImage);
}

function deleteImages() {
while (imagesContainer.firstChild){
    imagesContainer.removeChild(imagesContainer.firstChild)
}}

addButton.addEventListener('click', addImage)
deleteButton.addEventListener('click', deleteImages)

