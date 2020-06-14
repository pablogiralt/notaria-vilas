---
title: Notaría en Madrid
description: Notaría en Madrid en la zona de barrio de Retiro.  Se realizan poderes, testamentos...
about_pre_title: Notaría en Madrid
about_title: Somos un despacho notarial con amplia experiencia en el sector y trabajamos
  con un equipo de eficacia comprobada.
about_list:
- about_list_title: Quienes Somos
  about_list_text: Notaría Vilas ofrece un servicio jurídico integral en la firma de escrituras y actas notariales, asesorando sobre las opciones más  idóneas para el cliente. <br>Ofrecemos un servicio de gestión ágil y profesional, tramitando cualquier tipo de Impuestos que afecten a las escrituras firmadas en cualquier Comunidad Autónoma de España e inscribiéndolas en cualquier Registro de la Propiedad o Mercantil.
- about_list_title: Lo que nos diferencia
  about_list_text: <p>Notaría Vilas, establecida en Madrid desde 1996, cuenta con un equipo muy cualificado de profesionales, con soluciones a todas sus iniciativas  y con disponibilidad para atenderle y resolver sus dudas, incluso en el ámbito internacional, pues El Notario y algún empleado hablan inglés, francés y catalán.</p><p>Disponemos de un servicio de gestión que comprende el pago de cualesquiera de los Impuestos derivados de las escrituras firmadas y su inscripción en cualquier Registro Público. (ver servicios de gestión)</p><p>Notaría Vilas cuenta con unas modernas instalaciones en un amplio chalet situado  a nivel de calle , sin barreras arquitectónicas, que permite el acceso en silla de ruedas o a personas de movilidad reducida. Posee  jardín interior,   cuatro salas de firma y amplios espacios diáfanos  de espera,  que se adaptan a las medidas de protección sanitarias y de seguridad establecidas por la Legislación vigente.( ver sección Covid 19 )</p><p>Nuestro amplísimo horario de atención al público y de firma  comprende todos los días laborables de 9:00 a 14:00 y de Lunes a Jueves de 16:30 a 19:00. ¡un lujo en Madrid!</p>
main_image: 
  mobile: "/upload/notaria-en-madrid-edificio-xs.jpg"
  tablet: "/upload/notaria-en-madrid-edificio-md.jpg"
  desktop: "/upload/notaria-en-madrid-edificio-lg.jpg"
  alt: "Notaría en Madrid Edificio"
banner:
  text: "Visite nuestro despacho, \Lestaremos encantados de atenderle"
  image_mobile: "/upload/notaria-en-madrid-firma-xs.jpg"
  image_tablet: "/upload/notaria-en-madrid-firma-md.jpg"
  image_desktop: "/upload/notaria-en-madrid-firma-lg.jpg"
  image_alt: "Notaría en Madrid Firma"
map:
  image_mobile: "/upload/notaria-en-madrid-mapa-xs.jpg"
  image_tablet: "/upload/notaria-en-madrid-mapa-md.jpg"
  image_desktop: "/upload/notaria-en-madrid-mapa-lg.jpg"
  image_alt: "Notaría en Madrid Mapa"
  link: "https://www.google.com/maps?q=notaria+vilas&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiT-q_L273pAhXFSxUIHd8TBxwQ_AUoAXoECBMQAw"
contact_form_title: Envíenos sus dudas y consultas. las atenderemos a la menor brevedad

---


<Gallery />


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

<Banner 
    :text="$page.frontmatter.banner.banner_text"
    :image="$page.frontmatter.banner.image_desktop"
    :image_mobile="$page.frontmatter.banner.image_mobile"
    :image_tablet="$page.frontmatter.banner.image_tablet"
    :image_alt="$page.frontmatter.banner.image_alt" />

<Address />

<Banner 
    :image="$page.frontmatter.map.image_desktop"
    :image_mobile="$page.frontmatter.map.image_mobile"
    :image_tablet="$page.frontmatter.map.image_tablet"
    :image_alt="$page.frontmatter.map.image_alt"
    :link="$page.frontmatter.map.link"
    :target="'external'" />

<ContactForm 
    :title="$page.frontmatter.contact_form_title" />



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

