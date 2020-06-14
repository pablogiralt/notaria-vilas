<template>
  <div class="test">

      <carousel :per-page="1" :mouse-drag="false">
        <slide>
          Slide 1 Content
        </slide>
        <slide>
          Slide 2 Content
        </slide>
      </carousel>
      
  </div>
</template>

<script>
  
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style scoped>
</style>
