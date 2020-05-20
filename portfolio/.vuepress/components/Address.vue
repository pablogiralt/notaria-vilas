<template>
  <div id="como-llegar" class="address">
    <h2 class="address__title">
      Cómo llegar
    </h2>
    <div>
      <ul class="address__block">
        <li class="address__item">{{ address.street }}</li>
        <li class="address__item" v-if="address.line2">
          {{ address.line2 }}
        </li>
      </ul>

      <ul v-if="transports" class="address__block">
        <li class="address__item"v-for="transport in transports">
          {{ transport.transport_label }} | {{ transport.transport_text }}
        </li>
      </ul>

      <ul v-if="schedules" class="address__block">
        <li class="address__item">
          <strong>Horario de atención</strong>
        </li>
        <li class="address__item" v-for="schedule in schedules">
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
      // contact() {
      //   return {
      //     "phones": this.$site.themeConfig.phones,
      //     "fax": this.$site.themeConfig.fax,
      //     "email": this.$site.themeConfig.email,
      //     "socialMedia": this.$site.themeConfig.socialMedia
      //   }
      // },
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

  .address {
    position: relative;
    text-align: center;
    padding: 120px 0 33px;
    margin-top: -80px;
    z-index: 1;
  }

  .address__title {
    font-size: 23px;
    line-height: 1;
    font-family: var(--headings-font-family);
    font-weight: bold;
    letter-spacing: 0.27px;
    margin-bottom: 31px;
  }

  .address__block {
    margin-bottom: 21px;
    list-style: none;
  }

  .address__item {
    margin-bottom: 1px;
    font-weight: 300;
  }
</style>
