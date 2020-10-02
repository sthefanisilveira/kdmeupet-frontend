<!-- Nome antetior: AboutSection -->
<template>
  <div class="about">
    <div class="container">
    <p>Você quer conhecer os pets disponíveis para adoção da sua região mas não sabe onde procurar? <br> Nossa comunidade te ajudará nessa busca!</p>
    <div class="about-action">
      <button @click="goToRegister">Cadastre-se</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponenteHero',
  methods: {
    goToRegister() {
      this.$router.push('/cadastro')
    }
  }

}
</script>

<style>
.about {
  background: #eee;
  height: 40vh;
  width: 100vw;
}

.about .container {
  padding-top: 30px;
}

.about .container p {
  font-size: 20px;
}

.about-action {
  display: flex;
  justify-content: center;
}

.about button {
  background: #4ECDC4;
  color: #fff;
  width: 220px;
  height: 40px;
  border-radius: 20px;
}

.about button:hover {
  background: #DADAD9;
  color: var(--color-text);
  width: 220px;
  height: 40px;
  border-radius: 20px;
}

</style>
