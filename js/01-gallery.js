import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCont = document.querySelector('.gallery');
const galleryCards = createGallery(galleryItems);

galleryCont.insertAdjacentHTML('beforeend', galleryCards);
galleryCont.addEventListener('click', onPictureClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
};

function onPictureClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

    // galleryCont.addEventListener('click', onModal);

    const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}"/>`,
    {
      onShow: (instance) => {
        galleryCont.addEventListener('keydown', onEscBtn);
      },
      onClose: (instance) => {
        galleryCont.removeEventListener('keydown', onEscBtn);
      },
    },
  );
  instance.show();

  function onEscBtn(evt) {
    if (evt.code === 'Escape') {
    }
    instance.close();
  }
}

console.log(galleryItems); 
