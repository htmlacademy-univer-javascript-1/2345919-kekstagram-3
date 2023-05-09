const generateRandomNumber = function(from, to){
  const min = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const max  = Math.floor(Math.max(Math.abs(from), Math.abs(to)));

  return Math.floor(Math.random() * (max-min) + min);
};


const generateRandomArrayElement = function(array){
  const el = generateRandomNumber(0,array.length-1);
  return array[el];
};

function checkStringLength (string, length) {
  return string.length <= length;

}
const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

const showAlert = (message) => {
  const ALERT_SHOW_TIME = 5000;
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {generateRandomArrayElement, isEscapeKey,  checkStringLength, showAlert};
