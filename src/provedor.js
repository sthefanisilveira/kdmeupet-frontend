import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const estado = {
  token: null,
  user: {}
}

const mutations = {
  DEFINIR_USUARIO_LOGADO(state, {token, user}) {
    state.user = user;
    state.token = token;
  },
  DESLOGAR_USUARIO(state) {
    state.user = '';
    state.token = null;
  },
}

export default new Vuex.Store({
  state: estado,
  mutations
});