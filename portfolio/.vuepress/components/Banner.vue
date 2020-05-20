<template>
    <div class="banner">
      <a class="banner__link" v-if="link" v-bind:href="link" :target="target?target:'_self'">
        <img v-if="image" v-bind:src="image" class="banner__image hidden-mobile">
        <img v-if="image_mobile" v-bind:src="image_mobile" class="banner__image hidden-desktop">
        <h2 v-if="text" class="banner__text" v-html="text"></h2>   
      </a>
      <div v-else>
        <img v-if="image" v-bind:src="image" class="banner__image hidden-mobile">
        <img v-if="image_mobile" v-bind:src="image_mobile" class="banner__image hidden-desktop">
        <h2 v-if="text" class="banner__text" v-html="text"></h2>  
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        required: false
      },
      image_mobile: {
        type: String,
        required: false
      },
      text: {
        type: String,
        required: false
      },
      link: {
        type: String,
        required: false
      },
      target: {
        type: String,
        required: false
      }
    },
    computed: {
    }
  }
</script>

<style scoped>
  .banner {
    position: relative;
    z-index: 2;
    line-height: 0;
  }
  .banner__text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 0 18px;
    text-align: center;
    font-family: var(--headings-font-family);
    font-size: 32px;
    letter-spacing: 0.38px;
    color: white;
    line-height: 1;
  }
  .banner__link {
    display: block;
    line-height: 0;
  }

  @media screen and (min-width: 768px) {
    .banner__text {
      padding: 0 28px;
    }
  }
</style>
