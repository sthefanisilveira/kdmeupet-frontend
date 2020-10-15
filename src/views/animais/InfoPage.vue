<template>
  <div class="info-page">
    <h1>Mais informações</h1>
    <Animal />
    <Ong />
    <Animais />
  </div>
</template>

<script>
import Animal from "./ComponenteAnimal";
import Ong from "./ComponenteOng";
import Animais from "./ComponenteAnimaisOng";

export default {
  name: "InfoPage",
  components: {
    Animal,
    Ong,
    Animais,
  },
};
</script>

<style>
.info-page {
  padding-top: 30px;
}
</style>
