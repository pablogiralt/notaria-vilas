(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(t,e,r){},159:function(t,e,r){var n=r(0),o=r(160);n({target:"Array",stat:!0,forced:!r(102)((function(t){Array.from(t)}))},{from:o})},160:function(t,e,r){"use strict";var n=r(37),o=r(11),a=r(101),i=r(99),c=r(13),l=r(58),u=r(100);t.exports=function(t){var e,r,s,f,d,p,g=o(t),v="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,w=void 0!==m,y=u(g),A=0;if(w&&(m=n(m,h>2?arguments[2]:void 0,2)),null==y||v==Array&&i(y))for(r=new v(e=c(g.length));e>A;A++)p=w?m(g[A],A):g[A],l(r,A,p);else for(d=(f=y.call(g)).next,r=new v;!(s=d.call(f)).done;A++)p=w?a(f,m,[s.value,A],!0):s.value,l(r,A,p);return r.length=A,r}},161:function(t,e,r){"use strict";var n=r(140);r.n(n).a},195:function(t,e,r){"use strict";r.r(e);r(59),r(159),r(97),r(98),r(41),r(61);var n={computed:{isSingleProject:function(){var t=this.$route.path;if(t.includes("works")&&t.length>="/works/".length+1)return!0}},updated:function(){document.querySelectorAll("p img").forEach((function(t){var e=t.parentNode,r=e.children,n=document.createDocumentFragment();Array.from(r).forEach((function(t){n.appendChild(t)})),e.parentNode.replaceChild(n,e)}))}},o=(r(161),r(27)),a=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("Navbar",{attrs:{logo:t.$site.themeConfig.logo,sticky:!0}}),t._v(" "),r("div",[t.isSingleProject?r("div",[r("SingleProjectHeader",{attrs:{title:t.$page.frontmatter.title,year:t.$page.frontmatter.year.toString(),categories:t.$page.frontmatter.categories}})],1):t._e(),t._v(" "),r("Content")],1),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.default=a.exports}}]);