import axios from 'axios';
import provedor from '@/provedor';

const apiUrl = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Accept': 'application/json',
    'Content': 'application/json'
  }
});

apiUrl.interceptors.request.use( function (config) {
  const token = provedor.state.token;
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function(erro) {
  return Promise.reject(erro);
});

export default apiUrl;
