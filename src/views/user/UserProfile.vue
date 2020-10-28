<template>
  <div class="user-admin">
    <UserMenu />
    <UserPets />
  </div>
</template>

<script>
import UserMenu from './UserMenu';
import UserPets from './UserPets';

export default {
  name: 'UserProfile',
  components: {
    UserMenu,
    UserPets,
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
