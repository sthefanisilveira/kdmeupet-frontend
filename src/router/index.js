import Vue from 'vue';
import VueRouter from 'vue-router';
import Hero from '../views/site/HeroPage.vue';
import Ong from '../views/ong/Ong.vue';
import Adote from '../views/animais/AdotePage.vue';
import Login from '../views/login/Login.vue';
import Register from '../views/login/Register.vue';
import InfoPage from '../views/animais/InfoPage.vue';
import InfoPageOng from '../views/ong/InfoPageOng.vue';
import HomeOng from '../views/ong/home/HomeOng.vue';
import HomeUsuario from '../views/usuario/HomeUsuario.vue';
import OngProfile from '@/views/ong/OngProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Hero',
    component: Hero,
  },
  {
    path: '/ong-perfil',
    name: 'OngProfile',
    component: OngProfile,
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
  {
    path: '/info-page',
    name: 'InfoPage',
    component: InfoPage,
  },
  {
    path: '/info-page-ong',
    name: 'InfoPageOng',
    component: InfoPageOng,
  },
  {
    path: '/home-ong',
    name: 'HomeOng',
    component: HomeOng,
  },
  {
    path: '/home-usuario',
    name: 'HomeUsuario',
    component: HomeUsuario,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
