<template>
  <div>
    <header>
      <div class="header-brand">
        <a href="/"> <img src="../assets/logo.png" alt="logo KdMeuPet" /></a>
      </div>
        <HeaderLogin v-if="userLoggedIn" />
        <HeaderLogout v-else />
    </header>
  </div>
</template>

<script>
import HeaderLogin from "@/components/HeaderLogin.vue";
import HeaderLogout from "@/components/HeaderLogout.vue";

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
    },
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
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: var(--color-light);
  padding: 0px 50px 0px 50px;
}

.header-brand img {
  width: 60px;
}

.header-menu {
  display: flex;
  justify-content: space-around;
  width: 350px;
}

.header-menu li {
  display: inline;
  color: var(--color-text);
  width: 75px;
}

.header-menu li a {
  color: var(--color-text);
  text-decoration: none;
  padding-left: 10px;
  opacity: 0.8;
}

.header-menu li:hover {
  background: #4ecdc4;
  width: 75px;
  border-radius: 20px 20px 20px 20px;
  /* -webkit-transition: 0.2s ease-in;
  -moz-transition: 0.2s ease-in;
  -o-transition: 0.2s ease-in;
  transition: 0.2s ease-in; */
}

.header-menu li a:hover {
  opacity: 1;
  color: #fff
}
</style>
