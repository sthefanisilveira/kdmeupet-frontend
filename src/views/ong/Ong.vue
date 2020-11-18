<template>
  <div class="ong-page">
    <div class="ong-title">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <h1>ONGs cadastradas</h1>
      </div>
    </div>
    </div>
    <Pesquisa />
    <Card />
  </div>
</template>

<script>
import Pesquisa from "./ComponentePesquisaOng";
import Card from "./ComponenteCardOng";

export default {
  name: "Ong",
  components: {
    Pesquisa,
    Card,
  },
};
</script>

<style>
.ong-page {
  padding: 30px;
}

.ong-title h1 {
  text-align: center;
}
</style>
