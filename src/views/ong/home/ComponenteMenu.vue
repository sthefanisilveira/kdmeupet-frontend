<template>
  <aside class="menu-lateral">
    <!-- Home, pets, recursos, editar perfil, notificações -->
    <ul class="menu-itens">
      <li><a href="/">Home</a></li>
      <li><a href="/">Pets</a></li>
      <li><a href="/">Recursos</a></li>
      <li><a href="/">Editar perfil</a></li>
      <li><a href="/">Notificações</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'ComponenteMenu',
}
</script>

<style>
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