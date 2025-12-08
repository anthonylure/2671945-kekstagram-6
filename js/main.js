import { generatePhotos } from './data.js';
import { renderPhotos } from './picture.js';
import { initForm } from './formValidation.js';

const photos = generatePhotos();
renderPhotos(photos);

document.addEventListener('DOMContentLoaded', () => {
  initForm();
});