const BASE_URL = 'https://pixabay.com';
const keyAPI = '45521287-1fb3911845814b73b6d184262';

export const fetchPhotos = searchedQuery => {
  const urlParams = new URLSearchParams({
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 15,
    page: 1,
    safesearch: true,
  });

  return fetch(`${BASE_URL}/api/?key=${keyAPI}&${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
