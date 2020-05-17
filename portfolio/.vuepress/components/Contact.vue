<template>
  <div id="como-llegar" class="contact">
    <h2 class="contact__title">
      Dirección y contacto
    </h2>
    <div>
      <ul class="contact__block">
        <li class="contact__item">{{ address.street }}</li>
        <li class="contact__item" v-if="address.line2">
          {{ address.line2 }}
        </li>
      </ul>

      <ul class="contact__block">
        <li class="contact__item">Email | {{ contact.email }}</li>
        <li class="contact__item">
          Teléfono | 
          <span v-for="(phone, index) in contact.phones">
            <a class="contact__link" v-bind:href="'tel:' + phone.link">{{ phone.visible }}</a>
            <span v-if="index + 1 < contact.phones.length"> | </span>
          </span>
        </li>
        <li class="contact__item">Fax | {{ contact.fax }}</li>
      </ul>

      <ul v-if="transports" class="contact__block">
        <li class="contact__item"v-for="transport in transports">
          {{ transport.transport_label }} | {{ transport.transport_text }}
        </li>
      </ul>

      <ul v-if="schedules" class="contact__block">
        <li class="contact__item">
          <strong>Horario de atención</strong>
        </li>
        <li class="contact__item" v-for="schedule in schedules">
          {{ schedule.item }}
        </li>
      </ul>
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
        return {
          "phones": this.$site.themeConfig.phones,
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
  .contact {
    text-align: center;
  }

  .contact__title {
    font-size: 23px;
    line-height: 1;
    font-family: var(--headings-font-family);
    letter-spacing: 0.27px;
    margin-bottom: 31px;
  }

  .contact__block {
    margin-bottom: 21px;
  }

  .contact__item {
    margin-bottom: 1px;
    font-weight: 300;
  }
</style>
