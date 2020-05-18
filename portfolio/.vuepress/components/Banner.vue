<template>
    <div class="banner">
      <a v-if="link" v-bind:href="link" :target="target?target:'_self'">
        <img v-if="image" v-bind:src="image" class="banner__image">
        <h2 v-if="text" class="banner__text" v-html="text"></h2>   
      </a>
      <div v-else>
        <img v-if="image" v-bind:src="image" class="banner__image">
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

  @media screen and (min-width: 768px) {
    .banner__text {
      padding: 0 28px;
    }
  }
</style>
