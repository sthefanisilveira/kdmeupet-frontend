<template>
  <div class="sobre">
    <div class="sobre-container">
      <h1>Veja como podemos ajudar:</h1>
    </div>

    <div class="sobre-container-itens">

      <div class="Pesquise">
        <img src="../../assets/lupa.png">
        <h2>Pesquise</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui.</p>
      </div>

      <div class="Compartilhe">
        <img src="../../assets/coracao.png">
        <h2>Adote</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui.</p>
      </div>

      <div class="Encontre">
        <img src="../../assets/doacao.png">
        <h2>Ajude</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponenteSobre',
}
</script>

<style>
.sobre {
  width: 100vw;
  height: 50vh;
}

.sobre-container {
  padding-top: 30px;
}

.sobre-container-itens {
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.sobre-container-itens p {
  font-size: 14px;
}
</style>