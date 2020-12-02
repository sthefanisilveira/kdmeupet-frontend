<template>
  <div class="card-ong">
    <div class="container-ong"
      v-for="ong in ongs"
      :key="ong.id">
      <img
        src="../../assets/ong-logo.png"
        :alt="ong.name" />
      <div class="card-body">
        <h1> {{ ong.name }} </h1>
        <p>
          ONG destinada a receber e abrigar animais em situação de abandono e animais de rua.
        </p>
      </div>
      <div class="card-botao">
        <div class="about-action">
          <button class="button is-link" @click="goToInfo">
            Quero ajudar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ComponenteCardOng",
  data() {
    return {
      isComponentModalActive: false,
      ongs: [],
    };
  },
  created() {
    this.getOngs();
  },
  methods: {
    goToInfo() {
      this.$router.push("/info-page-ong");
    },
    getOngs() {
      const url = '/api/ong';
     	this.$http.get(url).then(response => {
        console.log(response.data);
         this.ongs = response.data
      }).catch(error => {
          console.log(error);
      });
    },

    // setImages(response) {
    //   for (let i = 0; i < this.ongs.length; i++) {
    //     this.ongs[i].photo = response.data.message;
    //   }
    // },
  },
};
</script>

<style>

.card-ong {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-ong {
  display: flex;
  border: solid 1px grey;
  width: 70vw;
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
}

.card-botao {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
</style>
