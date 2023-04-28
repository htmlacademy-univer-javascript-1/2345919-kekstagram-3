import { createObjects } from './data.js';


const pictureTemplate = document.querySelector('#picture').content;
var pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const similarObjects = createObjects();

similarObjects.forEach((object) => {

  const objectElement = pictureTemplate.cloneNode(true);
  const fullPhoto = document.querySelector('.picture__img');
  fullPhoto.textContent = object.URL;
  objectElement.querySelector('.picture__likes').textContent = object.likes;
  objectElement.querySelector('.picture__comments').textContent = object.comments;
  fragment.appendChild(objectElement);
});

pictures.appendChild(fragment);

export {pictures};
