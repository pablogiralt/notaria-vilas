<template>
  <div class="title-block">
    <h1 v-if="pretitle" class="title-block__pretitle subtitle" v-html="pretitle" />
    <h2 v-if="title" class="title-block__title" v-html="title" />
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

  .title-block {
    text-align: center;
    padding: 0 16px;
    max-width: 774px;
    margin: 0 auto 60px;
    padding-top: 40px;
  }

  .title-block__pretitle {
    font-size: 16px;
    margin-bottom: 23px;
  }

  .title-block__title {
    font-size: 32px;
    line-height: 1;
    font-family: var(--headings-font-family);
    font-weight: bold;
  }

  @media screen and (min-width: 992px) {
    .title-block__title {
      font-size: 42px;
    }  
  }
</style>
