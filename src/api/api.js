import axios from 'axios';

// axios.defaults.baseURL =
//   'https://pixabay.com/api/?key=38613829-66758419eaca37922b4e1f24f';

export const getImageBySearch = async query => {
  const { data } = await axios(
    `https://pixabay.com/api/?q=${query}&page=1&key=38613829-66758419eaca37922b4e1f24f&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};
