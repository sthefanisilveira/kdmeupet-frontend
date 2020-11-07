import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'http://localhost:3000',
});

export default apiUrl;