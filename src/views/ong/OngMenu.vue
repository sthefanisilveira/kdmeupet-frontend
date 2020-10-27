<template>
  <aside class="ong-menu">
    <!-- Home, pets, recursos, editar perfil, notificações -->
    <ul class="menu-itens">
      <li><a href="/">Home</a></li>
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
.ong-menu {
  width: 250px;
  height: 100vh;
  background-color: #4ECDC4;
}

.ong-menu .menu-itens {
  padding: 10px;
}
  .menu-lateral {
    padding: 30px;
    grid-area: menu;
    background-color: #4ECDC4;
    opacity: 0.5;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
  }

  .menu-itens {
    list-style: none;
  }

  .menu-itens li a {
    color: var(--color-text);
    text-decoration: none;
    opacity: 1.0;
  }
</style>
