<template>
  <div class="user-admin">
    <router-view></router-view>
    <UserMenu />
    <UserProfile  v-if="perfil"/>
    <UserPetsLove v-if="love" />
  </div>
</template>

<script>
import UserMenu from './UserMenu';
import UserProfile from './UserProfile.vue';
import UserPetsLove from './UserPetsLove';

export default {
  name: 'UserPage',
  components: {
    UserMenu,
    UserPetsLove,
    UserProfile,
  },
  data() {
    return {
      perfil: false,
      love: true,
    }
  }
}
</script>

<style>
.user-admin {
  display: flex;
}

h1 {
  color: black;
  font-size: 1.5em;
}

</style>
