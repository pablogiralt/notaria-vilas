<template>
  <div class="contact">
    <h2>Dirección y contacto</h2>
    <div>
      <p>
        {{ address.street }}<br>
        {{ address.line2 }}
      </p>

      <p>
        Email | {{ contact.email }}<br>
        Teléfono | <span v-html="contact.phones"></span><br>
        Fax | {{ contact.fax }}
      </p>

      <p>
        <ul v-if="transports">
          <li v-for="transport in transports">
            {{ transport.transport_label }} | {{ transport.transport_text }}
          </li>
        </ul>
      </p>

      <p>
        <strong>Horario de atención</strong>
        <ul v-if="schedules">
          <li v-for="schedule in schedules">{{ schedule.item }}</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
    },
    data() {
      return {
      }
    },
    computed: {
      schedules() {
        return this.$site.themeConfig.schedule.schedule_long
      },
      transports() {
        return this.$site.themeConfig.transports
      },
      contact() {
        let phoneLinks = [];
        this.$site.themeConfig.phones.forEach(function(phone) {
          phoneLinks.push('<a href="tel:' + phone.link + '">' + phone.visible + '</a>');
        });
        return {
          "phones": phoneLinks.join(' – '),
          "fax": this.$site.themeConfig.fax,
          "email": this.$site.themeConfig.email,
          "socialMedia": this.$site.themeConfig.socialMedia
        }
      },
      address() {
        let addressLine2 = [];
        let addressCodeCity = [];
        let address = this.$site.themeConfig.address;
        if (this.$site.themeConfig.address.street2) {
          addressLine2.push(this.$site.themeConfig.address.street2);
        }
        if (this.$site.themeConfig.address.postalCode) {
          addressCodeCity.push(this.$site.themeConfig.address.postalCode);
        }
        if (this.$site.themeConfig.address.city) {
          addressCodeCity.push(this.$site.themeConfig.address.city);
        }
        if (addressCodeCity !== '') {
          addressLine2.push(addressCodeCity.join(' '));   
        }
        address.line2 = addressLine2.join(', ');
        return address;
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
