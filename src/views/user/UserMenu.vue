<template>
  <aside class="user-menuLateral">
    <div class="profile-thumbs" v-for="user in users" :key="user.id">
      <img
        src="https://randomuser.me/api/portraits/women/24.jpg"
        alt="">
      <span> Olá, {{users.name}}!</span>
    </div>
    <ul class="user-itens">
      <li @click="setUrl('profile')" >
         Meu perfil
      </li>
      <li @click="setUrl('petLover')">
          Pets favoritos
      </li>
      <li @click="setUrl('notifications')">
          Notificações
      </li>
    </ul>
  </aside>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserMenu',
  data() {
    return {
      users: {
        name: '',
      },
    };
  },
  created() {
    this.users.name = this.$store.state.user.name;
    console.log(this.$store.state.user.name, 'user');
  },
  
  methods: {
    setUrl(itemSelecionado) {
      this.$emit('set-link', itemSelecionado);
    },
  },
};
</script>

<style>
.button.is-primary {
    background-color: #ff6b6b;
    border-color: transparent;
    color: #fff;
}

.button.is-primary:hover {
    background-color: #E63946;
    border-color: transparent;
    color: #fff;
}

.user-menuLateral {
  width: 250px;
  min-height: 100vh;
  background-color: #272B33;
  color: #eee;
  padding: 30px;
}

.user-itens {
  padding-top: 30px;
}

.user-itens li:hover {
  cursor: pointer;
  background: #FF6B6B;

}

.user-itens li a {
  color: #eee;
  cursor: pointer;
}

.profile-thumbs {
  display: flex;
  padding: 10px 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.profile-thumbs img {
  border-radius: 50%;
  width: 50px;
  border: 2px solid #4ecdc4;
  margin-right: 10px;
}

.profile-thumbs span {
  font-weight: bold;
  font-size: 1em;
  display: flex;
  align-items: center;
}


</style>
