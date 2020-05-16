---
services_index: true
title: 'Servicios de La Notaría'
main_image: "/upload/scott-graham-oqmzwnd3thu-unsplash.jpg"
banner:
  banner_text: Contamos con notarios de renombrada trayectoria, quienes resolverán
    las dudas de nuestros clientes en el menor tiempo posible.
  banner_image: "/upload/scott-graham-oqmzwnd3thu-unsplash.jpg"
services_pre_title: Nuestros servicios de notaría en Madrid
services_title: <span class="s1">En Vilas estamos capacitados para ofrecer a nuestros
  clientes un servicio de notaría completo y eficaz.</span>
---

<Banner 
    :image="$page.frontmatter.main_image" />

<Title 
    :title="$page.frontmatter.services_title" 
    :pretitle="$page.frontmatter.services_pre_title" />

<ServicesList />

<Banner 
    :text="$page.frontmatter.banner.banner_text"
    :image="$page.frontmatter.banner.banner_image" />
