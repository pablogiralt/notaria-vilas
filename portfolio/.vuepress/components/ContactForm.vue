<template>
  <form
    name="contacto"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="contact-form"
    >

    <input type="hidden" name="form-name" value="contacto" />

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
    <p class="contact-form__field-group">
        <button type="submit">Enviar Formulario</button>
    </p>
  </form>
</template>

<script>
    export default {
    name: "contacto",
    methods: {
    },
    data () {
        return {
        }
    }
    }
</script>