import { isEscapeKey } from './util.js';
import { defoultScale} from './scale.js';
import {defoultEffect} from  './effects.js';
const inputFile = document.querySelector('#upload-file');
const imageEditingForm = document.querySelector('.img-upload__overlay');
const closingForm = document.querySelector('#upload-cancel');

inputFile.addEventListener('change', () => {
  openPhotoEditor();
});

closingForm.addEventListener('click', () => {
  closePhotoEditor();
});

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoEditor();
  }
};


function openPhotoEditor(){
  imageEditingForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscKeydown);
}

function closePhotoEditor(){
  defoultEffect();
  defoultScale();
  inputFile.value = '';
  document.querySelector('.text__description').textContent ='';
  document.querySelector('.text__description').textContent ='';
  imageEditingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscKeydown);
}

