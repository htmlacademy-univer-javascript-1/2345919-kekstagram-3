const radioButtons = document.querySelectorAll('.effects__radio');
const imgPreview = document.querySelector('.img-upload__preview');

radioButtons.forEach((button) => {
  button.addEventListener('change', () => {
    const className = button.value;
    imgPreview.className =  (`img-upload__preview effects__preview--${className}`);
  });

});

function defoultEffect (){
  imgPreview.className = ('img-upload__preview effects__preview--none');
}
export{defoultEffect};

