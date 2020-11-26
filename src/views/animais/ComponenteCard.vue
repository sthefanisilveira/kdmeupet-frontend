<template>
  <div class="card-dog">
    <div class="container" 
      v-for="pet in pets"
      :key="pet.id">
      <img
        :src="pet.photo"
        :alt="pet.name"
        width="244" 
        height="151" />
      <div class="card-body">
        <h1> {{ pet.name }} </h1>
        <p>
          Eu sou um cachorro muito dócil e adoraria viver em um novo lar
          definitivo. <br />
          Gosto de crianças e amo brincar.
        </p>
      </div>
      <div class="card-date">
        <h3>Estou te esperando há:</h3>
        <p>2 anos</p>
        <div class="about-action">
          <button class="button is-link" @click="goToInfo">
            Me adote
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Card",
  data() {
    return {
      isComponentModalActive: false,
      pets: [
        // {
        //   id: 1,
        //   photo: '',
        //   name: 'Boris',
        // },
        //  {
        //   id: 2,
        //   photo: '',
        //   name: 'Juvenal',
        // },
        // {
        //   id: 3,
        //    photo: '',
        //   name: 'Tobi',
        // },
        // {
        //   id: 4,
        //    photo: '',
        //   name: 'Caxias',
        // },
        // {
        //   id: 5,
        //   photo: '',
        //   name: 'Bernardo',
        // },
        //  {
        //   id: 6,
        //   photo: '',
        //   name: 'James',
        // },
      ],
    };
  },
  created() {
    console.log(this.$store.state.token);
    this.getPetsLove();
  },
  methods: {
    goToInfo() {
      this.$router.push("/info-page");
    },
    getPetsLove() {
      // const url = 'https://dog.ceo/api/breeds/image/random';
      // axios.get(url)
      //   .then(response => {
      //     console.log(response.data.message)
      //      this.setImages(response)
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })
      const url = 'http://localhost:3000/animal';

      axios.defaults.headers.common = {
      ...axios.defaults.headers.common,
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Content-Type": 'application/json',
      };

      axios.get(url, {
        headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Access-Control-Request-Method': 'GET',
                'Accept':'*'
            }
      })
        .then(response => {
          console.log(response.data)
        })
          .catch(error => {
            console.log(error);
          })
    },
    setImages(response) {
      for (let i = 0; i < this.pets.length; i++) {
        this.pets[i].photo = response.data.message;
      }
    },
  },
};
</script>

<style>
.card-dog {
  margin-top: 40px;
  margin-bottom: 40px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  border: solid 1px grey;
  width: 70vw;
  margin-top: 30px;
  margin-bottom: 30px;
}

.card-body {
  padding: 20px;
}

.container h1 {
  text-align: left;
}

.container p {
  text-align: left;
}

.card-date {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>