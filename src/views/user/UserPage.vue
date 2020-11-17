<template>
  <div class="user-admin">
    <UserMenu @set-link="changeComponent"/>
    <keep-alive>
      <component :is="itemAtivo"> </component>
    </keep-alive>
   </div>
</template>

<script>
import UserMenu from './UserMenu';
import UserProfile from './UserProfile.vue';
import UserPetsLove from './UserPetsLove';
import UserNotifications from './UserNotifications';

export default {
  name: 'UserPage',
  components: {
    UserMenu,
    UserPetsLove,
    UserProfile,
    UserNotifications,
  },
  data() {
    return {
      itemAtivo: 'UserProfile',
    };
  },
  methods: {
    changeComponent(link) {
      if (link === 'profile') {
        this.itemAtivo = 'UserProfile';
      } else if (link === 'petLover') {
        this.itemAtivo = 'UserPetsLove';
      } else {
        this.itemAtivo = 'UserNotifications';
      }
    },
  },
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
