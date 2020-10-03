import Vue from 'vue';
import VueRouter from 'vue-router';
import Hero from '../views/site/HeroPage.vue';
import Ong from '../views/ong/Ong.vue';
import Adote from '../views/ong/AdotePage.vue';
import Login from '../views/login/Login.vue';
import Register from '../views/login/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Hero',
    component: Hero,
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
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cadastro',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
