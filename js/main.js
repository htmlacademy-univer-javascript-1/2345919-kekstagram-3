const generateRandomNumber = function(from, to){
    if (from < 0 || to < 0){
      console.log ('Неверный диапазон');
    }
    if (from > to){
      console.log ('Неверный диапазон');
    }

    return Math.random() * (from - to) + from;
}
generateRandomNumber();

let functionName = function (stroke, maxLength){
  if (stroke.length > maxLength ){
    return false;
  }
  return true;
}

functionName();
