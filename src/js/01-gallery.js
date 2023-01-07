import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

galleryItems.forEach(function (galleryItem) {
  const a = document.createElement('a');
  a.classList.add('gallery__item');
  a.setAttribute('href', galleryItem.original);
  const img = document.createElement('img');
  a.appendChild(img);
  img.classList.add('gallery__image');
  img.setAttribute('src', galleryItem.preview);
  img.setAttribute('alt', galleryItem.description);
  document.querySelector('div.gallery').appendChild(a);
});

console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
