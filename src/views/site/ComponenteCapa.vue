<template>
  <div class="cover">
    <div class="cover-content">
        <h1>Faça parte da nossa comunidade</h1>
        <div class="cover-content__action">
           <button class="botao-padrao" @click="goToLogin">Entrar agora</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Capa',
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.cover {
  background: url('../../assets/dogs-cover.jpeg') no-repeat center;
  opacity: 0.8;
  background-size: cover;
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.cover-content__action {
  
  display: flex;
  justify-content: center;
}

.cover h1 {
  color: #fff;
  text-shadow: 1px 1px #222;
}

.botao-padrao {
  background: #FF6B6B;
  color: #fff;
  width: 220px;
  height: 40px;
  border: none;
  border-radius: 20px;
}

.cover button:hover {
  background: #E63946;
  color: #fff;
  width: 220px;
  height: 40px;
  border-radius: 20px;
}


</style>
