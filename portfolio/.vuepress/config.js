const config = require('../config.json');
module.exports = {
  title: config.title,
  description: config.description,
  base: "/",
  themeConfig: {
    logo: config.logo,
    footer: config.footer,
    nav: config.navigation,
    phones: config.phones,
    fax: config.fax,
    address: config.address,
    transports: config.transports,
    schedule: config.schedule,
    nav: config.navigation,
    email: config.email,
    socialMedia: config.socialMedia,
  },
  head: [
    ['link', { rel: "icon", href: config.favicon }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
