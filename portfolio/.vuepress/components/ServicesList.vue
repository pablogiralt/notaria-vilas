<template>
  <div class="services">

    <div class="services__category" v-for="category in services">

      <p v-if="category.category" class="services__category-name">
        {{ category.category.title }}
      </p>

      <router-link
        :to="service.path"
        v-for="service in category.services"
        :key="service.title"
        class="services__service"
      >
          <h2 class="services__service-link">
            {{ service.frontmatter.title }}
          </h2>
      </router-link>

    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      services() {
        let servicesByType = {};

        //console.log( this.$site.pages
        //  .filter(x => x.path.startsWith('/servicios/') && !x.frontmatter.services_index))
        const services = this.$site.pages
          .filter(x => x.path.startsWith('/servicios/') && !x.frontmatter.services_index)
          .forEach(service => {
            
            if (!service.frontmatter.service_type || service.frontmatter.service_type.length == 0) {
              service.frontmatter.service_type = 'portfolio/tipo-de-servicio/otros.md';
            }
        
            if (!servicesByType[service.frontmatter.service_type] || !servicesByType[service.frontmatter.service_type]['category']) {
              // console.log(service.frontmatter.service_type);
              console.log(service.frontmatter.service_type.replace('portfolio/', ''))
              const category = this.$site.pages.filter(x => x.relativePath == service.frontmatter.service_type.replace('portfolio/', ''));
              console.log(category)
              console.log(this.$site.pages.filter(x => x.relativePath == service.frontmatter.service_type.replace('portfolio/', '')))
              if (category) {
                servicesByType[service.frontmatter.service_type] = {
                  'category' : category[0]
                };
              }
            } 

            if (servicesByType[service.frontmatter.service_type]['services']) {
              servicesByType[service.frontmatter.service_type]['services'].push(service);
            } else {
              servicesByType[service.frontmatter.service_type]['services'] = [service];
            }
        
          });

        console.log(servicesByType);
        
        let orderedServices = [];
        
        Object.entries(servicesByType).forEach(category => {
          // console.log(category)
          orderedServices.push(category[1]);
        });

        //orderedServices.sort((a, b) => {
        //  return a.category.frontmatter.order - b.category.frontmatter.order
        //});

        return orderedServices;
      }
    }
  }
</script>

<style scoped>

  .services {
    padding: 40px 0 80px;
  }

  .services__category-name {
    font-size: 20px;
    font-weight: 900;
    color: var(--color-blue);
  }

  .services__category {
    padding-bottom: 40px;
  }

  .services__service {
    text-decoration: none;
  }

  .services__service-link {
    font-weight: 400;
  }


  @media screen and (min-width: 768px) {
    .services {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-left: -40px;
      margin-right: -40px;
    }

    .services__category {
      width: 50%;
      padding: 0 40px 40px;
    }
  }

  @media screen and (min-width: 1100px) {
     .services__category {
      width: 25%;
    }
  }
</style>
