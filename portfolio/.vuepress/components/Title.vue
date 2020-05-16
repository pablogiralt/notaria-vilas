<template>
  <div class="title">
    <h1 v-if="pretitle" class="title__pretitle" v-html="pretitle" />
    <h2 v-if="title" class="title__title" v-html="title" />
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: false
      },
      pretitle: {
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
