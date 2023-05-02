import { createPhotos } from './data.js';

//Задание 7 часть 2

const pictureTemplate = document.querySelector('#picture');
const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const photos = createPhotos();

photos.forEach((item) => {

  const objectElement = pictureTemplate.cloneNode(true);
  objectElement.querySelector('.picture__img').src = item.url;
  objectElement.querySelector('.picture__likes').textContent = item.likes;
  objectElement.querySelector('.picture__comments').textContent = item.comments ;

  fragment.appendChild(objectElement);
});

pictures.appendChild(fragment);

export {pictures};
