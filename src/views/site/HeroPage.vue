<template>
  <div class="hero">
    <Cover />
    <About />

  </div>
</template>

<script>
import Cover from './CoverSection.vue';
import About from './AboutSection.vue';

    export default {
        name: 'Hero',
        components: {
          Cover,
          About,
        }
    };
</script>
