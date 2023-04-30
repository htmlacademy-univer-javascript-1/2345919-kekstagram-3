import { createPhotos } from './data.js';

//Задание 7 часть 2

const pictureTemplate = document.querySelector('#picture');
const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const photos = createPhotos();

photos.forEach((item) => {

  const objectElement = pictureTemplate.cloneNode(true);
  const fullPhoto = objectElement.querySelector('.picture__img');
  const likes = objectElement.querySelector('.picture__likes');
  const comments =  objectElement.querySelector('.picture__comments').textContent ;
  fullPhoto.src = item.url;
  likes.textContent = item.likes;
  comments.textContent = item.comments;
  fragment.appendChild(objectElement);
});

pictures.appendChild(fragment);

export {pictures};
