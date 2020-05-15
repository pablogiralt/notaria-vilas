<template>
  <div class="about-list">

    <h1 v-if="pretitle" class="pretitle" v-html="pretitle" />
    <h2 v-if="title" class="title" v-html="title" />

    <router-link
      :to="post.path"
      tag="div"
      v-for="post in posts"
      :key="post.title"
      class="post"
    >

      <div class="info">
        <h2>{{ post.frontmatter.title }}</h2>
        <span v-if="post.frontmatter.description">{{ post.frontmatter.description }}</span>
      </div>

    </router-link>

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
