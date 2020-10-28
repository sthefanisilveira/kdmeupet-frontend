<template>
  <aside class="user-menuLateral">
    <!-- Home, pets, recursos, editar perfil, notificações -->
    <ul class="user-itens">
      <li><a href="/">Pets que amei</a></li>
      <li><a href="/">Perfil</a></li>
      <li><a href="/">Notificações</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'UserMenu',
}
</script>

<style>
.user-menuLateral {
  width: 250px;
  height: 100vh;
  background-color: #4ECDC4;
  padding: 30px;
}

.user-itens li a {
  color: var(--color-text);
}

</style>
