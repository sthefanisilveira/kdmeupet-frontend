<template>
  <div class="numeros">
    <div class="container-numeros">
      <h1>+ 30 pets adotados</h1>
    </div>
    <div class="container-numeros">
      <h1>+ 10 ONGs ajudadas</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponenteNumeros',
}
</script>

<style>
.numeros {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  background: #eee;
}

</style>