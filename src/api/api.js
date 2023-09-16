import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImageBySearch = async (query, page) => {
  const key = 'key=38613829-66758419eaca37922b4e1f24f';
  const params = {
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 12,
  };
  const responce = await axios(`?${key}&q=${query}`, { params });
  const data = responce.data;
  return data;
};
