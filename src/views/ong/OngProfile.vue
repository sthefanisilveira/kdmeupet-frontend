<template>
  <div class="ong-admin">
    <OngMenu />
    <OngForm />
  </div>
</template>

<script>
import OngMenu from './OngMenu.vue';
import OngForm from './OngForm.vue';

export default {
  name: 'OngProfile',
  components: {
    OngMenu,
    OngForm,
  },
}
</script>

<style>
.ong-admin {
  display: flex;
}

</style>
