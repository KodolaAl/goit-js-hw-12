import { fetchImages } from './js/pixabay-api.js';
import { renderImage } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  ul: document.querySelector('.gallery-list'),
  input: document.querySelector('.input-img'),
  loader: document.querySelector('.loader'),
};

export const messageError = {
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  position: 'topRight',
  backgroundColor: '#ef4040',
  messageColor: 'white',
  progressBar: false,
  displayMode: 'replace',
  maxWidth: '300px',
};

const messageWarning = {
  message: 'Please enter a search term!',
  position: 'topRight',
  backgroundColor: '#ef4040',
  messageColor: 'white',
  progressBar: false,
  displayMode: 'replace',
};

function showLoader() {
  refs.loader.style.display = 'flex';
}

function hideLoader() {
  refs.loader.style.display = 'none';
}

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const userValue = refs.input.value.trim();
  if (userValue === '') {
    iziToast.warning(messageWarning);
    return;
  }
  showLoader();

  fetchImages(userValue)
    .then(images => {
      hideLoader();
      renderImage(images);
      event.target.reset();
    })
    .catch(error => {
      hideLoader();
      iziToast.error(messageError);
      console.error(error);
      throw error;
    });
});
