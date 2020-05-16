<template>
  <div class="banner">
    <img v-if="image" v-bind:src="image" class="banner__image">
    <h2 v-if="text" class="banner__text" v-html="text"></h2>
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
      }
    },
    computed: {
    }
  }
</script>

<style scoped>
</style>
