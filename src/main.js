import { fetchImages } from './js/pixabay-api.js';
import { renderImage } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
  ul: document.querySelector('.gallery-list'),
  input: document.querySelector('.input-img'),
  loader: document.querySelector('.loader'),
  loadButton: document.querySelector('.button-load'),
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

const messageInfo = {
  message: "We're sorry, but you've reached the end of search results.",
  position: 'bottomCenter',
  backgroundColor: 'white',
  messageColor: 'black',
  progressBar: false,
  displayMode: 'replace',
};

function showLoader() {
  refs.loader.style.display = 'flex';
}

function hideLoader() {
  refs.loader.style.display = 'none';
}

function showBtnMoreLoad() {
  refs.loadButton.style.display = 'flex';;
}

function hideBtnMoreLoad() {
  refs.loadButton.style.display = 'none';
}

function checkBtnStatus() {
  const per_page = 40;
  const maxPage = Math.ceil(totalHits / per_page);

  if (pageNumber >= maxPage) {
    hideBtnMoreLoad();
    iziToast.info(messageInfo);
  } else {
    showBtnMoreLoad();
  }
}

let userValue = '';
let pageNumber = 1;
let totalHits = 0;

refs.form.addEventListener('submit', async event => {
  event.preventDefault();
  userValue = refs.input.value.trim();
  pageNumber = 1;

  if (userValue === '') {
    iziToast.warning(messageWarning);
    return;
  }

  showLoader();
  refs.ul.innerHTML = '';

  try {
    const images = await fetchImages(userValue, pageNumber);
    if (!images) {
      hideLoader();
      return;
    }

    totalHits = images.totalHits;

    renderImage(images.hits);
    hideLoader();
    checkBtnStatus();
    event.target.reset();
  } catch (error) {
    hideLoader();
    hideBtnMoreLoad();
    iziToast.error(messageError);
    throw error;
  }
});

refs.loadButton.addEventListener('click', async () => {
  pageNumber += 1;
  checkBtnStatus();
  showLoader();
  try {
    const images = await fetchImages(userValue, pageNumber);
    renderImage(images.hits);
    hideLoader();
    scroll();
  } catch (error) {
    hideLoader();
    iziToast.error(messageError);
  }
});

function scroll() {
  const image = document.querySelector('.gallery-list li');
  if (image) {
    const cardSize = image.getBoundingClientRect();
    const scrollHeight = cardSize.height * 2;
    window.scrollBy({
      top: scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
