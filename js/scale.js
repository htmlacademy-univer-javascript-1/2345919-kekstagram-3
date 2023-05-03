const DEFAULT_SCALE = 100;
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

function enlargePhoto()  {
  const scale = Number(scaleValue.value.replace('%', ''));
  if (scale <= 75){
    const newScale = scale + 25;
    scaleValue.value = `${newScale}%`;
    imgPreview.style.transform = `scale(${newScale/100})`;
  }
}

function defoultScale () {
  scaleValue.value =  `${DEFAULT_SCALE}%`;
  imgPreview.style.transform = `scale(${DEFAULT_SCALE/100})`;
}
function reducePhoto () {
  const scale = Number(scaleValue.value.replace('%', ''));
  if (scale >= 50){
    const newScale = scale - 25;
    scaleValue.value =  `${newScale}%`;
    imgPreview.style.transform = `scale(${newScale/100})`;
  }
}

buttonBigger.addEventListener('click', () => {
  enlargePhoto();
});

buttonSmaller.addEventListener('click', () => {
  reducePhoto();
});

export {defoultScale};
