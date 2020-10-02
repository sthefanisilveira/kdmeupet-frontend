<template>
  <div class="numeros">
    <div class="container-numeros">
      <h1>+ 000 pets adotados</h1>
      <h1>+ 000 ONGs ajudadas</h1>
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
  display: flex;
  justify-content: center;
  background: #eee;
  height: 20vh;
  width: 100vw;
}

.container-numeros {
  display: flex;
  align-items: center;
}
</style>