---
title: Notaría Vilas
about_pre_title: Notaría en Madrid
about_title: Somos un despacho notarial con amplia experiencia en el sector y trabajamos
  con un equipo de eficacia comprobada.
about_list:
- about_list_title: La Notaría
  about_list_text: Somos Notaría Vilas y ofrecemos excelentes servicios profesionales
    desde 1996, lo que nos ha otorgado una amplia experiencia en el sector. Nuestro
    despacho notarial se encuentra bajo la dirección de Don Ricardo Vilas de Escauriaza,
    quien junto a un equipo conformado por nueve profesionales jóvenes y eficaces,
    se encarga de atender las necesidades de nuestros clientes.
- about_list_title: El Despacho
  about_list_text: Nuestro despacho notarial no posee barreras arquitectónicas, ya
    que estamos situados en Conde Cartagena, una de las calles más funcionales y accesibles
    de todo Madrid; por otro lado, en nuestras instalaciones no hay escalones que
    puedan dificultar la circulación de las personas que nos visitan en silla de ruedas.
- about_list_title: El edificio
  about_list_text: Finalmente, tenemos que recalcar que el idioma no es ningún inconveniente
    para nosotros, ya que además de hablar en castellano, podemos atender a nuestros
    clientes en inglés o francés.
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
        const schemaObject = {
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
        };
        const extra = `<script type="application/ld+json">`+ schemaObject +`<\/script>`;

        // this.$ssrContext.userHeadTags += extra
        this.$ssrContext.pageMeta += extra;
      }
    }
  }
</script>

