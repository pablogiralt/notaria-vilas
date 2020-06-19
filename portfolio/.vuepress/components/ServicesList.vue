<template>
  <div class="services">

    <div class="services__category" v-for="category in services">

      <p v-if="category.category" class="services__category-name">
        {{ category.category.title }}
      </p>
      
      <div 
        v-for="service in category.services" 
        :key="service.title"
        class="services__service"
      >
        <router-link
          :to="service.path"       
          v-if="service.frontmatter.link_service"
          class="services__service-link"
        >
          <h2 class="services__service-name">
            {{ service.frontmatter.title }}     
          </h2>
        </router-link>

        <span class="services__service" v-else>
          <h2 class="services__service-name services__service-name--nolink">
            {{ service.frontmatter.title }}
          </h2>
        </span>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      services() {
        let servicesByType = [];

        const pages = this.$site.pages
        
        // get the services order from the orden-servicios.md page
        const servicesOrderPage = pages.filter(x => x.path == '/orden-servicios.html')
        const servicesOrder = servicesOrderPage.length && servicesOrderPage[0].frontmatter.order_servicios

        // remove a part of the path to match the relativePath of the services
        for (let i = 0; i < servicesOrder.length; i++) {
          servicesOrder[i] = servicesOrder[i].replace('portfolio/', '')
        }

        const services = pages.filter(x => x.path.startsWith('/servicios/') && !x.frontmatter.services_index)
        // We order the services by order defined in servicesOrder
        services.sort((a, b) => { 
          const aPos = servicesOrder.indexOf(a.relativePath)
          const aVal = aPos >= 0 ? aPos : 99999
          const bPos = servicesOrder.indexOf(b.relativePath)
          const bVal = bPos >= 0 ? bPos : 99999
          return aVal - bVal
        });

        // Group services by category
        services.forEach(service => {
            
            if (!service.frontmatter.service_type || service.frontmatter.service_type.length == 0) {
              service.frontmatter.service_type = 'portfolio/tipo-de-servicio/otros.md';
            }
        
            if (!servicesByType[service.frontmatter.service_type] || !servicesByType[service.frontmatter.service_type]['category']) {
              const servicetypeSlug = service.frontmatter.service_type.replace('portfolio/', '').toLowerCase()
              const category = this.$site.pages.filter(x => x.relativePath.toLowerCase() == servicetypeSlug);
              if (category && category[0]) {
                servicesByType[service.frontmatter.service_type] = {
                  'category' : category[0]
                };
              }
            } 
            
            // Did not find the category
            if (!servicesByType[service.frontmatter.service_type]) {
              return
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
        })

        orderedServices.sort((a, b) => {
          return a.category.frontmatter.order - b.category.frontmatter.order
        });
        return orderedServices;
      }
    }
  }
</script>

<style scoped>

  .services {
    padding-bottom: 20px;
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
     text-decoration: none;
  }

  .services__service-name 
  {
    font-weight: 400;
  }

  .services__service-name--nolink 
  {
    color: var(--color-grey-light)
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
