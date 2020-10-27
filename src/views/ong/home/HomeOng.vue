<template>
  <div class="home-ong">
    <ContentHome />
    <MenuLateral />
  </div>
</template>

<script>
import ContentHome from "./ContentHome";
import MenuLateral from "./ComponenteMenu";


export default {
  name: 'HomeOng',
  components: {
    ContentHome,
    MenuLateral,
  },
};
</script>

<style>
.home-ong {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 40px;
  grid-template-columns: 250px 1fr;
  grid-template-areas: "menu content";
  background-color: #efefef;
}
</style>