import { closePhotoEditor, showErrorMessage, showSuccessMessage, unblockSubmitButton } from './user-form.js';


const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok){
        return response.json();
      }
    })
    .then((pictures) => {
      onSuccess(pictures);
    });
};

const sendData = function(evt) {
  const formData = new FormData(evt.target);
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        closePhotoEditor(true);
        showSuccessMessage();

      } else {
        closePhotoEditor(false);
        showErrorMessage();
      }
    })
    .finally(() => {unblockSubmitButton(); closePhotoEditor();});
};
export {getData, sendData};

