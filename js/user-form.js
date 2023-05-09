import { isEscapeKey } from './util.js';
import { defoultScale} from './scale.js';
import {defoultEffect} from  './effects.js';
import { clearComment, clearHashtags } from './validation.js';
const inputFile = document.querySelector('#upload-file');
const imageEditingForm = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const submitButton = document.querySelector('.img-upload__submit');
const successTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);


inputFile.addEventListener('change', () => {
  openPhotoEditor();
});

closeButton.addEventListener('click', () => {
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

function closePhotoEditor(clean){
  defoultEffect();
  defoultScale();
  inputFile.value = '';
  imageEditingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscKeydown);
  if (clean === true){
    clearComment();
    clearHashtags();
  }
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Отправить';
};

const closeSuccessWindow = () => {
  document.removeEventListener('keydown', closeByEscSuccess);
  document.removeEventListener('click', closeByClickSuccess);
  successTemplate.remove();
};

const closeErrorWindow = () => {
  document.removeEventListener('keydown', closeByEscError);
  document.removeEventListener('click', closeByClickError);
  errorTemplate.remove();
};

function closeByEscSuccess(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessWindow();
  }
}

function closeByEscError(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorWindow();
  }
}

function closeByClickSuccess(evt) {
  evt.preventDefault();
  closeSuccessWindow();
}

function closeByClickError(evt) {
  evt.preventDefault();
  closeErrorWindow();
}

const showSuccessMessage = () => {
  const successButton = successTemplate.querySelector('.success__button');
  document.addEventListener('keydown', closeByEscSuccess);
  document.addEventListener('click', closeByClickSuccess);
  successButton.addEventListener('click', closeSuccessWindow);
  document.body.append(successTemplate);
};

const showErrorMessage = () => {
  const errorButton = errorTemplate.querySelector('.error__button');
  document.addEventListener('keydown', closeByEscError);
  document.addEventListener('click', closeByClickError);
  errorButton.addEventListener('click', closeErrorWindow);
  document.body.append(errorTemplate);
};

export {showErrorMessage, showSuccessMessage};
export {openPhotoEditor, closePhotoEditor, blockSubmitButton, unblockSubmitButton};
