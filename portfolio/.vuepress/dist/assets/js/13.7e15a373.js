(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{138:function(t,r,e){"use strict";var n=e(0),s=e(57),i=e(11),o=e(2),a=e(35),c=[],u=c.sort,l=o((function(){c.sort(void 0)})),f=o((function(){c.sort(null)})),d=a("sort");n({target:"Array",proto:!0,forced:l||!f||!d},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),s(t))}})},139:function(t,r,e){var n=e(12),s=Date.prototype,i=s.toString,o=s.getTime;new Date(NaN)+""!="Invalid Date"&&n(s,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},197:function(t,r,e){"use strict";e.r(r);e(17),e(138),e(139),e(94);var n={computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/servicios/")&&!t.frontmatter.services_index})).sort((function(t,r){return new Date(r.frontmatter.date)-new Date(t.frontmatter.date)}))}}},s=e(27),i=Object(s.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"services"},t._l(t.posts,(function(r){return e("router-link",{key:r.title,staticClass:"post",attrs:{to:r.path}},[e("h2",[t._v(t._s(r.frontmatter.title))])])})),1)}),[],!1,null,"6dddd5cb",null);r.default=i.exports}}]);