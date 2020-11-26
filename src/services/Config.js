import axios from 'axios';
import provedor from '@/provedor';

const apiUrl = axios.create({
  baseURL: 'http://localhost:3000/',
  // axios.defaults.headers.common = {

  //   "Content-Type": 'application/json',
  //   };
  headers: {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    ...axios.defaults.headers.common,
  },
});

apiUrl.interceptors.request.use( function (config) {
  // const token = localStorage.getItem('token');
  const token = provedor.state.token;
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function(erro) {
  return Promise.reject(erro);
});

export default apiUrl;