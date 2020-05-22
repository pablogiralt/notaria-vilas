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
    //['script', {}, `
    //    WebFontConfig = {
    //      google: { families: [ 'Roboto:400,900:latin', 'EB+Garamond:700:latin' ] }
    //    };
    //    (function() {
    //      var wf = document.createElement('script');
    //      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    //        '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    //      wf.type = 'text/javascript';
    //      wf.async = 'true';
    //      var s = document.getElementsByTagName('script')[0];
    //      s.parentNode.insertBefore(wf, s);
    //    })();
    //`]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  }
};