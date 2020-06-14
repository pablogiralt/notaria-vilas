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
  // todo - probar https://alligator.io/vuejs/hide-no-ssr/ en vex de clientOnly
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    components: {
      Carousel,
      Slide
    }
  }
</script>

<style>

</style>
