<template>
  <div class="about container">
    <ul class="about__list">
      <li class="about__item" v-for="item in list">
        <h2 class="about__title subtitle-strong">
          {{ item.about_list_title }}
        </h2>
        <div class="about__text" v-html="item.about_list_text">
        </div>
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
  .about__list {
    list-style: none;
  }

  .about__item {
    margin-bottom: 60px;
  }

  .about__title {
    text-align: center;
    margin-bottom: 30px;
  }

  .about__text {
    line-height: 23px;
    letter-spacing: 0.19px;
  }

  @media screen and (min-width: 768px) {

    .about {
      max-width: 900px;
      margin: auto;
    }

    .about__item {
      display: flex;
    }

    .about__title {
      width: 164px;
      min-width: 164px;
      text-align: left;
    }
  }
</style>
