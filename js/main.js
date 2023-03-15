const generateRandomNumber = function(from, to){
  if (from < 0 || to < 0){
    return 0;
  }
  if (from > to){
    return 0;
  }

  return Math.random() * (from - to) + from;
};

generateRandomNumber();

const functionName = function (stroke, maxLength){
  if (stroke.length > maxLength ){
    return false;
  }
  return true;
}

functionName();
