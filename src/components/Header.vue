<template>
  <div>
    <header>
      <div class="header-brand">
        <a href="/"> <img src="../assets/logo.png" alt="logo KdMeuPet" /></a>
      </div>
      <HeaderLogin v-if="userLoggedIn"/>
      <HeaderLogout v-else/>
    </header>
  </div>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin.vue';
import HeaderLogout from '@/components/HeaderLogout.vue';

export default {
  name: "Header",
  components: {
    HeaderLogin,
    HeaderLogout,
  },
  computed: {
    userLoggedIn() {
      console.log(this.$store.state.user.name);
      return Boolean(this.$store.state.token);
    }
  },
};
</script>

<style>
:root {
  --color-text: #292f36;
  --color-light: #e5e9ec;
}

header {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: var(--color-light);
  padding: 0px 50px 0px 50px;
  /* border-bottom: 1px solid #292F36; */
}

.header-brand {
  display: flex;
  color: var(--color-text);
}

.header-brand a {
  text-decoration: none;
  color: var(--color-text);
}

.header-menu {
  display: flex;
  list-style: none;
}

.header-menu li {
  display: inline;
  color: var(--color-text);
}

.header-menu li:hover {
  background-color: #dadad9;
  border-radius: 20px 20px 20px 20px;
  -webkit-transition: 0.5s ease-in;
  -moz-transition: 0.5s ease-in;
  -o-transition: 0.5s ease-in;
  transition: 0.5s ease-in;
}

.header-menu li a {
  color: var(--color-text);
  text-decoration: none;
  padding-left: 10px;
  opacity: 0.8;
}

.header-menu li a:hover {
  opacity: 1;
  width: 30px;
  color: #ff6b6b;
}
</style>
