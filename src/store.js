import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const estado = {
  token: localStorage.getItem('token') || '',
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

const actions = {
  efetuarLogin({ commit }, user) {
      return new Promise((resolve, reject) => {
          http.post('auth/usuario/login', user)
              .then(response => {
                  commit('DEFINIR_USUARIO_LOGADO', {
                      token: response.data.access_token,
                      user: response.data.user
                  })
                  resolve(response.data)
              })
              .catch(err => {
                  console.log(err)
                  reject(err)
              })
      })
  }
}


export default new Vuex.Store({
  state: estado,
  mutations,
  actions
});
