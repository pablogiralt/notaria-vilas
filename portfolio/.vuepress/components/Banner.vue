<template>
    <div class="banner wrapper__inner">
      <div class="banner__inner" :class="banner_class">
        <a class="banner__link" v-if="link" v-bind:href="link" :target="target=='external'?'_blank':'_self'" :rel="target=='external'?'noreferrer noopener':''">
          <picture>
            <source 
              :srcset="image_tablet" 
              media="(min-width:420px) and (max-width: 992px)">
            <source 
              :srcset="image" 
              media="(min-width:992px)">
            <img 
              :alt="image_alt"
              class="banner__image" 
              :src="image_mobile">
          </picture>

          <h2 v-if="text" class="banner__text" v-html="text"></h2>   
        </a>
        <div v-else>
          <picture>
            <source 
              :srcset="image_tablet" 
              media="(min-width:420px) and (max-width: 992px)">
            <source 
              :srcset="image" 
              media="(min-width:992px)">
            <img 
              :alt="image_alt"
              class="banner__image" 
              :src="image_mobile">
          </picture>
          <h2 v-if="text" class="banner__text" v-html="text"></h2>  
        </div>
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
      image_tablet: {
        type: String,
        required: false
      },
      image_alt: {
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
      },
      banner_class: {
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

  .banner__inner {
    height: 0;
    padding-bottom: 80%;
    overflow: hidden;
  }

  .banner__inner--thin {
    padding-bottom: 57%;
  }

  .banner__text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 0 18px;
    text-align: center;
    font-family: var(--headings-font-family);
    font-weight: bold;
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


  @media screen and (min-width: 992px) {
    .banner__inner {
      padding-bottom: 40%;
    }
    .banner__inner--thin {
      padding-bottom: 31.7%;
    }
  }
  
</style>
