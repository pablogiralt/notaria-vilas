(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(t,n,r){"use strict";var a=r(0),i=r(57),e=r(11),s=r(2),o=r(35),u=[],l=u.sort,c=s((function(){u.sort(void 0)})),f=s((function(){u.sort(null)})),_=o("sort");a({target:"Array",proto:!0,forced:c||!f||!_},{sort:function(t){return void 0===t?l.call(e(this)):l.call(e(this),i(t))}})},139:function(t,n,r){var a=r(12),i=Date.prototype,e=i.toString,s=i.getTime;new Date(NaN)+""!="Invalid Date"&&a(i,"toString",(function(){var t=s.call(this);return t==t?e.call(this):"Invalid Date"}))},141:function(t,n,r){},166:function(t,n,r){"use strict";var a=r(141);r.n(a).a},216:function(t,n,r){"use strict";r.r(n);r(17),r(138),r(139),r(94);var a={props:{list:{type:Array,required:!1}},computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/about/")&&!t.frontmatter.about_index})).sort((function(t,n){return new Date(n.frontmatter.date)-new Date(t.frontmatter.date)}))}}},i=(r(166),r(27)),e=Object(i.a)(a,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"about container"},[r("ul",{staticClass:"about__list"},t._l(t.list,(function(n){return r("li",{staticClass:"about__item"},[r("h2",{staticClass:"about__title subtitle-strong"},[t._v("\n        "+t._s(n.about_list_title)+"\n      ")]),t._v(" "),r("div",{staticClass:"about__text",domProps:{innerHTML:t._s(n.about_list_text)}})])})),0)])}),[],!1,null,"3d5c258b",null);n.default=e.exports}}]);