<template>
  <div class="user-pets">
    <div class="columns">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><a href="#">Perfil</a></li>
            <li class="is-active"><a href="#" aria-current="page">Pets Love</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <h1>Pets que amei</h1>
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
                src="../../assets/cao.png"
                :alt="pet.name" />
            </figure>
          </div>
          <div class="card-content">
            <div class="content is-centered">
              <h5 class="has-text-centered">
                {{ pet.name }}  | {{pet.age}} anos
              </h5>
              <a  href="/ong:name">{{pet.ong}}</a>
            </div>
          </div>
          <footer class="card-footer">
            <button
              class="button is-primary"
              @click="isComponentModalActive">
              <i class="fas fa-home"></i>
            </button>
            <button
              class="button is-warning"
              @click="unlikePet">
              <i class="fas fa-heart-broken"></i>
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
  name: "UserPetsLove",
  data() {
    return {
      isComponentModalActive: false,
      pets: [
        {
          id: 1,
          photo: '',
          name: 'Boris',
          age: 2,
          ong: 'Abrigo Animal'
        },
         {
          id: 2,
          photo: '',
          name: 'Juvenal',
          age: 1,
          ong: 'Quatro Patas'
        },
        {
          id: 3,
          photo: '',
          name: 'Tobi',
          age: 3,
          ong: 'Ong São Franscisco',
        },
        {
          id: 4,
          photo: '',
          name: 'Caxias',
          age: 5,
          ong: 'Ong São Judas',
        },
        {
          id: 5,
          photo: '',
          name: 'Bernardo',
          age: 8,
          ong: '4 patas',
        },
         {
          id: 6,
          photo: '',
          name: 'James',
          age: 1,
          ong: '4 patas',
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

.user-pets {
  padding: 10px;
  width: 85vw;
}

.card-image {
  display: flex;
  justify-content: center;
}

.card-content {
  text-align: center;
}

.image {
  text-align: center;
  width: 250px;
  height: 100px;
}

.button {
  margin-left: 5px;
}
</style>
