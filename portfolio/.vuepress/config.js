const config = require('../config.json');
module.exports = {
  title: config.title,
  description: config.description,
  base: "/",
  themeConfig: {
    logo: config.logo,
    copy: config.copy,
    footer_frase: config.footer_frase,
    nav: config.navigation,
    phones: config.phones,
    fax: config.fax,
    address: config.address,
    transports: config.transports,
    schedule: config.schedule,
    nav: config.navigation,
    footer_nav: config.footer_navigation,
    email: config.email,
    socialMedia: config.socialMedia,
    notice: config.notice
  },
  head: [
    [
      'link', { rel: "icon", href: config.favicon },
    ],
    [
      'link', { rel: "stylesheet", href: config.headings_font_url }
    ],
    [
      'link', { rel: "stylesheet", href: config.default_font_url }
    ],
    [
      'meta', { name: "viewport", content: "width=device-width,initial-scale=1" }
    ]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};