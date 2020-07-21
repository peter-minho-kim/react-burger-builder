import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-576c9.firebaseio.com/',
});

export default instance;
