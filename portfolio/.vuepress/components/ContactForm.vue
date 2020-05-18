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

    <p class="hidden">
        <label for="subject">Subject *</label>
        <input 
            type="text" 
            name="subject"
            value="[Notaria Vilas] Envío de formulario de contacto"
            required />
    </p>

    <p class="contact-form__field-group">
        <label for="nombre">Nombre *</label>
        <input 
            type="text" 
            name="nombre"
            @input="processName($event.target.value)"
            required />
    </p>
    <p class="contact-form__field-group">
        <label for="empresa">Empresa</label>
        <input 
            type="text" 
            name="empresa"
            @input="ev => form.empresa = ev.target.value" />
    </p>
    <p class="contact-form__field-group">
        <label for="telefono">Teléfono *</label>
        <input 
            type="text" 
            name="telefono" 
            @input="ev => form.telefono = ev.target.value"
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
        <label for="mensaje">Mensaje *</label>
        <textarea 
            name="mensaje" 
            @input="ev => form.mensaje = ev.target.value"
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
                    nombre: "",
                    empresa: "",
                    telefono: "",
                    email: "",
                    mensaje: "",
                    subject: ""
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
            processName (nombre) {
                this.form.nombre = nombre;
                this.form.subject = "[Notaria Vilas] Envío de formulario de contacto de " + nombre;
            },
            handleSubmit () {
                const axiosConfig = {
                    header: { "Content-Type": "application/x-www-form-urlencoded" }
                };
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