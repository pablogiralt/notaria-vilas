---
title: Notaría en Madrid
description: Notaría en Madrid en la zona de barrio de Retiro.  Se realizan poderes,
  testamentos...
about_pre_title: Notaría en Madrid
about_title: Somos un despacho notarial con amplia experiencia que ofrece soluciones
  ágiles y eficaces a sus clientes
about_list:
- about_list_title: Quiénes Somos
  about_list_text: Notaría Vilas ofrece un <strong>servicio jurídico integral</strong>
    en la firma de escrituras y actas notariales, asesorando sobre las opciones más
    idóneas para el cliente. <br>Ofrecemos un servicio de <strong>gestión ágil y profesional</strong>,
    tramitando cualquier tipo de Impuestos que afecten a las escrituras firmadas en
    cualquier Comunidad Autónoma de España e inscribiéndolas en cualquier Registro
    de la Propiedad o Mercantil.
- about_list_title: Experiencia y disponibilidad
  about_list_text: Notaría Vilas, establecida en Madrid desde 1996, cuenta con un
    equipo de profesionales muy cualificado con <strong>amplia experiencia</strong>.
    Ofrecemos soluciones a todas sus iniciativas y tenemos disponibilidad para atenderle
    y resolver sus dudas, <strong>incluso en el ámbito internacional</strong>, pues
    El Notario y varios empleados hablan inglés, francés y catalán.
- about_list_title: Gestión integral
  about_list_text: Disponemos de un servicio de gestión que comprende el pago de cualesquiera
    de los <strong>impuestos</strong> derivados de las escrituras firmadas y su <strong>inscripción</strong>
    en cualquier Registro Público (ver <a href="/servicios/" title="">Sección Servicios</a>)
- about_list_text: Nuestro <strong>amplísimo horario de atención al público</strong>
    y firmas comprende todos los días laborables de 9:00 a 14:00 de la mañana y de
    Lunes a Jueves de 16:30 a 19:00 de la tarde. ¡Un lujo en Madrid!
  about_list_title: Horario de atención
- about_list_title: Ubicación e Instalaciones
  about_list_text: Notaría Vilas está ubicada entre los barrios de Retiro y Pacífico,
    en una <strong>zona céntrica </strong>que está rodeada de sucursales de los principales
    bancos, lo cual es muy práctico para la firma de ciertos documentos.<br><br>Notaría
    Vilas cuenta con unas <strong>modernas instalaciones</strong> en un chalet situado
    a nivel de calle, <strong>sin barreras arquitectónicas</strong>, que permite el
    acceso en silla de ruedas o a personas de movilidad reducida. Posee jardín interior,
    cuatro salas de firma y amplios espacios diáfanos de espera, que se adaptan a
    las medidas de protección sanitarias y de seguridad establecidas por la Legislación
    vigente (ver <a href="/covid-19.html" title="">sección Covid-19</a>)
main_image:
  mobile: "/upload/notaria-en-madrid-edificio-xs.jpg"
  tablet: "/upload/notaria-en-madrid-edificio-md.jpg"
  desktop: "/upload/notaria-en-madrid-edificio-lg.jpg"
  alt: Notaría en Madrid Edificio
banner:
  text: "Visite nuestro despacho, \Lestaremos encantados de atenderle"
  image_mobile: "/upload/notaria-en-madrid-firma-xs.jpg"
  image_tablet: "/upload/notaria-en-madrid-firma-md.jpg"
  image_desktop: "/upload/notaria-en-madrid-firma-lg.jpg"
  image_alt: Notaría en Madrid Firma
map:
  image_mobile: "/upload/notaria-en-madrid-mapa-xs.jpg"
  image_tablet: "/upload/notaria-en-madrid-mapa-md.jpg"
  image_desktop: "/upload/notaria-en-madrid-mapa-lg.jpg"
  image_alt: Notaría en Madrid Mapa
  link: https://www.google.com/maps?q=notaria+vilas&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiT-q_L273pAhXFSxUIHd8TBxwQ_AUoAXoECBMQAw
contact_form_title: Envíenos sus dudas y consultas. Las atenderemos a la menor brevedad
gallery:
- "/upload/dsc_6125.JPG"
- "/upload/dscn5359.JPG"
- "/upload/img_4091.JPG"
- "/upload/dscn5370.JPG"
- "/upload/dscn5364.JPG"

---
<Banner 
    :image="$page.frontmatter.main_image.desktop"
    :image_mobile="$page.frontmatter.main_image.mobile"
    :image_tablet="$page.frontmatter.main_image.tablet"
    :image_alt="$page.frontmatter.main_image.alt" />

<div id="la-notaria">
  <Title 
    :title="$page.frontmatter.about_title" 
    :pretitle="$page.frontmatter.about_pre_title" />
</div>

<AboutList 
    :list="$page.frontmatter.about_list" />

<ClientOnly>
  <Gallery :slides="$page.frontmatter.gallery"/>
</ClientOnly>
<!--
<Banner 
    :text="$page.frontmatter.banner.banner_text"
    :image="$page.frontmatter.banner.image_desktop"
    :image_mobile="$page.frontmatter.banner.image_mobile"
    :image_tablet="$page.frontmatter.banner.image_tablet"
    :image_alt="$page.frontmatter.banner.image_alt" />
-->
<Address />

<Banner 
    :image="$page.frontmatter.map.image_desktop"
    :image_mobile="$page.frontmatter.map.image_mobile"
    :image_tablet="$page.frontmatter.map.image_tablet"
    :image_alt="$page.frontmatter.map.image_alt"
    :link="$page.frontmatter.map.link"
    :target="'external'" />

<div class="contact-form__wrapper">
  <ContactForm :title="$page.frontmatter.contact_form_title" />
</div>



<script>
  export default {
    created () {
      if (this.$ssrContext) {
        // https://code.luasoftware.com/tutorials/vuepress/vuepress-add-json-structured-data-to-page/
        // https://developers.google.com/search/docs/data-types/local-business
        // https://schema.org/Notary
        const extra = `
<script type="application/ld+json">
{
      "@context": "https://schema.org",
      "@type": "Notary",
      "image": [
        "https://notaria.netlify.app/upload/notaria-en-madrid-edificio-md.jpg",
        "https://notaria.netlify.app/upload/notaria-en-madrid-firma-md.jpg"
      ],
      "name": "Notaría Vilas",
      "email": "notariavilas@notariavilas.com",
      "telephone": "+34915014100",
      "faxNumber": "915017296",
      "logo": "http://www.example.com/images/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle del Conde de Cartagena, 43",
        "addressLocality": "Madrid",
        "addressRegion": "Madrid",
        "postalCode": "28007",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.407637,
        "longitude": -3.672392
      },
      "url": "https://notaria.netlify.app",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "16:30",
          "closes": "19:00"
        }
      ]
    }
<\/script>
        `;
        // this.$ssrContext.userHeadTags += extra
        this.$ssrContext.pageMeta += extra;
      }
    }
  }
</script>

<style scoped>
  .contact-form__wrapper {
    margin-top: -80px;
    padding-top: 70px;
  }
</style>