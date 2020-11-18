import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
  },
});

apiUrl.interceptors.request.use( function (config) {
  const token = localStorage.getItem('token');
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function(erro) {
  return Promise.reject(erro);
});

export default apiUrl;