import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ul = document.querySelector('.gallery-list');

function imageTemplate(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `<li class="img-list-item">
  <div class="image-container">
  <a  href="${largeImageURL}">
    <img
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
 <ul class="image-descript">
  <li class="descript-item">
  <p class="descript-text">Likes</p>
   <p class="descript-value">${likes}</p>
  </li>
<li class="descript-item">
  <p class="descript-text">Views</p>
   <p class="descript-value">${views}</p>
  </li>
<li class="descript-item">
  <p class="descript-text">Comments</p>
   <p class="descript-value">${comments}</p>
  </li>
  <li class="descript-item">
  <p class="descript-text">Downloads</p>
   <p class="descript-value">${downloads}</p>
  </li>
  </ul>
  </div>
</li>`;
}

function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}

export function renderImage(images) {
  ul.innerHTML = imagesTemplate(images);
  lightbox.refresh();
}

const lightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});
