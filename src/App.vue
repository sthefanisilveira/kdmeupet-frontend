<template>
  <div id="app">
    <Header />
      <router-view/>
    <Footer />

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};

</script>

<style>
  * {
    margin: 0;
  }
</style>
