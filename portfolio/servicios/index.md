---
services_index: true
title: 'Servicios de La Notaría'
intro: En Notaría Vilas le ofrecemos la posibilidad de firmar todo tipo de escrituras, actas y pólizas. A continuación mencionamos los documentos notariales más habituales que elaboramos, y pulsando sobre cada uno Usted podrá conocer sus principales características, la documentación que debe facilitar a la Notaría, así como los impuestos que le serán aplicables tras su firma. Para obtener información adicional, puede contactar con nosotros a través de nuestro e-mail notariavilas@notariavilas.com, por teléfono al 91 501 41 00, o con el formulario de contacto.
content: Aquí va el contenido
template: services
banner:
  image_mobile: "/upload/notaria-en-madrid-firma-xs.jpg"
  image_tablet: "/upload/notaria-en-madrid-firma-md.jpg"
  image_desktop: "/upload/notaria-en-madrid-firma-lg.jpg"
  image_alt: Notaría en Madrid Firma
---

<Banner 
    :text="$page.frontmatter.banner.banner_text"
    :image="$page.frontmatter.banner.image_desktop"
    :image_mobile="$page.frontmatter.banner.image_mobile"
    :image_tablet="$page.frontmatter.banner.image_tablet"
    :image_alt="$page.frontmatter.banner.image_alt" />

# Servicios

<TextBlock :intro="$page.frontmatter.intro" />
<!--
<Title 
    :title="$page.frontmatter.services_title" 
    :pretitle="$page.frontmatter.services_pre_title" />
-->

<ServicesList />

<TextBlock :intro="$page.frontmatter.content" />