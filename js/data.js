import {generateRandomArrayElement} from './util.js';

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
  URL[i-1] = `photos/${i}.jpg`;
}

for (let i = 0; i<201; i++){
  if (i>15){
    likes[i-15]=i;
  }
  else{
    comments[i-1]=i;
  }
}


function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('project', 23);

const OBJECT_COUNT = 25;

const createObject = () => ({

  id: generateRandomArrayElement(id),
  URL: generateRandomArrayElement(URL),
  likes: generateRandomArrayElement(likes),
  comments: generateRandomArrayElement(comments),
  description: generateRandomArrayElement(description)

});

const createObjects = () => Array.from({length: OBJECT_COUNT}, createObject);

export {createObjects};
