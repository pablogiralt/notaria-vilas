---
services_index: true
title: Servicios notariales
descripcion: Realizamos con eficacia Testamentos, Declaraciones de Herederos, Herencias, Compraventas, Hipotecas, Constitución de Sociedad y todos los servicios notariales
intro: <h2>A. Escrituras, actas y pólizas</h2><p>En Notaría Vilas le ofrecemos la
  posibilidad de firmar todo tipo de escrituras, actas y pólizas. A continuación verá
  una lista (no exhaustiva) de los <strong>documentos notariales más habituales</strong>,
  y pinchando sobre cada uno, podrá conocer sus principales <strong>características,</strong>
  la <strong>documentación que debe facilitar a la Notaría</strong>, así como los
  <strong>impuestos aplicables</strong> tras su firma. Para obtener información adicional
  y personalizada, <a href="/contacto" title="" editing="" creating="">contacte con
  nosotros</a>.</p>
content: "<h2>B. Servicio de Gestión y Tramitación de sus escrituras</h2><p>Además
  de los servicios de elaboración de escrituras, actas y pólizas, en Notaría Vilas
  contamos con un gestor en plantilla para ofrecer <strong>a nuestros clientes</strong>
  un <strong>servicio integral y completo</strong>, que incluye la <strong>gestión
  de las escrituras firmadas en nuestra Notaría que requieran una posterior tramitación,</strong>
  en cuanto a presentación y pago de Impuestos e inscripción en los Registros correspondientes
  en toda España.</p><p>Si desea contar con este servicio, a través de una provisión
  de fondos que le solicitamos tras la firma, con un desglose entre los distintos
  conceptos:</p><p><strong>a) Presentamos y pagamos en su nombre las liquidaciones</strong>
  correspondientes a los Impuestos de Transmisiones Patrimoniales y Actos Jurídicos
  Documentados (ITPAJD), en sus distintas modalidades, Impuestos de Sucesiones y Donaciones
  (ISD), e Impuestos sobre el Incremento del Valor del Suelo de los Terrenos de Naturaleza
  Urbana (Plusvalía Municipal)</p><p><strong>b) Presentamos en su nombre las escrituras
  a inscripción en los Registros</strong> de la Propiedad y Registros Mercantiles
  en toda España, y en el caso de matrimonios y divorcios, en el Registro Civil correspondiente,
  <strong>y abonamos en su nombre los honorarios de Registro correspondientes.</strong></p><p><strong>c)
  Al finalizar la tramitación, le entregamos los originales</strong> de sus escrituras
  liquidadas en Hacienda e inscritas en los Registros, con todas las facturas correspondientes
  a Notaría, Registro y nuestra factura de gestión, junto con el importe sobrante
  de la provisión de fondos.</p>"
template: services
banner:
  image_mobile: "/upload/notaria-en-madrid-firma-xs.jpg"
  image_tablet: "/upload/notaria-en-madrid-firma-md.jpg"
  image_desktop: "/upload/notaria-en-madrid-firma-lg.jpg"
  image_alt: Notaría en Madrid Firma
pagos: <h2>C. Forma de pago de nuestros servicios</h2><p>En Notaría Vilas admitimos
  cualquier forma de pago para abonar nuestras facturas (efectivo, tarjeta bancaria,
  transferencia, talón o cheque).</p><p forestry-class="MsoListParagraphCxSpLast">Si
  desea contar con el servicio de gestión de las escrituras que haya firmado, se le
  solicitará una provisión de fondos para el pago de los honorarios de Registro, gestoría
  e impuestos aplicables, que podrá ser abonada por el cliente mediante transferencia
  bancaria, talón o cheque.</p>
tabla_pagos: <div style="overflow-x:auto;"> <table> <tr> <th>Tipo de servicio</th> <th>Efectivo</th> <th>Tarjeta Bancaria</th> <th>Transferencia</th> <th>Talón</th> <th>Cheque</th> </tr><tr> <td>Honorarios Notaría</td><td class="symbol--correct">✓</td><td class="symbol--correct">✓</td><td class="symbol--correct">✓</td><td class="symbol--correct">✓</td><td class="symbol--correct">✓</td></tr><tr> <td>Gestoría, Impuestos y Registros</td><td class="symbol--wrong">✗</td><td class="symbol--wrong">✗</td><td class="symbol--correct">✓</td><td class="symbol--correct">✓</td><td class="symbol--correct">✓</td></tr></table></div>
---
<Banner 
    :text="$page.frontmatter.banner.banner_text"
    :image="$page.frontmatter.banner.image_desktop"
    :image_mobile="$page.frontmatter.banner.image_mobile"
    :image_tablet="$page.frontmatter.banner.image_tablet"
    :image_alt="$page.frontmatter.banner.image_alt"
    :banner_class="'banner__inner--thin'" />

# Servicios

<TextBlock :intro="$page.frontmatter.intro" />

<ServicesList />

<TextBlock :intro="$page.frontmatter.content" />

<TextBlock :intro="$page.frontmatter.pagos" />

<TextBlock :intro="$page.frontmatter.tabla_pagos" />

<style scoped>
  .text-block {
    margin-bottom: 60px;
  }
</style>

