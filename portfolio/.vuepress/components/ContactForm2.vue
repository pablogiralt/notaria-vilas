<template>
  <form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
    >
    <input type="hidden" name="form-name" value="ask-question" />

    <p class="contact-form__field-group">
        <label for="name">Nombre *</label>
        <input type="text" name="name" required />
    </p>
    <p class="contact-form__field-group">
        <label for="company">Empresa</label>
        <input type="text" name="company" />
    </p>
    <p class="contact-form__field-group">
        <label for="phone">Teléfono *</label>
        <input type="text" name="phone" required />  
    </p>
    <p class="contact-form__field-group">
        <label for="email">Email *</label>
        <input type="email" name="email" required />
    </p>
    <p class="contact-form__field-group">
        <label for="message">Mensaje *</label>
        <textarea name="message" required></textarea>
    </p>

    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        @input="ev => form.askPerson = ev.target.value"
        :value="panelist"
        :checked="form.askPerson === panelist"
      />
      <span>{{ panelist }}</span>
    </label>

    <p class="contact-form__field-group">
        <button>Enviar Formulario</button>
    </p>
  </form>
</template>
<script>

import axios from "axios";

export default {
  name: "QAForm",
  methods: {
    updatePanelist (ev) {
      this.currentPanelist = ev.target.value
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "ask-question",
          ...this.form
        }),
        axiosConfig
      );
    }
  },
  data () {
    return {
      form: {
        askPerson: ""
      },
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You'
    }
  }
}
</script>