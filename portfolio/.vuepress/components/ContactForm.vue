<template>
    <div class="contact-form" id="contacto">

        <div 
            class="contact-form__backdrop"
            v-bind:class="{ 'contact-form__backdrop--visible': isActive }"
            v-on:click="isActive = false">
        </div>
        
        <div class="container">
            <p v-html="title" class="contact-form__title"></p>

            <form
                name="contacto-notaria"
                method="post"
                data-netlify="true"
                @submit.prevent="handleSubmit"
                netlify-honeypot="surname"
                class="contact-form__form"
                >
                
                <div class="contact-form__row">

                    <div class="contact-form__col-left contact-form__subtitle">
                        Datos de contacto
                    </div>

                    <div class="contact-form__col-right">
                    
                        <ul class="contact-form__contacts">
                            <li class="contact-form__contact">
                                <span class="contact-form__contact-label">Email<span class="hidden-mobile">:</span></span><span class="hidden-desktop"> | </span><a class="contact-form__contact-link" v-bind:href="contact.email">{{ contact.email }}</a>
                            </li>
                            <li class="contact-form__contact">
                                <span class="contact-form__contact-label">Teléfono<span class="hidden-mobile">:</span></span><span class="hidden-desktop"> | </span>
                                <span>
                                    <span v-for="(phone, index) in contact.phones">
                                        <a class="contact-form__contact-link" v-bind:href="'tel:' + phone.link">{{ phone.visible }}</a>
                                        <span v-if="index + 1 < contact.phones.length"> | </span>
                                    </span>
                                </span>
                            </li>
                            <li class="contact-form__contact">
                                <span class="contact-form__contact-label">Fax<span class="hidden-mobile">:</span></span><span class="hidden-desktop"> | </span>{{ contact.fax }}
                            </li>
                        </ul>
                   
                    </div>

                </div>


                <div class="contact-form__row">

                    <div class="contact-form__col-left contact-form__subtitle">
                        Formulario de contacto
                    </div>

                    <div class="contact-form__col-right">

                        <input type="hidden" name="form-name" value="contacto-notaria" />

                        <p class="hidden">
                            <label>Don’t fill this out if you're human: <input name="surname" /></label>
                        </p>

                        <p class="hidden">
                            <input 
                                type="text" 
                                name="subject"
                                id="contact-subject"
                                value="[Notaria Vilas] Envío de formulario de contacto"
                                required />
                            <label for="contact-subject">Subject *</label>
                        </p>

                        <label class="has-float-label" for="contact-name">           
                            <input 
                                type="text" 
                                name="nombre"
                                id="contact-name"
                                placeholder=" "
                                class="contact-form__field"
                                @input="processName($event.target.value)"
                                required />
                            
                            <span>Nombre *</span>
                        </label>
                    
                        <label class="has-float-label" for="contact-company">
                            <input 
                                type="text" 
                                name="empresa"
                                placeholder=" "
                                id="contact-company"
                                class="contact-form__field"
                                @input="ev => form.empresa = ev.target.value" />
                            <span>Empresa</span>
                        </label>

                        <label class="has-float-label" for="contact-phone">  
                            <input 
                                type="text" 
                                name="telefono" 
                                placeholder=" "
                                id="contact-phone"
                                class="contact-form__field"
                                @input="ev => form.telefono = ev.target.value"
                                required />  
                            <span>Teléfono *</span>   
                        </label>

                        <label class="has-float-label" for="contact-email">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder=" "
                                id="contact-email"
                                class="contact-form__field"
                                @input="ev => form.email = ev.target.value"
                                required />
                            <span>Email *</span>   
                        </label>

                        <label class="has-float-label" for="contact-message">  
                            <textarea 
                                name="mensaje" 
                                placeholder=" "
                                id="contact-message"
                                class="contact-form__field"
                                @input="ev => form.mensaje = ev.target.value"
                                required>
                            </textarea>
                            <span>Mensaje *</span> 
                        </label>
                    </div>
                </div>

                <div class="contact-form__row">

                    <div class="contact-form__col-right contact-form__privacy">
                        <input 
                            type="checkbox" 
                            id="privacy-policy" 
                            name="Ha aceptado la Política de privacidad"                          
                            v-model="form.privacy">

                        <label for="privacy-policy">
                            He leído y aceptado la Política de privacidad
                        </label>
                    </div>

                    <div class="contact-form__col-left">
                        <p class="contact-form__field-group">
                            <button class="btn">
                                Enviar Formulario
                            </button>
                        </p>
                    </div>
                </div>

                <div 
                    class="contact-form__message" 
                    v-bind:class="{ 'contact-form__message--visible': isActive }">
                    <span 
                        class="contact-form__message-close"
                        v-on:click="isActive = false">
                    </span>
                    <div v-html="message"></div>
                </div>
            </form>

        </div>
    </div>
