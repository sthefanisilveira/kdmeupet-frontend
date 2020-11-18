<template>
  <div class="ong-admin">
    <OngMenu @set-link="changeComponent"/>
    <keep-alive>
      <component :is="itemAtivo"> </component>
    </keep-alive>
    <!-- <OngForm /> -->
  </div>
</template>

<script>
import OngMenu from './OngMenu.vue';
// import OngForm from './OngForm.vue';
import OngProfile from './OngProfile.vue';
import OngPets from './OngPets.vue';
import OngResources from './OngResources.vue';
import OngNotifications from './OngNotifications.vue';

export default {
  name: 'OngPage',
  components: {
    OngMenu,
    // OngForm,
    OngProfile,
    OngPets,
    OngResources,
    OngNotifications,
  },
  data() {
    return {
      itemAtivo: 'OngProfile',
    };
  },
  methods: {
    changeComponent(link) {
      if (link === 'profile') {
        this.itemAtivo = 'OngProfile';
      } else if (link === 'pets') {
        this.itemAtivo = 'OngPets';
      }else if (link === 'resources') {
        this.itemAtivo = 'OngResources';
      } else {
        this.itemAtivo = 'OngNotifications';
      }
    },
  },
}
</script>

<style>
.ong-admin {
  display: flex;
}

</style>
