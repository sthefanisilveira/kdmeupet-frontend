<template>
  <div class="home-usuario">
    <MenuLateral />
    <ContentUsuario />
  </div>
</template>

<script>
import MenuLateral from "../ong/home/ComponenteMenu";
import ContentUsuario from "./ContentUsuario";

export default {
  name: 'HomeUsuario',
  components: {
    MenuLateral,
    ContentUsuario,
  },
};
</script>

<style>
.home-usuario {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 40px;
  grid-template-columns: 250px 1fr;
  grid-template-areas: "menu content";
  background-color: #efefef;
}
</style>