<template>
  <div class="user-profile">
     <div class="columns">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="/petlover">Home</a></li>
            <li class="is-active"><a href="#" aria-current="page">Perfil</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns is-vcentered">
      <div class="column is-2">
        <img
          src="https://randomuser.me/api/portraits/women/24.jpg" alt="">
        </div>
        <div class="column is-4">
          <h1>{{user.name}}</h1>
          <p>Rua Agenor da Silva, 98</p>
          <p>Vila Nova</p>
          <p>Joinville - SC</p>
          <p>89182-910</p>
          <button class="button is-warning"
            @click="setEditForm">
            <i class="fas fa-edit"> </i> Editar {{statusEdit}}
          </button>
        </div>
      </div>
      <hr>

       <div class="columns" v-if="statusEdit">
      <div class="column is-12">
        <h1>Edição</h1>
        <label for="">Nome</label>
        <input type="text" v-model="user.name"> <br>
         <label for="">CPF</label>
        <input type="text" v-model="user.cpf"> <br>
        <label for="">E-mail</label>
        <input type="text" v-model="user.email"> <br>
        <label for="">Password</label>
        <input type="text" v-model="user.password"> <br>
        <label for="">Confirmar Password</label>
        <input type="text" v-model="user.retypePassword"> <br>
        <hr>

        <label for="">CEP</label>
        <input type="text" v-model="user.address.zipcode"> <br>
        {{user.address}}

        <button class="button is-warning"
            @click="setAddress">
            <i class="fas fa-edit"> </i> Buscar Endereço
          </button>

      </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        retypePassword: '',
        cpf: '',
        image: {},
        address: {
          zipcode: ''
        },
      },
      statusEdit: false,
    };
  },
  created() {
    this.user.name = this.$store.state.user.name;
  },
  methods: {
    setAddress() {
      const headers = {
       method: 'GET',
       mode: 'no-cors',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      };
      const url =`https://api.postmon.com.br/v1/cep/${this.user.address.zipcode}`;
      this.$http(url, headers)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    },
    setEditForm() {
      const data = {
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        cpf: this.user.cpf,
        image: this.user.image,
        endereco: this.user.endereco
      }
      console.log(this.statusEdit);
      this.statusEdit = true;
    },
  },
}
</script>

<style>
.user-profile {
  padding: 10px;
  width: 85vw;
}

.user-profile h1 {
  text-align: left;
  font-size: 2em;
}
</style>
