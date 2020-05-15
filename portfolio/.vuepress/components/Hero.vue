<template>
  <div>
    <h1 v-if="pretitle" class="pretitle" v-html="pretitle" />
    <h2 v-if="title" class="title" v-html="title" />
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
  }
}
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: calc(21px + (48 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 300;
    line-height: 1.25;
    letter-spacing: 0.1rem;
    width: 800px;
    max-width: 100%;
    margin: 18vw auto 7vw auto;
  }

  @media screen and (min-width: 600px) {
    .title {
      margin: 12vw auto 7vw auto;
    }
  }

</style>
