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
          src="../../assets/user-logo.png" alt="">
      </div>
      <div class="column is-4">
          <h1>{{user.name}}</h1>
          <p>{{user.email}} | {{user.cpf}}</p>
          <p>{{user.street}}, {{user.number}}</p>
          <p>{{user.neighborhood}}</p>
          <p>{{user.city}} - {{user.state}}</p>
          <p>{{user.zipcode}}</p>
          <button class="button is-warning"
            @click="setEditForm">
            <i class="fas fa-edit"> </i> Editar
          </button>
      </div>
      </div>
      <hr>

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
              <b-input type="search" icon-pack="fas" icon-right="search" icon-right-clickable @icon-right-click="setAddress" v-model="user.zipcode"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Estado">
              <b-input type="text" v-model="user.state"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns" v-if="statusEdit">
        <div class="column is-6">
          <b-field label="Cidade">
              <b-input type="text" v-model="user.city"></b-input>
          </b-field>
        </div>
        <div class="column is-6">
          <b-field label="Bairro">
              <b-input type="text" v-model="user.neighborhood"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns" v-if="statusEdit">
        <div class="column is-10">
          <b-field label="Rua">
              <b-input type="text" v-model="user.street"></b-input>
          </b-field>
        </div>
        <div class="column is-2">
          <b-field label="Número">
              <b-input type="text" v-model="user.number"></b-input>
          </b-field>
        </div>
      </div>

      <div class="columns" v-if="statusEdit">
        <div class="column is-6">
          <button @click="saveForm" class="botao-padrao">Salvar</button>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserProfile",
  data() {
    return {
      user: {
        name: "",
        email: "",
        id: '',
        password: "",
        retypePassword: "",
        cpf: "",
        image: {},
        zipcode: "",
        city: "",
        state: "",
        street: "",
        neighborhood: "",
        number: "",
      },
      statusEdit: false,
    };
  },
  created() {
    this.user.name = this.$store.state.user.name;
    this.user.email = this.$store.state.user.email;
    this.user.id = this.$store.state.user.id;
    console.log(this.user.id);
  },
  methods: {
    setAddress() {
      const url = `https://api.postmon.com.br/v1/cep/${this.user.zipcode}`;
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          this.user.zipcode = response.data.cep;
          this.user.city = response.data.cidade;
          this.user.state = response.data.estado;
          this.user.street = response.data.logradouro;
          this.user.neighborhood = response.data.bairro;
          this.user.state = response.data.estado_info.nome;
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
      this.statusEdit = true;
    },
    saveForm() {
      // const url = `http://localhost:3333/user/${this.selected.id}/update`;
      // const url = `http://localhost:3000/api/usuario/:id`;

      const data = {
        name: this.name,
        email: this.email,
        cpf: this.cpf,
        zipcode: this.zipcode,
        city: this.city,
        state: this.state,
        street: this.street,
        neighborhood: this.neighborhood,
        number: this.number,
      };
      console.log(data);

      // axios.put(url).then((response) => {
      //   if (response) {
      //     response.json().then((dataResponse) => {
      //       this.getUsers();
      //       console.log(dataResponse);
      //     });
      //   }
      // });
    },
  },
};
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
