(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r,c,i,s,b,a,o,j,l,d,u,x,m,h,O,p=n(1),g=n.n(p),f=n(13),v=n.n(f),k=n(3),w=(n(23),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))}),y=n(6),q=n(2),C=n(4),A=Object(k.b)(r||(r=Object(C.a)(['\n  &::before,\n  &::after {\n    content: "";\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 1px;\n    background-color: lightgray;\n    box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.25);\n  }\n\n  &::before {\n    top: ',"px;\n  }\n\n  &::after {\n    bottom: ","px;\n  }\n"])),16,16),I=k.c.header(c||(c=Object(C.a)(["\n  ",";\n  position: relative;\n  background-color: ",";\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  a {\n    text-decoration: none;\n  }\n"])),A,(function(e){return e.theme.main})),F=Object(k.c)(y.b)(i||(i=Object(C.a)(["\n  font-size: 3rem;\n  color: white;\n  font-weight: 700;\n"]))),P=Object(k.c)(y.c)(s||(s=Object(C.a)(["\n  font-size: 1.25rem;\n  line-height: 2.25rem;\n  color: ",";\n  &.active {\n    color: ",";\n  }\n  &:not(:first-child) {\n    margin-left: 1rem;\n  }\n"])),(function(e){return e.theme.inactiveColor}),(function(e){return e.theme.activeColor})),D=k.c.footer(b||(b=Object(C.a)(["\n  position: fixed;\n  bottom: 0;\n  background-color: ",";\n  padding: 0.5rem 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  a {\n    text-decoration: none;\n    color: white;\n  }  \n"])),(function(e){return e.theme.main})),H=k.c.img(a||(a=Object(C.a)(["\n  margin-left: 0.5rem;\n  display: inline-block;\n  vertical-align: middle;\n  &:hover {\n    filter: drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.75));\n  }\n"]))),L=k.c.div(o||(o=Object(C.a)(["\n  max-width: ","px;\n  margin: auto;\n"])),(function(e){return e.maxWidth})),T=n(0),S=[{id:1,url:"mailto:flemming@krogolsen.dk",image:"/images/email-14-32.png",imageAlt:"Email"},{id:2,url:"https://www.linkedin.com/in/flemmingkrogolsen/",image:"/images/linkedin-4-32.png",imageAlt:"LinkedIn"},{id:3,url:"https://github.com/FlemmingKrogOlsen",image:"/images/GitHub-Mark-Light-32px.png",imageAlt:"GitHub"}],z=function(){return Object(T.jsx)("div",{children:S.map((function(e){return Object(T.jsx)("a",{href:e.url,rel:"noreferrer",target:"_blank",children:Object(T.jsx)(H,{src:"/Playground/"+e.image,alt:e.imageAlt})},e.id)}))})},R=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(I,{children:[Object(T.jsx)(F,{to:"/",children:"PLAYGROUND"}),Object(T.jsxs)("nav",{children:[Object(T.jsx)(P,{to:"/invoices",children:"Invoices"}),Object(T.jsx)(P,{to:"/about",children:"About"})]})]}),Object(T.jsx)(L,{maxWidth:1e3,children:Object(T.jsx)(q.a,{})}),Object(T.jsxs)(D,{children:[Object(T.jsx)("div",{style:{lineHeight:"2rem"},children:Object(T.jsx)(y.b,{to:"/",children:"flemmingkrogolsen.github.io/Playground/"})}),Object(T.jsx)(z,{})]})]})},W=k.c.main(j||(j=Object(C.a)(["\n    padding: 1rem;\n    width: 100%;\n    background-color: white;\n    height: calc(100vh - 170px); // 90 + 48 + 16 + 16 = 170 (( Header + Footer + MarginTop + MarginBottom ))\n    margin: 1rem 0;\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px 0px inset,rgba(0, 0, 0, 0.3) 0px -5px 10px 0px inset; \n    overflow-y: auto;\n\n    // Firefox scrollbar support\n    scrollbar-color: "," transparent;\n    scrollbar-width: thin;\n\n    // Webkit scrollbar support\n    &::-webkit-scrollbar {\n      width: 0.5rem;\n      background-color: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n      background: linear-gradient(",", rgba(18, 52, 86, 0.5));\n    }\n"])),(function(e){return e.theme.main}),(function(e){return e.theme.main})),G=function(){return Object(T.jsxs)(W,{children:[Object(T.jsx)("h2",{children:"Home"}),Object(T.jsx)("p",{children:"React Router v6 tutorial with typescript"})]})},M="20px",$="1deg",_="rgba(0, 0, 0, 0.3) 0px 15px 30px 0px, rgba(0, 0, 0, 0.3) 0px 5px 10px 0px",B=k.c.div(l||(l=Object(C.a)(["\n  position: relative;\n  z-index: 1;\n  width: calc(100% - 2rem);\n  margin: 1rem auto;\n  max-width: 800px;\n"]))),E=k.c.div(d||(d=Object(C.a)(["\nbackground-color: white;\nborder-radius: 0.5rem;\npadding: 0.75rem;\nbox-shadow: ",";\n&:hover {\n  &::after {\n    transform: rotate(calc("," * -1));\n  }\n  &::before {\n    transform: rotate(",');\n  }\n}\n\n&::after ,&::before {\n  content: "";\n  transition: all 1s ease-in-out;\n  box-shadow:',";\n  position: absolute;\n  top: 0;\n  left: calc(("," / 2) * -1);\n  width: calc(100% + ",");\n  height: calc(100% + ",");\n  opacity: 0.3;\n  border-radius: 0.5rem;\n  z-index: -1;\n}\n\n&::after {\n  transform: rotate(",");\n  background-color: hsl(0, 0%, 50%);\n}\n\n&::before {\n  transform: rotate(calc("," * -1));\n  background-color: hsl(0, 0%, 83%);\n}\n"])),_,$,$,_,M,M,"5px",$,$),J=k.c.header(u||(u=Object(C.a)(["\n    font-size: 1.5rem;\n    padding-bottom: 1rem;\n"]))),N=function(e){var t=e.header,n=e.children;return Object(T.jsx)(B,{children:Object(T.jsxs)(E,{children:[Object(T.jsx)(J,{children:t}),n]})})},K=function(){return Object(T.jsxs)(W,{children:[Object(T.jsx)("h2",{children:"About"}),Object(T.jsx)(N,{header:"Have to think about this !!!",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti dolorem ipsam quas reiciendis neque earum reprehenderit nulla sunt cupiditate ducimus deserunt libero tempore magnam quasi sed, laboriosam possimus corporis molestiae nostrum pariatur alias praesentium. Accusantium, ipsa quo deserunt libero esse numquam molestiae qui totam perferendis illum cum. Atque blanditiis, laudantium quos nostrum consequatur iure fugit eveniet architecto quisquam quod ex esse ab accusantium veniam cupiditate illum iusto rerum facere at consequuntur explicabo natus mollitia ducimus? Omnis in deserunt perspiciatis similique quisquam, rerum consequuntur accusantium facilis, qui amet culpa, cupiditate perferendis eius veritatis! Asperiores tempore dolor, voluptates accusantium quas quaerat?"}),Object(T.jsx)("h3",{style:{marginTop:"40px"},children:"What was used?"}),Object(T.jsx)("table",{style:{width:"100%"},children:Object(T.jsxs)("tbody",{children:[Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"React Typescript"}),Object(T.jsx)("td",{children:"v 17.0.2 / v 4.1.2"}),Object(T.jsx)("td",{style:{textAlign:"right"},children:Object(T.jsx)("a",{href:" https://create-react-app.dev/",rel:"noreferrer",target:"_blank",children:"link"})})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"React Router"}),Object(T.jsx)("td",{children:"v 6.0.2"}),Object(T.jsx)("td",{style:{textAlign:"right"},children:Object(T.jsx)("a",{href:"https://reactrouter.com/",rel:"noreferrer",target:"_blank",children:"link"})})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"Styled-Components"}),Object(T.jsx)("td",{children:"v 5.3.3"}),Object(T.jsx)("td",{style:{textAlign:"right"},children:Object(T.jsx)("a",{href:"https://styled-components.com/",rel:"noreferrer",target:"_blank",children:"link"})})]}),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:"GH Pages (GitHub Pages - Deploy CI/CD)"}),Object(T.jsx)("td",{children:"v 3.2.3"}),Object(T.jsx)("td",{style:{textAlign:"right"},children:Object(T.jsx)("a",{href:"https://github.com/tschaub/gh-pages",rel:"noreferrer",target:"_blank",children:"link"})})]})]})}),Object(T.jsx)("hr",{style:{margin:"20px 0"}}),"npx create-react-app --template typescript",Object(T.jsx)("br",{}),"npm install react-router-dom@6 history@5 @types/react-router-dom",Object(T.jsx)("br",{}),"npm install styled-components @types/styled-components",Object(T.jsx)("br",{}),"npm install gh-pages --save-dev",Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{})]})},U=n(7),V=n(17),Y=n(18),Q=[{name:"Santa Monica",number:1995,amount:"$10,800",due:"12/05/1995"},{name:"Stankonia",number:2e3,amount:"$8,000",due:"10/31/2000"},{name:"Ocean Avenue",number:2003,amount:"$9,500",due:"07/22/2003"},{name:"Tubthumper",number:1997,amount:"$14,000",due:"09/01/1997"},{name:"Wide Open Spaces",number:1998,amount:"$4,600",due:"01/27/2998"}],X=["to"],Z=function(e){var t=e.to,n=Object(Y.a)(e,X),r=Object(q.f)();return Object(T.jsx)(ee,Object(V.a)({to:t+r.search},n))},ee=Object(k.c)(y.c)(x||(x=Object(C.a)(["\n  display: block;\n  margin: 1rem 0;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.activeColor}),(function(e){return e.theme.inactiveColor})),te=k.c.header(m||(m=Object(C.a)(["\n  background: ",";\n  padding:  1rem;\n  width: 100%;\n  color: white;\n"])),(function(e){return e.theme.main})),ne=k.c.div(h||(h=Object(C.a)(["\n  display: flex;\n  nav {\n    border-right: 1px solid;\n    padding: 1rem;\n    height: calc(100vh - 88px);\n  }\n  input {\n    padding: 0.5rem;\n    border-radius: 7px;\n    border: 1px solid black;\n    outline: none;\n    font-size: 1.75rem;\n    &:focus-visible {\n      background-color: #f3f3f3;\n    }\n  }\n"]))),re=function(){return Object(T.jsx)(W,{children:Object(T.jsx)(te,{children:"Select an invoice"})})},ce=function(){var e=Q,t=Object(y.d)(),n=Object(U.a)(t,2),r=n[0],c=n[1];return Object(T.jsxs)(ne,{children:[Object(T.jsxs)("nav",{children:[Object(T.jsx)("input",{value:r.get("filter")||"",onChange:function(e){var t=e.target.value;c(t?{filter:t}:{})}}),e.filter((function(e){var t=r.get("filter");return!t||e.name.toLowerCase().startsWith(t.toLowerCase())})).map((function(e){return Object(T.jsx)(Z,{to:"/invoices/".concat(e.number),children:e.name},e.number)}))]}),Object(T.jsx)(q.a,{})]})},ie=function(){var e,t=Object(q.g)(),n=Object(q.h)(),r=(e=parseInt(n.invoiceId||"0",10),Q.find((function(t){return t.number===e})));return Object(T.jsx)(W,{children:r?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("h2",{children:["Total Due: ",r.amount]}),Object(T.jsxs)("p",{children:[r.name,": ",r.number]}),Object(T.jsxs)("p",{children:["Due Date: ",r.due]}),Object(T.jsx)("p",{children:Object(T.jsx)("button",{onClick:function(){!function(e){Q=Q.filter((function(t){return t.number!==e}))}(r?r.number:0),t("/invoices")},children:"Delete"})})]}):Object(T.jsx)("div",{children:"Invoice Not found"})})},se=k.c.main(O||(O=Object(C.a)(["\n    padding: 1rem;\n"]))),be=function(e){var t=e.title;return Object(T.jsxs)(se,{children:[Object(T.jsx)("h1",{children:t}),Object(T.jsx)("p",{children:"This is the error page. If you see this page, something went wrong."})]})},ae=function(){return Object(T.jsx)(y.a,{basename:"/Playground",children:Object(T.jsx)(q.d,{children:Object(T.jsxs)(q.b,{element:Object(T.jsx)(R,{}),children:[Object(T.jsx)(q.b,{path:"/",element:Object(T.jsx)(G,{})}),Object(T.jsx)(q.b,{path:"/about",element:Object(T.jsx)(K,{})}),Object(T.jsxs)(q.b,{path:"/invoices",element:Object(T.jsx)(ce,{}),children:[Object(T.jsx)(q.b,{index:!0,element:Object(T.jsx)(re,{})}),Object(T.jsx)(q.b,{path:":invoiceId",element:Object(T.jsx)(ie,{})})]}),Object(T.jsx)(q.b,{path:"*",element:Object(T.jsx)(be,{title:"Error 404 : Page not found"})})]})})})};v.a.render(Object(T.jsx)(g.a.StrictMode,{children:Object(T.jsx)(k.a,{theme:{main:"#123456",inactiveColor:"#8f9ba7",activeColor:"#c8d1db"},children:Object(T.jsx)(ae,{})})}),document.getElementById("root")),w()}},[[29,1,2]]]);
//# sourceMappingURL=main.393abf16.chunk.js.map