<template>
  <div class="adote-page">
    <div class="adote-title">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <h1>Animais para adoção</h1>
      </div>
    </div>
    </div>
    <Pesquisa />
    <Card />
  </div>
</template>

<script>
import Pesquisa from "./ComponentePesquisa.vue";
import Card from "./ComponenteCard.vue";

export default {
  name: "Ong",
  components: {
    Pesquisa,
    Card,
  },
};
</script>

<style>
.adote-page {
  padding-top: 30px;
}

.adote-title h1 {
  text-align: center;
}
</style>
