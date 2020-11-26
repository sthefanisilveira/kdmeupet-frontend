<template>
  <aside class="user-menuLateral">
    <div class="profile-thumbs">
      <img
        src="https://randomuser.me/api/portraits/women/24.jpg"
        alt="">
      <!-- <span> Olá, Sandra!</span> -->
      <ul v-for="user in users" :key="user.id"> 
        <li> {{users.name}} </li>
      </ul>

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
    // getUser(){
    //   axios.defaults.headers.common = {
    //   ...axios.defaults.headers.common,
    //   'Access-Control-Allow-Origin': 'http://localhost:3000',
    //   "Content-Type": 'application/json',
    //   };

    //   const url = "api/usuario";

    //   // this.$http.get(url)
    //   console.log(axios);
    //   axios.get('http://localhost:3000/api/usuario')
		// 	.then(response => {
    //     console.log(response.data);
    //     this.users = response.data;
		// 	}).catch(error => {
		// 		console.log(error);
		// 	});
    // },
  },
};
</script>

<style>
.user-menuLateral {
  width: 250px;
  min-height: 100vh;
  background-color: #272B33;
  color: #eee;
  padding: 30px;
}

.user-itens li:hover {
  cursor: pointer;
  background: #7957d5;

}

.user-itens li a {
  color: #eee;
  cursor: pointer;
}

.profile-thumbs {
  display: flex;
  padding: 10px 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee
}

.profile-thumbs img {
  border-radius: 50%;
  width: 50px;
  border: 2px solid #7957d5;
  margin-right: 10px;
}

.profile-thumbs span {
  font-weight: bold;
  font-size: 1em;
  display: flex;
  align-items: center;
}


</style>
