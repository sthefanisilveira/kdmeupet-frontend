<template>
  <div class="adote-page">
    <h1>Animais para adoção</h1>
    <Pesquisa />
    <Card />
  </div>
</template>

<script>
import Pesquisa from './ComponentePesquisa.vue';
import Card from './ComponenteCard.vue';

    export default {
        name: 'Ong',
        components: {
          Pesquisa,
          Card,
        }
    };
</script>

<style>

.adote-page {
  padding-top: 30px;
}

</style>
