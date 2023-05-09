import { checkStringLength} from './util.js';
import { sendData } from './api.js';
import { blockSubmitButton } from './user-form.js';
const form = document.querySelector('.img-upload__form');
const comment = document.querySelector('.text__description');
const hashtag = document.querySelector('.text__hashtags');
const pristine = new Pristine(form, {
  // class of the parent element where the error/success class is added
  classTo: 'img-upload__text',
  errorClass: 'fimg-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  // class of the parent element where error text element is appended
  errorTextParent: 'img-upload__text',
  // type of element to create for the error text
  errorTextTag: 'span',
  // class of the error text element
  errorTextClass: 'form__error'
});
pristine.addValidator(comment, checkComment, 'Длина комментария должна быть от 20 до 140 символов!');

function checkComment(com) {
  return !checkStringLength(com, 19) && checkStringLength(com, 140) ;
}

function clearComment (){
  comment.value = '';
}
function clearHashtags (){
  hashtag.value = '';
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(evt);
  }
});

export { clearComment, clearHashtags};
