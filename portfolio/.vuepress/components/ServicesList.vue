<template>
  <div class="services">

    <div class=""
      v-for="(category, categoryName) in services.categories">

      {{ categoryName }}
      <router-link
        :to="post.path"
        v-for="post in services.servicesByType[categoryName]"
        :key="post.title"
        class="post"
      >
          <h2>{{ post.frontmatter.title }}</h2>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      services() {
        let servicesByType = [];
       
        const services = this.$site.pages
          .filter(x => x.path.startsWith('/servicios/') && !x.frontmatter.services_index)
          .forEach(service => {

            if (!service.frontmatter.service_type) {
              service.frontmatter.service_type = 'Otros';
            }

            if (!servicesByType[service.frontmatter.service_type] || !servicesByType[service.frontmatter.service_type]['category']) {
              const category = this.$site.pages.filter(x => x.relativePath == service.frontmatter.service_type.replace('portfolio/', ''));
              servicesByType[service.frontmatter.service_type] = {
                'category' : category[0]
              };
            } 

            if (servicesByType[service.frontmatter.service_type]['services']) {
              servicesByType[service.frontmatter.service_type]['services'].push(service);
            } else {
              servicesByType[service.frontmatter.service_type]['services'] = [service];
            }
        
          });

        let orderedServices = [];
        
        Object.entries(servicesByType).forEach(category => {
          orderedServices.push(category[1]);
        });

        orderedServices.sort((a, b) => {
          return a.category.frontmatter.order - b.category.frontmatter.order
        });

        return servicesByType;
      }
    }
  }
</script>

<style scoped>
</style>
