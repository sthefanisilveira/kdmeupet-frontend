<template>
  <div class="ong-profile">
     <div class="columns">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="/ong">Home</a></li>
            <li class="is-active"><a href="#" aria-current="page">Meu perfil</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns is-vcentered">
      <div class="column is-2">
        <img
          src="../../assets/ong-logo.png" alt="">
        </div>
        <div class="column is-4">
          <h1>{{user.name}}</h1>
          <p>Rua Agenor da Silva, 98</p>
          <p>Vila Nova</p>
          <p>Joinville - SC</p>
          <p>89182-910</p>
          <button class="button is-warning"
            @click="setEditForm">
            <i class="fas fa-edit"> </i> Editar
          </button>
        </div>
      </div>

       <!-- <div class="columns" v-if="statusEdit">
        <div class="column is-12">
           <h1>Editar</h1>
        </div>
      </div> -->

      <div class="columns" v-if="statusEdit">
        <div class="column is-4">
          <b-field label="Nome">
              <b-input type="text" v-model="user.name"></b-input>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field label="E-mail">
              <b-input type="text" v-model="user.email"></b-input>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field label="CPF">
              <b-input type="text" v-model="user.cpf"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns" v-if="statusEdit">
        <div class="column is-6">
          <b-field label="Senha">
              <b-input type="text" v-model="user.password"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Confirme sua senha">
              <b-input type="text" v-model="user.retypePassword"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns" v-if="statusEdit">
        <div class="column is-6">
          <b-field label="CEP">
              <b-input type="search" icon-pack="fas" icon-right="search" icon-right-clickable @icon-right-click="setAddress" v-model="user.address.zipcode"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Estado">
              <b-input type="text" v-model="user.address.state"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns" v-if="statusEdit">
        <div class="column is-6">
          <b-field label="Cidade">
              <b-input type="text" v-model="user.address.city"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Bairro">
              <b-input type="text" v-model="user.address.neighborhood"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns" v-if="statusEdit">
        <div class="column is-10">
          <b-field label="Rua">
              <b-input type="text" v-model="user.address.street"></b-input>
          </b-field>
        </div>
        <div class="column is-2">
          <b-field label="Número">
              <b-input type="text" v-model="user.address.number"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns" v-if="statusEdit">
        <div class="column is-6">
          <b-button class="botao-padrao">Salvar</b-button>
          <!-- <button class="button is-warning">
              <i class="fas fa-search-location"> </i>
          </button> -->
        </div>
      </div>

    </div>
</template>
<script>

export default {
  name: 'OngProfile',
  data() {
   return {
      user: {
        name: '',
        email: '',
        password: "",
        retypePassword: "",
        cpf: "",
        image: {},
        address: {
          zipcode: "",
          city: "",
          state: "",
          street: "",
          neighborhood: "",
          state: "",
          number: "", },
      },
      statusEdit: false,
    };
  },
  created() {
    this.user.name = this.$store.state.user.name;
  },
  methods: {
    setAddress() {
      const url = `https://api.postmon.com.br/v1/cep/${this.user.address.zipcode}`;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.user.address.zipcode = response.data.cep;
          this.user.address.city = response.data.cidade;
          this.user.address.state = response.data.estado;
          this.user.address.street = response.data.logradouro;
          this.user.address.neighborhood = response.data.bairro;
          this.user.address.state = response.data.estado_info.nome;
        })
        .catch((error) => console.log(error));
    },

    setEditForm() {
      const data = {
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        cpf: this.user.cpf,
        image: this.user.image,
        endereco: this.user.endereco,
      };
      console.log(this.statusEdit);
      this.statusEdit = true;
    },
  },
}
</script>

<style>
.breadcrumb a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #292f36;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 0.75em;
}

.button.is-link {
    background-color: #ff6b6b;
    border-color: transparent;
    color: #fff;
}

.button.is-link:hover {
    background-color: #E63946;
    border-color: transparent;
    color: #fff;
}

.ong-profile {
  padding: 10px;
  width: 85vw;
}

.ong-profile h1 {
  text-align: left;
  font-size: 2em;
}
</style>
