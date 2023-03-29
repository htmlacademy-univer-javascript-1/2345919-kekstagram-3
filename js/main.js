const id = [];
const URL = [];
const likes = [];
const comments = [];
const description=[
  'cats',
  'home',
  'family',
  'vacation',
  'work'
];

for (let i = 1; i<26; i++){
  id[i-1]=i;
  URL[i-1] = 'photos/' + i.toString() +'.jpg';
}

for (let i = 0; i<201; i++){
  if (i>15){
    likes[i-15]=i;
  }
  else{
    comments[i-1]=i;
  }
}


const generateRandomNumber = function(from, to){
  const min = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const max  = Math.floor(Math.max(Math.abs(from), Math.abs(to)));

  return Math.floor(Math.random() * (max- min) + min);
};

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('project', 23);

const generateRandomArrayElement = function(array){
  const el = generateRandomNumber(0,array.length-1);
  return array[el];
};

const createObject = () => {
  return {
    id: generateRandomArrayElement(id),
    URL: generateRandomArrayElement(URL),
    likes: generateRandomArrayElement(likes),
    comments: generateRandomArrayElement(comments),
    description: generateRandomArrayElement(description),
  };
};

const similarObjects = [];
for (let i=0;i<25;i++){
  similarObjects[i]=createObject();
  console.log(createObject());
}


