const generateRandomNumber = function(from, to){
  const min = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const max  = Math.floor(Math.max(Math.abs(from), Math.abs(to)));

  return Math.floor(Math.random() * (max-min) + min);
};


const generateRandomArrayElement = function(array){
  const el = generateRandomNumber(0,array.length-1);
  return array[el];
};

function checkStringLength (string, lengthmin, lengthmax) {
  return string.length <= lengthmax && string.length>=lengthmin;

}
const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

export {generateRandomArrayElement, isEscapeKey,  checkStringLength};
