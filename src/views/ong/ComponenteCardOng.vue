<template>
  <div class="card-ong">
    <div class="container-ong"
      v-for="ong in ongs"
      :key="ong.id">
      <img 
        :src="ong.photo"
        :alt="ong.name" 
        width="244" 
        height="151" />
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
      ongs: [
        {
          id: 1,
          photo: '',
          name: 'Abrigo Animal',
        },
        {
          id: 2,
          photo: '',
          name: 'Quatro Patas',
        },
        {
          id: 3,
          photo: '',
          name: 'São Francisco',
        },
        {
          id: 4,
          photo: '',
          name: 'CBEA Joinville',
        },
      ],
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
      // this.$apiUrl.get('/ong')
      // .then(response => {
      //   this.ongs = response.data;
      // }).catch(erro => {
      //   console.log(erro);
      // })


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
      for (let i = 0; i < this.ongs.length; i++) {
        this.ongs[i].photo = response.data.message;
      }
    },
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