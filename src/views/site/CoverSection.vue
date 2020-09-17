<template>
  <div class="cover">
    <div class="cover-content">
        <h1>Faça parte da nossa comunidade</h1>
        <div class="cover-content__action">
           <button @click="goToRegister">Entrar agora.</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cover',
  methods: {
    goToRegister() {
      this.$router.push('/cadastro')
    }
  }
}
</script>

<style>
.cover {
  background: url('../../assets/dogs-cover.jpeg') no-repeat center;
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
  text-shadow: 3px 2px #222;
}

.cover button {
  background: #f1c40f;
  color: #222;
  width: 220px;
  height: 40px;
  border-radius: 20px;
}

.cover button:hover {
  background: #f39c12;
  color: #fff;
  width: 220px;
  height: 40px;
  border-radius: 20px;
}


</style>
