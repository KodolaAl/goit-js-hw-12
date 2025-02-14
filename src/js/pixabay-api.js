import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { messageError } from '../main';

const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '48798537-0207cfb0467814d90ddbd436c';

export function fetchImages(userValue) {
  return axios
    .get(BASE_URL, {
      params: {
        key: MY_KEY,
        q: userValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error(messageError);
      }
      return response.data.hits;
    })
    .catch(error => {
      iziToast.error(messageError);
      console.error(error);
      throw error;
    });
}
