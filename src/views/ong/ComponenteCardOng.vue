<template>
  <div class="card-ong">
    <div class="container-ong">
      <img src="../../assets/ong.jpg" width="244" height="151" />
      <div class="card-body">
        <h1>Abrigo Animal Joinville</h1>
        <p>
          ONG destinada a receber e abrigar animais em situação de abandono e animais de rua.
        </p>
      </div>
      <div class="card-botao">
        <div class="about-action">
          <button @click="goToInfo">Quero ajudar</button>
        </div>
      </div>
    </div>
    <div class="container-ong">
      <img src="../../assets/ong.jpg" width="244" height="151" />
      <div class="card-body">
        <h1>Abrigo Animal Joinville</h1>
        <p>
          ONG destinada a receber e abrigar animais em situação de abandono e animais de rua.
        </p>
      </div>
      <div class="card-botao">
        <div class="about-action">
          <button @click="goToInfo">Quero ajudar</button>
        </div>
      </div>
    </div>
    <div class="container-ong">
      <img src="../../assets/ong.jpg" width="244" height="151" />
      <div class="card-body">
        <h1>Abrigo Animal Joinville</h1>
        <p>
          ONG destinada a receber e abrigar animais em situação de abandono e animais de rua.
        </p>
      </div>
      <div class="card-botao">
        <div class="about-action">
          <button @click="goToInfo">Quero ajudar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponenteCardOng",
  methods: {
    goToInfo() {
      this.$router.push("/info-page-ong");
    },
  },
};
</script>

<style>

.card-ong {
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-ong {
  display: flex;
  border: solid 1px grey;
  width: 70vw;
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
}

.card-botao {
  display: flex;
  align-items: center;
  margin-right: 30px;
}
</style>