

//Задание 7 часть 2

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');


const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach(({url, likes, comments}) => {

    const objectElement = pictureTemplate.cloneNode(true);
    objectElement.querySelector('.picture__img').src = url;
    objectElement.querySelector('.picture__likes').textContent = likes;
    objectElement.querySelector('.picture__comments').textContent = comments;
    fragment.appendChild(objectElement);
  });

  pictures.appendChild(fragment);
};
const clearPhotos = () => {
  pictures.innerHTML = '';
};

export {renderPhotos, clearPhotos};
