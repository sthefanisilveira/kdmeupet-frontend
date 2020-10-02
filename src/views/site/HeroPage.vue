<template>
  <div class="hero">
    <Cover />
    <About />
    <Sobre />
    <Numeros />
  </div>
</template>

<script>
import Cover from './ComponenteCapa.vue';
import About from './ComponenteHero.vue';
import Sobre from './ComponenteSobre.vue';
import Numeros from './ComponenteNumeros.vue';

    export default {
        name: 'Hero',
        components: {
          Cover,
          About,
          Sobre,
          Numeros,
        }
    };
</script>
