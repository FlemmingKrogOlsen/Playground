(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{23:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r,i,c,a,o,s,l,d,u,b,j,m,h,x,p=t(1),O=t.n(p),g=t(13),f=t.n(g),v=t(3),k=(t(23),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),c(e),a(e)}))}),y=t(6),w=t(2),q=t(4),A=Object(v.b)(r||(r=Object(q.a)(['\n  &::before,\n  &::after {\n    content: "";\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 1px;\n    background-color: lightgray;\n    box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.25);\n  }\n\n  &::before {\n    top: ',"px;\n  }\n\n  &::after {\n    bottom: ","px;\n  }\n"])),16,16),C=v.c.header(i||(i=Object(q.a)(["\n  ",";\n  position: relative;\n  background-color: ",";\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  a {\n    text-decoration: none;\n  }\n"])),A,(function(e){return e.theme.main})),I=Object(v.c)(y.b)(c||(c=Object(q.a)(["\n  font-size: 3rem;\n  color: white;\n  font-weight: 700;\n"]))),F=Object(v.c)(y.c)(a||(a=Object(q.a)(["\n  font-size: 1.25rem;\n  line-height: 2.25rem;\n  color: ",";\n  &.active {\n    color: ",";\n  }\n  &:not(:first-child) {\n    margin-left: 1rem;\n  }\n"])),(function(e){return e.theme.inactiveColor}),(function(e){return e.theme.activeColor})),L=v.c.footer(o||(o=Object(q.a)(["\n  position: fixed;\n  bottom: 0;\n  background-color: ",";\n  padding: 0.5rem 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  a {\n    text-decoration: none;\n    color: white;\n  }  \n"])),(function(e){return e.theme.main})),D=v.c.img(s||(s=Object(q.a)(["\n  margin-left: 0.5rem;\n  display: inline-block;\n  vertical-align: middle;\n  &:hover {\n    filter: drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.75));\n  }\n"]))),S=v.c.div(l||(l=Object(q.a)(["\n  max-width: ","px;\n  margin: auto;\n"])),(function(e){return e.maxWidth})),T=t(0),R=[{id:1,url:"mailto:flemming@krogolsen.dk",image:"/images/email-14-32.png",imageAlt:"Email"},{id:2,url:"https://www.linkedin.com/in/flemmingkrogolsen/",image:"/images/linkedin-4-32.png",imageAlt:"LinkedIn"},{id:3,url:"https://github.com/FlemmingKrogOlsen",image:"/images/GitHub-Mark-Light-32px.png",imageAlt:"GitHub"}],z=function(){return Object(T.jsx)(T.Fragment,{children:R.map((function(e){return Object(T.jsx)("a",{href:e.url,rel:"noreferrer",target:"_blank",children:Object(T.jsx)(D,{src:e.image,alt:e.imageAlt})},e.id)}))})},P=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(C,{children:[Object(T.jsx)(I,{to:"/",children:"PLAYGROUND"}),Object(T.jsxs)("nav",{children:[Object(T.jsx)(F,{to:"/invoices",children:"Invoices"}),Object(T.jsx)(F,{to:"/about",children:"About"})]})]}),Object(T.jsx)(S,{maxWidth:1e3,children:Object(T.jsx)(w.a,{})}),Object(T.jsx)(L,{children:Object(T.jsx)(z,{})})]})},W=v.c.main(d||(d=Object(q.a)(["\n    padding: 1rem;\n    width: 100%;\n"]))),$=function(){return Object(T.jsxs)(W,{children:[Object(T.jsx)("h2",{children:"Home"}),Object(T.jsx)("p",{children:"React Router v6 tutorial with typescript"})]})},_="20px",G="1deg",H="rgba(0, 0, 0, 0.3) 0px 15px 30px 0px, rgba(0, 0, 0, 0.3) 0px 5px 10px 0px",E=v.c.header(u||(u=Object(q.a)(["\n    font-size: 1.5rem;\n    padding-bottom: 1rem;\n"]))),M=v.c.div(b||(b=Object(q.a)(["\nposition: relative;\nwidth: calc(100% - 2rem);\nmargin: 1rem auto;\nbackground-color: white;\nborder-radius: 0.5rem;\npadding: 0.75rem;\nmax-width: 800px;\nbox-shadow: ",";\n&:hover {\n  &::after {\n    transform: rotate(calc("," * -1));\n  }\n\n  &::before {\n    transform: rotate(",');\n  }\n\n}\n\n&::after ,&::before {\n  content: "";\n  transition: all 1s ease-in-out;\n  box-shadow:',";\n  position: absolute;\n  top: 0;\n  left: calc(("," / 2) * -1);\n  width: calc(100% + ",");\n  height: calc(100% + ",");\n  z-index: -1;\n  opacity: 0.3;\n  border-radius: 0.5rem;\n}\n\n&::after {\n  transform: rotate(",");\n  background-color: hsl(0, 0%, 50%);\n\n}\n\n&::before {\n  transform: rotate(calc("," * -1));\n  background-color: hsl(0, 0%, 83%);\n}\n"])),H,G,G,H,_,_,"5px",G,G),B=function(e){var n=e.header,t=e.children;return Object(T.jsxs)(M,{children:[Object(T.jsx)(E,{children:n}),t]})},J=function(){return Object(T.jsxs)(W,{children:[Object(T.jsx)("h2",{children:"About"}),Object(T.jsx)(B,{header:"Have to think about this !!!",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti dolorem ipsam quas reiciendis neque earum reprehenderit nulla sunt cupiditate ducimus deserunt libero tempore magnam quasi sed, laboriosam possimus corporis molestiae nostrum pariatur alias praesentium. Accusantium, ipsa quo deserunt libero esse numquam molestiae qui totam perferendis illum cum. Atque blanditiis, laudantium quos nostrum consequatur iure fugit eveniet architecto quisquam quod ex esse ab accusantium veniam cupiditate illum iusto rerum facere at consequuntur explicabo natus mollitia ducimus? Omnis in deserunt perspiciatis similique quisquam, rerum consequuntur accusantium facilis, qui amet culpa, cupiditate perferendis eius veritatis! Asperiores tempore dolor, voluptates accusantium quas quaerat?"}),Object(T.jsx)("h3",{style:{marginTop:"40px"},children:"What was used?"}),Object(T.jsx)("table",{style:{width:"100%"},children:Object(T.jsxs)("tbody",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"React Typescript"}),Object(T.jsx)("td",{children:"v 17.0.2 / v 4.1.2"}),Object(T.jsx)("td",{style:{textAlign:"right"},children:Object(T.jsx)("a",{href:" https://create-react-app.dev/",rel:"noreferrer",target:"_blank",children:"link"})})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"React Router"}),Object(T.jsx)("td",{children:"v 6.0.2"}),Object(T.jsx)("td",{style:{textAlign:"right"},children:Object(T.jsx)("a",{href:"https://reactrouter.com/",rel:"noreferrer",target:"_blank",children:"link"})})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"Styled-Components"}),Object(T.jsx)("td",{children:"v 5.3.3"}),Object(T.jsx)("td",{style:{textAlign:"right"},children:Object(T.jsx)("a",{href:"https://styled-components.com/",rel:"noreferrer",target:"_blank",children:"link"})})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"Github Pages Deploy"}),Object(T.jsx)("td",{children:"v 3.2.3"}),Object(T.jsx)("td",{style:{textAlign:"right"},children:Object(T.jsx)("a",{href:"https://github.com/tschaub/gh-pages",rel:"noreferrer",target:"_blank",children:"link"})})]})]})}),Object(T.jsx)("hr",{style:{margin:"20px 0"}}),"npx create-react-app --template typescript",Object(T.jsx)("br",{}),"npm install react-router-dom@6 history@5 @types/react-router-dom",Object(T.jsx)("br",{}),"npm install styled-components @types/styled-components npm install gh-pages --save-dev"]})},N=t(7),K=t(17),U=t(18),V=[{name:"Santa Monica",number:1995,amount:"$10,800",due:"12/05/1995"},{name:"Stankonia",number:2e3,amount:"$8,000",due:"10/31/2000"},{name:"Ocean Avenue",number:2003,amount:"$9,500",due:"07/22/2003"},{name:"Tubthumper",number:1997,amount:"$14,000",due:"09/01/1997"},{name:"Wide Open Spaces",number:1998,amount:"$4,600",due:"01/27/2998"}],Y=["to"],Q=function(e){var n=e.to,t=Object(U.a)(e,Y),r=Object(w.f)();return Object(T.jsx)(X,Object(K.a)({to:n+r.search},t))},X=Object(v.c)(y.c)(j||(j=Object(q.a)(["\n  display: block;\n  margin: 1rem 0;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.activeColor}),(function(e){return e.theme.inactiveColor})),Z=v.c.header(m||(m=Object(q.a)(["\n  background: ",";\n  padding:  1rem;\n  width: 100%;\n  color: white;\n"])),(function(e){return e.theme.main})),ee=v.c.div(h||(h=Object(q.a)(["\n  display: flex;\n  nav {\n    border-right: 1px solid;\n    padding: 1rem;\n    height: calc(100vh - 88px);\n  }\n  input {\n    padding: 0.5rem;\n    border-radius: 7px;\n    border: 1px solid black;\n    outline: none;\n    font-size: 1.75rem;\n    &:focus-visible {\n      background-color: #f3f3f3;\n    }\n  }\n"]))),ne=function(){return Object(T.jsx)(W,{children:Object(T.jsx)(Z,{children:"Select an invoice"})})},te=function(){var e=V,n=Object(y.d)(),t=Object(N.a)(n,2),r=t[0],i=t[1];return Object(T.jsxs)(ee,{children:[Object(T.jsxs)("nav",{children:[Object(T.jsx)("input",{value:r.get("filter")||"",onChange:function(e){var n=e.target.value;i(n?{filter:n}:{})}}),e.filter((function(e){var n=r.get("filter");return!n||e.name.toLowerCase().startsWith(n.toLowerCase())})).map((function(e){return Object(T.jsx)(Q,{to:"/invoices/".concat(e.number),children:e.name},e.number)}))]}),Object(T.jsx)(w.a,{})]})},re=function(){var e,n=Object(w.g)(),t=Object(w.h)(),r=(e=parseInt(t.invoiceId||"0",10),V.find((function(n){return n.number===e})));return Object(T.jsx)(W,{children:r?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("h2",{children:["Total Due: ",r.amount]}),Object(T.jsxs)("p",{children:[r.name,": ",r.number]}),Object(T.jsxs)("p",{children:["Due Date: ",r.due]}),Object(T.jsx)("p",{children:Object(T.jsx)("button",{onClick:function(){!function(e){V=V.filter((function(n){return n.number!==e}))}(r?r.number:0),n("/invoices")},children:"Delete"})})]}):Object(T.jsx)("div",{children:"Invoice Not found"})})},ie=v.c.main(x||(x=Object(q.a)(["\n    padding: 1rem;\n"]))),ce=function(e){var n=e.title;return Object(T.jsxs)(ie,{children:[Object(T.jsx)("h1",{children:n}),Object(T.jsx)("p",{children:"This is the error page. If you see this page, something went wrong."})]})},ae=function(){return Object(T.jsx)(y.a,{children:Object(T.jsx)(w.d,{children:Object(T.jsxs)(w.b,{element:Object(T.jsx)(P,{}),children:[Object(T.jsx)(w.b,{path:"/",element:Object(T.jsx)($,{})}),Object(T.jsx)(w.b,{path:"/about",element:Object(T.jsx)(J,{})}),Object(T.jsxs)(w.b,{path:"/invoices",element:Object(T.jsx)(te,{}),children:[Object(T.jsx)(w.b,{index:!0,element:Object(T.jsx)(ne,{})}),Object(T.jsx)(w.b,{path:":invoiceId",element:Object(T.jsx)(re,{})})]}),Object(T.jsx)(w.b,{path:"*",element:Object(T.jsx)(ce,{title:"Error 404 : Page not found"})})]})})})};f.a.render(Object(T.jsx)(O.a.StrictMode,{children:Object(T.jsx)(v.a,{theme:{main:"#123456",inactiveColor:"#8f9ba7",activeColor:"#c8d1db"},children:Object(T.jsx)(ae,{})})}),document.getElementById("root")),k()}},[[29,1,2]]]);
//# sourceMappingURL=main.4c4aa70a.chunk.js.map