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
banner:
  text: "Visite nuestro despacho, \Lestaremos encantados de atenderle"
  image_mobile: "/upload/notaria-en-madrid-firma-xs.jpg"
  image_tablet: "/upload/notaria-en-madrid-firma-md.jpg"
  image_desktop: "/upload/notaria-en-madrid-firma-lg.jpg"
map:
  image_mobile: "/upload/notaria-en-madrid-mapa-xs.jpg"
  image_tablet: "/upload/notaria-en-madrid-mapa-md.jpg"
  image_desktop: "/upload/notaria-en-madrid-mapa-lg.jpg"
  link: "https://www.google.com/maps?q=notaria+vilas&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiT-q_L273pAhXFSxUIHd8TBxwQ_AUoAXoECBMQAw"
contact_form_title: Envíenos sus dudas y consultas. las atenderemos a la menor brevedad

---

<Banner 
    :image="$page.frontmatter.main_image.desktop"
    :image_mobile="$page.frontmatter.main_image.mobile"
    :image_tablet="$page.frontmatter.main_image.tablet" />

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
    :image_tablet="$page.frontmatter.banner.image_tablet" />

<Address />

<Banner 
    :image="$page.frontmatter.map.image_desktop"
    :image_mobile="$page.frontmatter.map.image_mobile"
    :image_tablet="$page.frontmatter.map.image_tablet"
    :link="$page.frontmatter.map.link"
    :target="'_blank'" />

<ContactForm 
    :title="$page.frontmatter.contact_form_title" />

