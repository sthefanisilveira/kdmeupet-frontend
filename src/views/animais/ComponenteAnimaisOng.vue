<template>
  <div class="animais">
    <div class="titulo">
      <h2>Outros animais da ONG Abrigo Animal</h2>
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
</template>

<script>
export default {
  name: "ComponenteAnimaisOng",
};
</script>

<style>
.animais {
  margin-left: 50px;
  margin-right: 50px;
  border: solid 1px grey;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  background: #fafafa;
  padding: 30px;
}

.titulo h2 {
  font-size: 20px;
  text-align: center;
}

.cards {
  display: flex;
  padding: 30px;
  text-align: center;
  justify-content: space-between;
}

.card-animais {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
</style>
