import Vue from 'vue';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue';
import router from './router';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import http from '@/http';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.prototype.$http = http;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
