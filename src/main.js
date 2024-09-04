import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

const searchFormBtn = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader-box');
const loaderBtn = document.querySelector('.loader-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.7,
});

let currentPage = 1;
let searchedValue = '';
let perPage = 15;
let totalPage = null;
let cardHeight = 0;

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    loaderEl.classList.remove('hidden');
    searchedValue = searchFormBtn.elements.user_query.value.trim();
    currentPage = 1;

    if (searchedValue === '') {
      iziToast.show({
        message: 'Please enter something to search',
        messageColor: '#fafafb',
        messageSize: '16px',
        messageLineHeight: '150%',
        backgroundColor: '#59a10d',
        position: 'topRight',
        maxWidth: 432,
      });
      loaderEl.classList.add('hidden');
      searchFormBtn.reset();
      galleryEl.innerHTML = '';
      return;
    }
    const response = await fetchPhotos(searchedValue, currentPage, perPage);

    totalPage = Math.ceil(response.data.total / perPage);

    if (response.data.total === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fafafb',
        messageSize: '16px',
        messageLineHeight: '150%',
        backgroundColor: '#ef4040',
        position: 'topRight',
        maxWidth: 432,
      });

      galleryEl.innerHTML = '';
      loaderEl.classList.add('hidden');

      searchFormBtn.reset();
      return;
    }

    const galleryCardsTemplate = response.data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    galleryEl.innerHTML = galleryCardsTemplate;
    lightbox.refresh();

    const galleryCardEl = galleryEl.querySelector('li');
    const card = galleryCardEl.getBoundingClientRect();
    cardHeight = card.height;

    if (totalPage === 1) {
      loaderBtn.classList.add('hidden');
      loaderEl.classList.add('hidden');
    } else {
      loaderEl.classList.add('hidden');
      loaderBtn.classList.remove('hidden');
      searchFormBtn.reset();
      lightbox.refresh();
    }
  } catch (err) {
    iziToast.error({
      message: err.stack,
      messageColor: '#fafafb',
      messageSize: '16px',
      messageLineHeight: '150%',
      backgroundColor: '#ef4040',
      position: 'topRight',
      maxWidth: 432,
    });
    loaderEl.classList.add('hidden');
  }
};

const onLoadClick = async event => {
  try {
    loaderEl.classList.remove('hidden');
    currentPage++;
    const response = await fetchPhotos(searchedValue, currentPage, perPage);
    const galleryCardsTemplate = response.data.hits
      .map(imgDetails => createGalleryCardTemplate(imgDetails))
      .join('');
    galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);
    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    lightbox.refresh();
    loaderEl.classList.add('hidden');

    if (currentPage === totalPage) {
      loaderBtn.classList.add('hidden');
      loaderEl.classList.add('hidden');
      iziToast.show({
        message: `We're sorry, but you've reached the end of search result`,
        messageColor: '#fafafb',
        messageSize: '16px',
        messageLineHeight: '150%',
        backgroundColor: '#59a10d',
        position: 'topRight',
        maxWidth: 432,
      });
    }
  } catch (err) {
    iziToast.error({
      message: err.stack,
      messageColor: '#fafafb',
      messageSize: '16px',
      messageLineHeight: '150%',
      backgroundColor: '#ef4040',
      position: 'topRight',
      maxWidth: 432,
    });
    loaderEl.classList.add('hidden');
  }
};

searchFormBtn.addEventListener('submit', onSearchFormSubmit);
loaderBtn.addEventListener('click', onLoadClick);
