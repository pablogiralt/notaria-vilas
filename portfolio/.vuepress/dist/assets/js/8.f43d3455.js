(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(s,t,e){"use strict";var i=e(0),n=e(36),r=e(10),a=e(35),d=[].join,o=n!=Object,l=a("join",",");i({target:"Array",proto:!0,forced:o||!l},{join:function(s){return d.call(r(this),void 0===s?",":s)}})},143:function(s,t,e){},165:function(s,t,e){"use strict";var i=e(143);e.n(i).a},209:function(s,t,e){"use strict";e.r(t);e(142);var i={props:{},data:function(){return{}},computed:{schedules:function(){return this.$site.themeConfig.schedule.schedule_long},transports:function(){return this.$site.themeConfig.transports},address:function(){var s=[],t=[],e=this.$site.themeConfig.address;return this.$site.themeConfig.address.street2&&s.push(this.$site.themeConfig.address.street2),this.$site.themeConfig.address.postalCode&&t.push(this.$site.themeConfig.address.postalCode),this.$site.themeConfig.address.city&&t.push(this.$site.themeConfig.address.city),""!==t&&s.push(t.join(" ")),e.line2=s.join(", "),e}},methods:{}},n=(e(165),e(27)),r=Object(n.a)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"address",attrs:{id:"como-llegar"}},[e("h2",{staticClass:"address__title"},[s._v("\n    Cómo llegar\n  ")]),s._v(" "),e("div",[e("ul",{staticClass:"address__block"},[e("li",{staticClass:"address__item"},[s._v(s._s(s.address.street))]),s._v(" "),s.address.line2?e("li",{staticClass:"address__item"},[s._v("\n        "+s._s(s.address.line2)+"\n      ")]):s._e()]),s._v(" "),s.transports?e("ul",{staticClass:"address__block"},s._l(s.transports,(function(t){return e("li",{staticClass:"address__item"},[s._v("\n        "+s._s(t.transport_label)+" | "+s._s(t.transport_text)+"\n      ")])})),0):s._e(),s._v(" "),s.schedules?e("ul",{staticClass:"address__block"},[s._m(0),s._v(" "),s._l(s.schedules,(function(t){return e("li",{staticClass:"address__item"},[s._v("\n        "+s._s(t.item)+"\n      ")])}))],2):s._e()])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("li",{staticClass:"address__item"},[t("strong",[this._v("Horario de atención")])])}],!1,null,"e8884eae",null);t.default=r.exports}}]);