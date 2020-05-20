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
main_image: "/upload/notaria-vilas-edificio-wide.jpg"
main_image_mobile: "/upload/notaria-vilas-edificio-square.jpg"
banner:
  banner_text: "Visite nuestro despacho, \Lestaremos encantados de atenderle"
  banner_image: "/upload/notaria-vilas-firma.jpg"
  banner_image_mobile: "/upload/notaria-vilas-firma-square.jpg"
map:
  map_image: "/upload/notaria-vilas-mapa.jpg"
  map_image_mobile: "/upload/notaria-vilas-mapa-square.jpg"
  map_link: "https://www.google.com/maps?q=notaria+vilas&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiT-q_L273pAhXFSxUIHd8TBxwQ_AUoAXoECBMQAw"
contact_form_title: Envíenos sus dudas y consultas. las atenderemos a la menor brevedad

---
<Banner 
    :image="$page.frontmatter.main_image"
    :image_mobile="$page.frontmatter.main_image_mobile" />
    
<Title 
    :title="$page.frontmatter.about_title" 
    :pretitle="$page.frontmatter.about_pre_title" />

<AboutList 
    :list="$page.frontmatter.about_list" />

<Banner 
    :text="$page.frontmatter.banner.banner_text"
    :image="$page.frontmatter.banner.banner_image"
    :image_mobile="$page.frontmatter.banner.banner_image_mobile" />

<Address />

<Banner 
    :image="$page.frontmatter.map.map_image"
    :image_mobile="$page.frontmatter.map.map_image_mobile"
    :link="$page.frontmatter.map.map_link"
    :target="'_blank'" />

<ContactForm 
    :title="$page.frontmatter.contact_form_title" />

