---
services_index: true
title: Servicios de La Notaría
intro: <h2><strong>Escrituras, actas y pólizas</strong></h2><p>En Notaría Vilas le
  ofrecemos la posibilidad de firmar todo tipo de escrituras, actas y pólizas. A continuación
  mencionamos los <strong>documentos notariales más habituales</strong> que elaboramos,
  y pinchando sobre cada uno podrá conocer sus principales <strong>características,</strong>
  la <strong>documentación que debe facilitar a la Notaría</strong>, así como los
  <strong>impuestos que le serán aplicables</strong> tras su firma. Para obtener información
  adicional y personalizada, <a href="/# contacto" title="" editing="" creating="">contacte
  con nosotros</a>.</p>
content: |2

  Servicio de Gestión y Tramitación de sus escrituras
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