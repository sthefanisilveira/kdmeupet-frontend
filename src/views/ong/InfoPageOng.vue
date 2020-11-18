<template>
  <div class="info-page-ong">
    <div class="adote-title">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <h1>Mais informações</h1>
      </div>
    </div>
    </div>
    
    <Ong />
    <Apoio />
    <Animais />
  </div>
</template>

<script>
import Ong from "./ComponenteOng";
import Apoio from "./ComponenteApoio";
import Animais from "../animais/ComponenteAnimaisOng";

export default {
  name: "InfoPageVue",
  components: {
    Ong,
    Apoio,
    Animais,
  },
};
</script>

<style>
.info-page-ong {
  padding-top: 30px;
}
</style>