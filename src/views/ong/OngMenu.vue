<template>
  <aside class="ong-menuLateral">
    <div class="profile-thumbs">
      <img
        src="https://randomuser.me/api/portraits/lego/6.jpg"
        alt="">
      <span> Olá, Abrigo Animal!</span>
    </div>
    <ul class="ong-itens">
      <li @click="setUrl('profile')" >
         Meu perfil
      </li>
      <li @click="setUrl('pets')">
          Pets
      </li>
      <li @click="setUrl('resources')">
          Recursos
      </li>
      <li @click="setUrl('notifications')">
          Notificações
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'OngMenu',
  methods: {
    setUrl(itemSelecionado) {
      this.$emit('set-link', itemSelecionado);
    },
  }
};
</script>

<style>
.ong-menuLateral {
  width: 250px;
  min-height: 100vh;
  background-color: #272B33;
  color: #eee;
  padding: 30px;
}

.ong-itens li:hover {
  cursor: pointer;
  background: #7957d5;

}

.ong-itens li a {
  color: #eee;
  cursor: pointer;
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
