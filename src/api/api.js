import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImageBySearch = async (query, page) => {
  const params = {
    key: '38613829-66758419eaca37922b4e1f24f',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 12,
  };
  const responce = await axios({ params });
  const data = responce.data;
  return data;
};
