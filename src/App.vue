<template>
  <div id="app">
    <Header />
      <router-view/>
    <Footer />
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

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
    color: #333;
  }
</style>
