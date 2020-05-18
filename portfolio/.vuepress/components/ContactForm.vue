<template>
  <form
    name="contacto-notaria"
    method="post"
    data-netlify="true"
    @submit.prevent="handleSubmit"
    netlify-honeypot="surname"
    class="contact-form"
    >

    <input type="hidden" name="form-name" value="contacto-notaria" />

    <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="surname" /></label>
    </p>

    <p class="contact-form__field-group">
        <label for="name">Subject *</label>
        <input 
            type="text" 
            name="subject"
            value="Esto es un asunte de email muy cool"
            @input="ev => form.subject = ev.target.value"
            required />
    </p>

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
        name: "contacto",
        data () {
            return {
                form: {
                    name: "",
                    company: "",
                    phone: "",
                    email: "",
                    message: "",
                    subject: "Esto es un asunte de email muy cool"
                }
            }
        },
        methods: {
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
                console.log(this.form);
                axios.post(
                    "/",
                    this.encode({
                        "form-name": "contacto-notaria",
                        ...this.form
                    }),
                    axiosConfig
                );
            }
        }    
    }
</script>