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
main_image: "/upload/scott-graham-oqmzwnd3thu-unsplash.jpg"
banner:
  banner_text: "Visite nuestro despacho, \Lestaremos encantados de atenderle"
  banner_image: "/upload/scott-graham-oqmzwnd3thu-unsplash.jpg"
map_image: "/upload/scott-graham-oqmzwnd3thu-unsplash.jpg"
map_link: "https://www.google.com/maps?q=notaria+vilas&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiT-q_L273pAhXFSxUIHd8TBxwQ_AUoAXoECBMQAw"
contact_form_title: Envíenos sus dudas y consultas. las atenderemos a la menor brevedad

---
<Banner 
    :image="$page.frontmatter.main_image" />
    
<Title 
    :title="$page.frontmatter.about_title" 
    :pretitle="$page.frontmatter.about_pre_title" />

<AboutList 
    :list="$page.frontmatter.about_list" />

<Banner 
    :text="$page.frontmatter.banner.banner_text"
    :image="$page.frontmatter.banner.banner_image" />

<Contact />

<Banner 
    :image="$page.frontmatter.map_image"
    :link="$page.frontmatter.map_link"
    :target="'_blank'" />

<ContactForm 
    :title="$page.frontmatter.contact_form_title" />

