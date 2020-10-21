<template>
  <div class="content-home">
    <div class="content-box">
      <div class="content-animais">
        <div class="titulo">
          <h2>Animais que amei</h2>
        </div>
        <div class="cards">
          <div class="card-animais">
            <img src="../../assets/dog1.jpg" width="180" height="151" />
            <p>Bolinha, 8 anos - macho</p>
            <a href="">Quero ver</a>
          </div>
          <div class="card-animais">
            <img src="../../assets/dog1.jpg" width="180" height="151" />
            <p>Bolinha, 8 anos - macho</p>
            <a href="">Quero ver</a>
          </div>
          <div class="card-animais">
            <img src="../../assets/dog1.jpg" width="180" height="151" />
            <p>Bolinha, 8 anos - macho</p>
            <a href="">Quero ver</a>
          </div>
          <div class="card-animais">
            <img src="../../assets/dog1.jpg" width="180" height="151" />
            <p>Bolinha, 8 anos - macho</p>
            <a href="">Quero ver</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentUsuario",
};
</script>

<style>
.content-home {
  grid-area: content;
  display: flex;
  justify-content: center;
}
.content-box {
  display: flex;
  flex-direction: column;
  border: solid 1px grey;
  padding: 30px;
  width: 80%;
  margin-top: 30px;
}
</style>