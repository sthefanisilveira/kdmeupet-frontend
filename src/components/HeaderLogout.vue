<template>
  <div>
    <ul class="header-menu">
      <li><a href="/adote">Adote</a></li>
      <li><a href="/ongs-listagem">ONGs</a></li>
      <li><a href="/cadastro">Entrar</a></li>
      <li><a href="/petlover">Minha Conta</a></li>
      <li><a href="#" @click.prevent="makeLogout">Sair</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeaderLogout",
  methods: {
    makeLogout() {
        localStorage.removeItem('token');
        this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style>
</style>