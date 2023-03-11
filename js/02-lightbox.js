import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCont = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" 
         alt="${description}"  />
        </a>
      `;
    })
    .join('');
};

galleryCont.insertAdjacentHTML('beforeend', galleryCards);

var lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);

