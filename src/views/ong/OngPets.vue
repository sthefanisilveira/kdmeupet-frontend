<template>
  <div class="ong-pets">
    <div class="columns">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="/ong">Home</a></li>
            <li class="is-active"><a href="#" aria-current="page">Pets Love</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-11">
        <h1>Pets cadastrados</h1>
      </div>
      <div class="column is-1">
        <button
              class="button is-primary"
              @click="unlikePet">
              <i class="fas fa-plus">  </i>
        </button>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-4"
        v-for="pet in pets"
        :key="pet.id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://i.pinimg.com/originals/05/11/1b/05111b1369f775d904c7af38777f5601.png"
                :alt="pet.name" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content is-centered">
              <h5 class="has-text-centered">
                {{ pet.name }}  | 10 anos
              </h5>
              <a href="/ong:name">{{pet.ong}}</a>
            </div>
          </div>
          <footer class="card-footer">
            <!-- <button
              class="button is-primary"
              @click="isComponentModalActive">
              <i class="fas fa-heart"></i>
            </button> -->
            <button
              class="button is-danger"
              @click="unlikePet">
              <i class="fas fa-trash">  </i>
            </button>
            <button
              class="button is-warning"
              @click="unlikePet">
              <i class="fas fa-edit"> </i>
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'OngPets',
  data() {
    return {
      isComponentModalActive: false,
      pets: [
        {
          id: 1,
          photo: '',
          name: 'Boris',
          ong: 'Abrigo Animal'
        },
         {
          id: 2,
          photo: '',
          name: 'Juvenal',
          ong: 'Abrigo Animal'
        },
        {
          id: 3,
           photo: '',
          name: 'Tobi',
          ong: 'Abrigo Animal',
        },
        {
          id: 4,
           photo: '',
          name: 'Caxias',
          ong: 'Abrigo Animal',
        },
        {
          id: 5,
          photo: '',
          name: 'Bernardo',
          ong: 'Abrigo Animal',
        },
         {
          id: 6,
          photo: '',
          name: 'James',
          ong: 'Abrigo Animal',
        },
      ],
    };
  },
  created() {
    this.getPetsLove();
  },
  methods: {
    getPetsLove() {
      const url = 'https://dog.ceo/api/breeds/image/random';
      axios.get(url)
        .then(response => {
          console.log(response.data.message)
           this.setImages(response)
        })
        .catch(err => {
          console.log(err);
        })
    },
    setImages(response) {
      for (let i = 0; i < this.pets.length; i++) {
        this.pets[i].photo = response.data.message;
      }
    },

    unlikePet() {
      const url = 'http://localthost:3000/user/pets';
      axios.post(url, id)
        .then(data => {
          return data;
        }).catch(() => {
          console.log('Não foi possivel remover o pet');
        });
    },

    adotePet() {
      this.isComponentModalActive = true;
      // deve abrir uma modal para mim exibindo um formulário para envio do email
    }
  },
};
</script>

<style scoped>

.button.is-danger {
    background-color: red;
    border-color: transparent;
    color: #fff;
}

.ong-pets {
  padding: 10px;
  width: 85vw;
}

.button {
  margin-left: 5px;
}
</style>
