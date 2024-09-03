import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotos = (searchedQuery, page, perPage) => {
  const axiosParams = {
    params: {
      key: '45521287-1fb3911845814b73b6d184262',
      q: searchedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
      page: page,
      safesearch: true,
    },
  };

  return axios.get('/api/', axiosParams);
};
