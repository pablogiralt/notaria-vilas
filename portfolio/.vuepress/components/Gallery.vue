<template>
  <div class="gallery wrapper__inner">
    <div class="gallery__inner">
      <carousel v-if="slides && slides.length" :per-page="1" :perPageCustom="[[768, 2], [992, 3]]" :navigationEnabled="true">
        <slide v-for="slide in slides">
          <img :srcset="slide" >
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
  // todo - probar https://alligator.io/vuejs/hide-no-ssr/ en vex de clientOnly
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    props: {
      slides: {
        type: Array,
        required: false
      }
    },
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style>
  .VueCarousel-dot-container {
    margin-top: -20px !important;
  }
</style>

<style scoped>
  .gallery {
    overflow: hidden;
  }

  .gallery__inner {
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 80px;
  }

  .VueCarousel-slide {
    padding: 10px;
  }
</style>
