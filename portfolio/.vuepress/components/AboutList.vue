<template>
  <div class="about-list">

    <h1 v-if="pretitle" class="pretitle" v-html="pretitle" />
    <h2 v-if="title" class="title" v-html="title" />

    <ul>
      <li v-for="item in list">
        <h2>{{ item.about_list_title }}</h2>
        <div>{{ item.about_list_text }}</div>
      </li>
    </ul>

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
      },
      list: {
        type: Array,
        required: false
      }
    },
    computed: {
      posts() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/about/') && !x.frontmatter.about_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>

  .post {}

  .info {}

  .info h2 {}

  .info span {}

</style>
