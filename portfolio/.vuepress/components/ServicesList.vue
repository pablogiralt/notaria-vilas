<template>
  <div class="services">

    <router-link
      :to="post.path"
      v-for="post in posts"
      :key="post.title"
      class="post"
    >
        <h2>{{ post.frontmatter.title }}</h2>
    </router-link>

  </div>
</template>

<script>
  export default {
    computed: {
      posts() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/servicios/') && !x.frontmatter.services_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>
</style>
