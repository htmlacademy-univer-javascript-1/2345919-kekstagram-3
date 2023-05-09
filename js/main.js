import { renderPhotos } from './draw.js';
import  './validation.js';
import './user-form.js';
import { getData } from './api.js';

getData((photos) => {
  renderPhotos(photos);
});

