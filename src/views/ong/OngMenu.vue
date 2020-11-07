<template>
  <aside class="ong-menuLateral">
    <div class="profile-thumbs">
      <img
        src="https://randomuser.me/api/portraits/lego/6.jpg"
        alt="">
      <span> Olá, Abrigo Animal!</span>
    </div>
    <!-- Home, pets, recursos, editar perfil, notificações -->
    <ul class="ong-itens">
      <li><a href="/ong-perfil"> Meu Perfil </a></li>
      <li><a href="/ong-pets"> Pets </a></li>
      <li><a href="/ong-recursos">Recursos</a></li>
      <li><a href="/ong-notificacoes"> Notificações </a></li>
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
  min-height: 100vh;
  background-color: #272B33;
  color: #eee;
  padding: 30px;
}

.ong-itens li a {
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
