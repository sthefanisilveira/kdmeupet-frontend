<template>
  <aside class="user-menuLateral">
    <div class="profile-thumbs">
      <img
        src="https://randomuser.me/api/portraits/women/24.jpg"
        alt="">
      <span> Olá, Sarah!</span>
    </div>
    <!-- Home, pets, recursos, editar perfil, notificações -->
    <ul class="user-itens">
      <!-- <li v-if="isProfile"><a href="/usuario-perfil"> Meu Perfil </a></li>
      <li v-if="isPetLove">Pets Favoritos</li> -->
      <li><a href="/usuario-perfil">Meu perfil</a></li>
      <li><a href="/petlover">Pets favoritos</a></li>
      <li><a href="/user-notificacoes">Notificações</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'UserMenu',
  // data() {
  //   return {
  //     isProfile: true,
  //     isPetLove: true,
  //   }
  // }
}
</script>

<style>
.user-menuLateral {
  width: 250px;
  min-height: 100vh;
  background-color: #272B33;
  color: #eee;
  padding: 30px;
}

.user-itens li a {
  color: #eee
}

.profile-thumbs {
  display: flex;
  padding: 10px 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee
}

.profile-thumbs img {
  border-radius: 50%;
  width: 50px;
  border: 2px solid #7957d5;
  margin-right: 10px;
}

.profile-thumbs span {
  font-weight: bold;
  font-size: 1em;
  display: flex;
  align-items: center;
}


</style>
