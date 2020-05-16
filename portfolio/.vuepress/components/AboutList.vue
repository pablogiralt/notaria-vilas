<template>
  <div class="about">
    <ul class="about__list">
      <li class="about__list-item" v-for="item in list">
        <h2>{{ item.about_list_title }}</h2>
        <div>{{ item.about_list_text }}</div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    props: {
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
</style>
