<template>
  <div class="card-dog">
    <div class="container" 
      v-for="pet in pets"
      :key="pet.id">
      <img
        src="../../assets/cao-mini.png"
        :alt="pet.name" />
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
      pets: [],
    };
  },
  created() {
    this.getPetsLove();
  },
  methods: {
    goToInfo() {
      this.$router.push("/info-page");
    },
    getPetsLove() {
      const url = '/api/animal';
     	this.$http.get(url).then(response => {
        console.log(response.data);
         this.pets = response.data
      }).catch(error => {
          console.log(error);
      });
    },
    // setImages(response) {
    //   for (let i = 0; i < this.pets.length; i++) {
    //     this.pets[i].photo = response.data.message;
    //   }
    // },
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
  text-align: center;
}
</style>