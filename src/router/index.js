import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Ong from '../views/Ong.vue';
import Adote from '../views/Adote.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ongs',
    name: 'Ong',
    component: Ong,
  },
  {
    path: '/animais',
    name: 'Adote',
    component: Adote,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
