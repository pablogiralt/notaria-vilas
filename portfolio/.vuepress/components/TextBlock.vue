<template>
  <div v-html="intro" class="text-block"></div>
</template>

<script>
  export default {
    props: {
      intro: {
        type: String,
        required: false
      }
    }
  }
</script>

<style scoped>
</style>
