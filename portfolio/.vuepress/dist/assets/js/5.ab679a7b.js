(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(t,n,r){"use strict";var e=r(0),o=r(57),a=r(11),i=r(2),s=r(35),c=[],u=c.sort,l=i((function(){c.sort(void 0)})),f=i((function(){c.sort(null)})),p=s("sort");e({target:"Array",proto:!0,forced:l||!f||!p},{sort:function(t){return void 0===t?u.call(a(this)):u.call(a(this),o(t))}})},138:function(t,n,r){var e=r(12),o=Date.prototype,a=o.toString,i=o.getTime;new Date(NaN)+""!="Invalid Date"&&e(o,"toString",(function(){var t=i.call(this);return t==t?a.call(this):"Invalid Date"}))},147:function(t,n,r){},162:function(t,n,r){"use strict";var e=r(147);r.n(e).a},165:function(t,n,r){"use strict";r.r(n);r(17),r(137),r(138),r(94);var e={computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/works/")&&!t.frontmatter.works_index})).sort((function(t,n){return new Date(n.frontmatter.date)-new Date(t.frontmatter.date)}))}}},o=(r(162),r(27)),a=Object(o.a)(e,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"project-list"},t._l(t.posts,(function(n){return r("router-link",{key:n.title,staticClass:"post",style:{backgroundImage:"url("+n.frontmatter.thumbnail+")"},attrs:{to:n.path,tag:"div"}},[r("div",{staticClass:"info"},[r("h2",[t._v(t._s(n.frontmatter.title))]),t._v(" "),n.frontmatter.description?r("span",[t._v(t._s(n.frontmatter.description))]):t._e()])])})),1)}),[],!1,null,"5afd6978",null);n.default=a.exports}}]);