(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(t,e,r){"use strict";var i=r(0),n=r(57),s=r(11),o=r(2),a=r(35),l=[],u=l.sort,c=o((function(){l.sort(void 0)})),p=o((function(){l.sort(null)})),f=a("sort");i({target:"Array",proto:!0,forced:c||!p||!f},{sort:function(t){return void 0===t?u.call(s(this)):u.call(s(this),n(t))}})},138:function(t,e,r){var i=r(12),n=Date.prototype,s=n.toString,o=n.getTime;new Date(NaN)+""!="Invalid Date"&&i(n,"toString",(function(){var t=o.call(this);return t==t?s.call(this):"Invalid Date"}))},140:function(t,e,r){},151:function(t,e,r){"use strict";var i=r(140);r.n(i).a},168:function(t,e,r){"use strict";r.r(e);r(17),r(137),r(138),r(94);var i={props:{title:{type:String,required:!1},pretitle:{type:String,required:!1},list:{type:Array,required:!1}},computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/about/")&&!t.frontmatter.about_index})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}))}}},n=(r(151),r(27)),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about-list"},[t.pretitle?r("h1",{staticClass:"pretitle",domProps:{innerHTML:t._s(t.pretitle)}}):t._e(),t._v(" "),t.title?r("h2",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),r("ul",t._l(t.list,(function(e){return r("li",[r("h2",[t._v(t._s(e.about_list_title))]),t._v(" "),r("div",[t._v(t._s(e.about_list_text))])])})),0)])}),[],!1,null,"def10058",null);e.default=s.exports}}]);