</template>


<script>

    import axios from "axios";
    
    export default {
        name: "contacto",
        props: {
            title: {
                type: String,
                required: false
            }
        },
        data () {
            return {
                form: {
                    nombre: "",
                    empresa: "",
                    telefono: "",
                    email: "",
                    mensaje: "",
                    privacy: "",
                    subject: ""
                },
                isActive: 0,
                message: ''
            }
        },
        computed: {
            contact() {
                return {
                    "phones": this.$site.themeConfig.phones,
                    "fax": this.$site.themeConfig.fax,
                    "email": this.$site.themeConfig.email,
                    "socialMedia": this.$site.themeConfig.socialMedia
                }
            },
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

                let _ = this;

                if ( this.form.privacy ) {

                    axios.post(
                        "/",
                        this.encode({
                            "form-name": "contacto-notaria",
                            ...this.form
                        }),
                        axiosConfig
                    ).then(function (response) {
                        // console.log(response);
                        _.message = '<p class="contact-form__message-title contact-form__message-title--success">¡Mensaje Enviado!</p><p class="contact-form__message-body">Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible</p>';
                        _.isActive = 1;
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            //console.log(error.response.data);
                            console.log(error.response.status);
                            //console.log(error.response.headers);
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                            // http.ClientRequest in node.js
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', error.message);
                        }

                        _.message = '<p class="contact-form__message-title contact-form__message-title--error">Error al enviar</p><p class="contact-form__message-body">Hubo un problema con el envío de tu formulario.  Puedes volver a intentarlo pasados unos minutos o escribir a:<br> <a href="' + _.form.email + '">' + _.form.email + '</a></p>';
                        _.isActive = 1;
                    });
                
                } else {

                    _.message = '<p class="contact-form__message-title contact-form__message-title--warning">Mensaje no enviado</p><p class="contact-form__message-body">Debes aceptar la política de privacidad antes de enviar el formulario</p>';
                    _.isActive = 1;
                }
            }
        }    
    }
</script>

<style scoped>

    .contact-form {
        position: relative;
        background-color: var(--color-grey-lighter);
        padding-top: 60px;
        padding-bottom: 40px;
    }

    .contact-form__backdrop {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: #000;
        opacity: 0.5;
        z-index: 100;
        display: none;
    }

    .contact-form__backdrop--visible {
        display: block;
    }

    .contact-form__message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 30px 20px;
        background-color: white;
        display: none;
        z-index: 200;
        text-align: center;
        max-width: 375px;
    }

    .contact-form__message-close {
        position: absolute;
        content: '';
        right: 0;
        top: 0;
        padding: 23px 20px;
        background-image: url(/close.svg);
        background-position: center;
        background-size: 1.5rem;
        background-repeat: no-repeat;
        transition: opacity 0.15s;
        cursor: pointer;
    }

    .contact-form__title {
        font-family: var(--headings-font-family);
        color: var(--color-blue);
        font-size: 23px;
        text-align: center;
        margin-bottom: 34px;
        line-height: 25px;
    }

    .contact-form__subtitle {
        display: none;
    }

    .contact-form__message--visible {
        display: block;
    }

    .contact-form__privacy {
        margin-bottom: 20px;
    }

    .contact-form__contacts {
        list-style: none;
        padding-bottom: 40px;
        text-align: center;
    }

    .contact-form__contact-link {
        color: var(--color-black);
    }

    .contact-form__contact {
        margin-bottom: 8px;
        font-size: 14px;
    }


    @media screen and (min-width: 768px) {

        .contact-form__row {
            display: flex;
            justify-content: center;
        }

        .contact-form__title {
            margin-bottom: 50px;
        }

        .contact-form__col-left {
            order: 1;
            width: 180px;
            padding-right: 20px;
        }

        .contact-form__col-right {
            order: 2;
            flex-grow: 1;
            max-width: 554px;
        }

        .contact-form__subtitle {
            display: block;
            font-weight: bolder;
            color: var(--color-blue);
            line-height: 19px;
        }

        .contact-form__privacy {
            margin-top: 7px;
        }

        .contact-form__privacy {
            margin-bottom: 0;
        }

        .contact-form__contacts {
            text-align: left;
        }

        .contact-form__contact {
            display: flex;
        }

        .contact-form__contact-label {
            min-width: 78px;
            display: inline-block;
        }
    }

</style>

<style>
    .contact-form__message-title {
        font-weight: bolder;
    }

    .contact-form__message-title--success {
        color: var(--color-blue);
    }

    .contact-form__message-title--error,
    .contact-form__message-title--warning {
        color: var(--color-red);
    }
</style>
