import { generatePhotos } from './data.js';
import { renderPhotos } from './picture.js';

const photos = generatePhotos();
renderPhotos(photos);