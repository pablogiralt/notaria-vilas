(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{307:function(t,s,e){},350:function(t,s,e){"use strict";var i=e(307);e.n(i).a},363:function(t,s,e){"use strict";e.r(s);var i={props:{sidebar:{type:Object,required:!0}},data:function(){return{isFixed:!1,scrollPosition:0,sidebarStyles:{}}},methods:{updateScroll:function(){this.scrollPosition=window.scrollY;var t=document.getElementById("header").clientHeight;if(this.scrollPosition>t){var s=this.$refs.sidebar.offsetTop-t-2;this.sidebarStyles.top=s+"px",this.isFixed=!0}else this.isFixed=!1}},mounted:function(){window.addEventListener("scroll",this.updateScroll)}},r=(e(350),e(39)),a=Object(r.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sidebar",staticClass:"sidebar"},[t.sidebar?e("div",{staticClass:"sidebar__inner",class:{"sidebar--fixed":t.isFixed},style:t.sidebarStyles},[t.sidebar.title?e("h2",{staticClass:"sidebar__title"},[t._v("\n\t\t\t"+t._s(t.sidebar.title)+"\n\t\t")]):t._e(),t._v(" "),t.sidebar.text?e("div",{staticClass:"sidebar__text",domProps:{innerHTML:t._s(t.sidebar.text)}}):t._e(),t._v(" "),e("a",{staticClass:"btn sidebar__btn",attrs:{href:"/#contacto"}},[t._v("\n\t\t\t"+t._s(t.sidebar.btn_text)+"\n\t\t")])]):t._e()])}),[],!1,null,"15319fb4",null);s.default=a.exports}}]);