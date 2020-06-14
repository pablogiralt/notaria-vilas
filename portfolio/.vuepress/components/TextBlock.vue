<template>
  <div class="text-block">
      {{ intro }}
  </div>
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
