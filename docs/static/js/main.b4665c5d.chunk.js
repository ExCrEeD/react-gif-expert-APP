(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(10),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)}})})},d=n(11),j=n(8),l=n(6),f=n.n(l),p=n(9),b=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"2CGUOfkAqP2y5DTK3Y6WKJGFp1NJoVdd",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&api_key=").concat("2CGUOfkAqP2y5DTK3Y6WKJGFp1NJoVdd","&limit=10"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeInDown",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(j.useEffect)((function(){b(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeInDown",children:t}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"loading"}),Object(u.jsx)("div",{className:"cardGrid",children:r.map((function(e){return Object(u.jsx)(m,Object(d.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["one piece"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertAPP"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})]})};n(18);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b4665c5d.chunk.js.map