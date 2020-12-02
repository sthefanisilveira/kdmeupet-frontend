<template>
  <div class="ong-recursos">
    <div class="columns">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="/ong">Home</a></li>
            <li class="is-active">
              <a href="#" aria-current="page">Recursos cadastrados</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-9">
        <h1>Recursos cadastrados</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column is-2">
        <input id="recurso-id" type="hidden" v-model="recurso.id" />
        <b-field label="Quantidade" label-for="resource-quantity">
            <b-input id="resource-quantity" type="number" v-model="recurso.quantity" placeholder="10" required></b-input>
        </b-field>
      </div>
      <div class="column is-8">
        <b-field label="Produto" label-for="resource-product">
            <b-input id="resource-product" type="text" v-model="recurso.product" placeholder="Insira o produto" required></b-input>
        </b-field>
      </div>
      <div class="column is-2">
        <b-field label="Tipo" label-for="resource-type">
            <b-input id="resource-type" type="text" v-model="recurso.type" placeholder="Insira o tipo" required></b-input>
        </b-field>
      </div>
    </div>

    <b-button type="is-success" v-if="mode === 'save'" @click="save">Salvar</b-button>
    <b-button type="is-danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
    <b-button class="ml-2" type="is-primary" outlined @click="reset">Cancelar</b-button>

    <hr>
    <b-table hoverable striped :data="recursos" :columns="columns">
      <template slot="actions">
        <b-button type="is-warning" class="mr-2" @click="loadUser(data.item)"><i class="fa fa-edit"></i></b-button>
        <b-button type="is-danger"><i class="fa fa-trash"></i></b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios';
import { baseApiUrl, showError } from '@/global';

export default {
  name: "OngResources",
  data() {
    return {
      mode: 'save',
      recurso: {},
      recursos: [],
      columns: [
        { field: 'quantity', label: 'Quantidade', sortable:true },
        { field: 'product', label: 'Produto' },
        { field: 'type', label: 'Tipo', sortable:true },
        { field: 'actions', label: 'Ações' },
      ]
    };
  },
  created() {
    this.getResources();
  },
  methods: {
    getResources() {
      const url = '/api/recurso';
     	this.$http.get(url).then(response => {
        console.log(response.data);
         this.recursos = response.data
      }).catch(error => {
          console.log(error);
      });
    },
    reset() {
      this.mode = 'save';
      this.recurso = {};
      this.getResources();
    },
    save() {
      const method = this.recurso.id ? 'put' : 'post';
      const id = this.recurso.id ? `/${this.recurso.id}` : '';
      axios[method](`${baseApiUrl}/recurso${id}`, this.recurso)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.recurso.id;
      axios.delete(`${baseApiUrl}/recurso/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.reset();
        })
        .catch(showError);
    },
    loadResource(resource, mode = 'save') {
      this.mode = mode;
      this.resource = { ...resource };
    }
  },

};
</script>

<style>
.button.is-primary.is-outlined {
    background-color: transparent;
    border-color: #ff6b6b;
    color: #ff6b6b;
}

.button.is-primary.is-outlined:hover {
    background-color: #ff6b6b;
    border-color: #ff6b6b;
}

.ong-recursos {
  padding: 10px;
  width: 85vw;
}

.button-resources button {
  margin-left: 10px;
}
</style>