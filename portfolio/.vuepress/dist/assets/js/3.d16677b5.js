(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(t,e,n){"use strict";var s=n(0),i=n(36),r=n(10),o=n(35),a=[].join,c=i!=Object,u=o("join",",");s({target:"Array",proto:!0,forced:c||!u},{join:function(t){return a.call(r(this),void 0===t?",":t)}})},153:function(t,e,n){"use strict";var s=n(0),i=n(154);s({target:"String",proto:!0,forced:n(155)("link")},{link:function(t){return i(this,"a","href",t)}})},154:function(t,e,n){var s=n(16),i=/"/g;t.exports=function(t,e,n,r){var o=String(s(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),a+">"+o+"</"+e+">"}},155:function(t,e,n){var s=n(2);t.exports=function(t){return s((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},163:function(t,e,n){"use strict";n.r(e);n(58),n(152),n(153),n(59);var s={props:{},data:function(){return{}},computed:{schedules:function(){return this.$site.themeConfig.schedule.schedule_long},transports:function(){return this.$site.themeConfig.transports},contact:function(){var t=[];return this.$site.themeConfig.phones.forEach((function(e){t.push('<a href="tel:'+e.link+'">'+e.visible+"</a>")})),{phones:t.join(" – "),fax:this.$site.themeConfig.fax,email:this.$site.themeConfig.email,socialMedia:this.$site.themeConfig.socialMedia}},address:function(){var t=[],e=[],n=this.$site.themeConfig.address;return this.$site.themeConfig.address.street2&&t.push(this.$site.themeConfig.address.street2),this.$site.themeConfig.address.postalCode&&e.push(this.$site.themeConfig.address.postalCode),this.$site.themeConfig.address.city&&e.push(this.$site.themeConfig.address.city),""!==e&&t.push(e.join(" ")),n.line2=t.join(", "),n}},methods:{}},i=n(27),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("h2",[t._v("Dirección y contacto")]),t._v(" "),n("div",[n("p",[t._v("\n      "+t._s(t.address.street)),n("br"),t._v("\n      "+t._s(t.address.line2)+"\n    ")]),t._v(" "),n("p",[t._v("\n      Email | "+t._s(t.contact.email)),n("br"),t._v("\n      Teléfono | "),n("span",{domProps:{innerHTML:t._s(t.contact.phones)}}),n("br"),t._v("\n      Fax | "+t._s(t.contact.fax)+"\n    ")]),t._v(" "),n("p",[t.transports?n("ul",t._l(t.transports,(function(e){return n("li",[t._v("\n          "+t._s(e.transport_label)+" | "+t._s(e.transport_text)+"\n        ")])})),0):t._e()]),t._v(" "),n("p",[n("strong",[t._v("Horario de atención")]),t._v(" "),t.schedules?n("ul",t._l(t.schedules,(function(e){return n("li",[t._v(t._s(e.item))])})),0):t._e()])])])}),[],!1,null,"7ecfebf5",null);e.default=r.exports}}]);