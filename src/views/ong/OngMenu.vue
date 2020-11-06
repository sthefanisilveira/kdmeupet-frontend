<template>
  <aside class="ong-menuLateral">
    <!-- Home, pets, recursos, editar perfil, notificações -->
    <ul class="ong-itens">
      <li><a href="/">Pets</a></li>
      <li><a href="/">Recursos</a></li>
      <li><a href="/">Perfil</a></li>
      <li><a href="/">Notificações</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'OngMenu',
}
</script>

<style>
.ong-menuLateral {
  width: 250px;
  height: 100vh;
  background-color: #4ECDC4;
  padding: 30px;
}

.ong-itens li a {
  color: var(--color-text);
}
</style>
