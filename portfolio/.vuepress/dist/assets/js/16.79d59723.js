(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{296:function(e,t,r){},319:function(e,t,r){"use strict";var i=r(296);r.n(i).a},358:function(e,t,r){"use strict";r.r(t);r(87),r(92),r(165),r(166),r(24),r(88);var i={computed:{templateClass:function(){return this.isSingleService?"template-service":this.$page.frontmatter.template?"template-"+this.$page.frontmatter.template:void 0},isSingleProject:function(){var e=this.$route.path;if(e.includes("works")&&e.length>="/works/".length+1)return!0},isSingleService:function(){var e=this.$route.path;if(e.includes("servicios")&&e.length>="/servicios/".length+1)return!0}},updated:function(){document.querySelectorAll("p img").forEach((function(e){var t=e.parentNode,r=t.children,i=document.createDocumentFragment();Array.from(r).forEach((function(e){i.appendChild(e)})),t.parentNode.replaceChild(i,t)}))}},n=(r(319),r(39)),a=Object(n.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("Navbar",{attrs:{logo:e.$site.themeConfig.logo}}),e._v(" "),r("div",{class:e.templateClass},[r("Notice"),e._v(" "),r("div",{staticClass:"template__inner"},[e.isSingleProject?r("div",[r("SingleProjectHeader",{attrs:{title:e.$page.frontmatter.title,year:e.$page.frontmatter.year.toString(),categories:e.$page.frontmatter.categories}})],1):e._e(),e._v(" "),r("Content"),e._v(" "),e.isSingleService?r("ServiceSidebar",{attrs:{sidebar:e.$page.frontmatter.sidebar}}):e._e()],1)],1),e._v(" "),r("Footer")],1)}),[],!1,null,null,null);t.default=a.exports}}]);