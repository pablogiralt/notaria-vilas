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
        let servicesByCategory = [];
        const services = this.$site.pages
          .filter(x => x.path.startsWith('/servicios/') && !x.frontmatter.services_index)
          .sort()
          .forEach(service => {
            // console.log(service.frontmatter.service_type);
            if (!service.frontmatter.service_type) {
              service.frontmatter.service_type = 'Otros';
            }
            if (servicesByCategory[service.frontmatter.service_type]) {
              servicesByCategory[service.frontmatter.service_type].push(service);
            } else {
              servicesByCategory[service.frontmatter.service_type] = [service];
            }
            
            // servicesByCategory
          });
          console.log(servicesByCategory);
        return this.$site.pages
          .filter(x => x.path.startsWith('/servicios/') && !x.frontmatter.services_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>
</style>
