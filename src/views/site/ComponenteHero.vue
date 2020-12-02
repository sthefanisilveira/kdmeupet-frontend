<!-- Nome antetior: AboutSection -->
<template>
  <div class="about">
    <div class="about-container">
    <p>Você quer conhecer os pets disponíveis para adoção da sua região mas não sabe onde procurar? <br> Nossa comunidade te ajudará nessa busca!</p> <br>
    <div class="about-action">
      <button class="botao-padrao2" @click="goToRegister">Cadastre-se</button>
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
  height: 100%;
  width: 100vw;
  padding: 30px;
}

.about-container {
  text-align: center;
}

.about-container p {
  font-size: 20px;
}
  
.about-action {
  display: flex;
  justify-content: center;
}

.botao-padrao2 {
  background: #4ECDC4;
  color: #fff;
  width: 220px;
  height: 40px;
  border: none;
  border-radius: 20px;
}

.about button:hover {
  background: #2A9D8F;
  color: #fff;
  width: 220px;
  height: 40px;
  border-radius: 20px;
}

</style>
