import { createPhotos } from './data.js';

//Задание 7 часть 2

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const photos = createPhotos();

photos.forEach((object) => {

  const objectElement = pictureTemplate.cloneNode(true);
  objectElement.querySelector('.picture__img').src = object.url;
  objectElement.querySelector('.picture__likes').textContent = object.likes;
  objectElement.querySelector('.picture__comments').textContent = object.comments;
  fragment.appendChild(objectElement);
});

pictures.appendChild(fragment);

export {pictures};
