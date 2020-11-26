<template>
  <div class="info-page">
    <div class="adote-title">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <h1>Mais informações</h1>
      </div>
    </div>
    </div>
    <Animal />
    <Ong />
    <Animais />
  </div>
</template>

<script>
import Animal from './ComponenteAnimal';
import Ong from './ComponenteOng';
import Animais from './ComponenteAnimaisOng';

export default {
  name: "InfoPage",
  components: {
    Animal,
    Ong,
    Animais,
  },
  data(){
    return {
      animals: [

      ]
    };
  },
  created() {
    this.getAnimals();
  },
  methods: {
    getAnimals() {
      if(!this.$store.state.token) {
        this.$router.push({ name: login });
      };
    },
  },
};
</script>

<style>
.info-page {
  padding-top: 30px;
}
</style>
