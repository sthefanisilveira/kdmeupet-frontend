import Vue from 'vue';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue';
import router from './router';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import apiUrl from '@/services/Config.js';

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.prototype.$http = apiUrl;


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
