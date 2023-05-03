import { checkStringLength } from './util';
const form = document.querySelector('.img-upload__form');
const comment = document.querySelector('.text__description');
const hashtag = document.querySelector('.text__hashtags');
const regex = /^#[A-Za-zА-Яа-яЁё0-9]{1,20}/;

const pristine = new Pristine(form, {
  // class of the parent element where the error/success class is added
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  // class of the parent element where error text element is appended
  errorTextParent: 'upload__text',
  // type of element to create for the error text
  errorTextTag: 'span',
  // class of the error text element
  errorTextClass: 'form__error'
});
pristine.addValidator(comment, checkComment, 'Длина комментария должнабыть от 20 до 140 символов!');
pristine.addValidator(hashtag, checkHashtag, 'Неверно задан хештег: начни с #');

function checkComment(com) {
  return checkStringLength(com, 20, 140);
}

function checkHashtag (hash){
  return regex.test(hash);
}
form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }

});

