<template>
  <form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
    >
    <input type="hidden" name="form-name" value="contact" />

    <p class="contact-form__field-group">
        <label for="name">Nombre *</label>
        <input 
            type="text" 
            name="name"
            @input="ev => form.name = ev.target.value"
            required />
    </p>
    <p class="contact-form__field-group">
        <label for="company">Empresa</label>
        <input 
            type="text" 
            name="company"
            @input="ev => form.company = ev.target.value" />
    </p>
    <p class="contact-form__field-group">
        <label for="phone">Teléfono *</label>
        <input 
            type="text" 
            name="phone" 
            @input="ev => form.phone = ev.target.value"
            required />  
    </p>
    <p class="contact-form__field-group">
        <label for="email">Email *</label>
        <input 
            type="email" 
            name="email" 
            @input="ev => form.email = ev.target.value"
            required />
    </p>
    <p class="contact-form__field-group">
        <label for="message">Mensaje *</label>
        <textarea 
            name="message" 
            @input="ev => form.message = ev.target.value"
            required>
        </textarea>
    </p>

    <p class="contact-form__field-group">
        <button>Enviar Formulario</button>
    </p>
  </form>
</template>
<script>

import axios from "axios";

export default {
  name: "contact",
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

        // console.log(this.form);

      axios.post(
        "/",
        this.encode({
          "form-name": "contact",
          ...this.form
        }),
        axiosConfig
      );
    }
  },
  data () {
    return {
      form: {
          name: "",
          company: "",
          phone: "",
          email: "",
          message: ""
      }
    }
  }
}
</script>