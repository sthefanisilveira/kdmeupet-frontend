import Vue from 'vue';
import VueRouter from 'vue-router';
import Hero from '../views/site/HeroPage.vue';
import Ong from '../views/ong/Ong.vue';
import Adote from '@/views/animais/AdotePage.vue';
import Login from '../views/login/Login.vue';
import Register from '../views/login/Register.vue';
import InfoPage from '@/views/animais/InfoPage.vue';
import InfoPageOng from '../views/ong/InfoPageOng.vue';

import OngPage from '@/views/ong/OngPage.vue';
import OngProfile from '@/views/ong/OngProfile.vue';
import OngPets from '@/views/ong/OngPets.vue';
import OngNotifications from '@/views/ong/OngNotifications.vue';
import OngRecursos from '@/views/ong/OngResources.vue';

import UserPage from '@/views/user/UserPage.vue';
import UserProfile from '@/views/user/UserProfile.vue';
import UserNotifications from '@/views/user/UserNotifications.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Hero',
    component: Hero,
  },
  {
    path: '/ong',
    name: 'OngPage',
    component: OngPage,
  },
  {
    path: '/petlover',
    name: 'UserPage',
    component: UserPage,
  },
  {
    path: '/ongs-listagem',
    name: 'Ong',
    component: Ong,
  },
  {
    path: '/adote',
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
    path: '/usuario-perfil',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/ong-perfil',
    name: 'OngProfile',
    component: OngProfile,
  },
  {
    path: '/ong-pets',
    name: 'OngPets',
    component: OngPets,
  },
  {
    path: '/ong-notificacoes',
    name: 'OngNotifications',
    component: OngNotifications,
  },
  {
    path: '/ong-recursos',
    name: 'OngRecursos',
    component: OngRecursos,
  },
  {
    path: '/user-notificacoes',
    name: 'UserNotifications',
    component: UserNotifications,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
