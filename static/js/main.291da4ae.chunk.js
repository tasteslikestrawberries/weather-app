(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{27:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(38),r=c.n(n),s=(c(27),c(14)),i=c(6);function l(){var e=Object(i.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var j=c(12),o=c(18),b=c(15),d=c(16),h=c(40),O=c.n(h),u=c(0),m=function(){var e=Object(o.b)(),t=e.loginWithRedirect,c=e.logout,n=e.isAuthenticated,r=Object(a.useState)(!1),i=Object(j.a)(r,2),l=i[0],h=i[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"hamburgerWrapper",children:Object(u.jsx)("button",{className:"hamburgerBtn",onClick:function(){return h(!l)},children:Object(u.jsx)(d.Icon,{className:"hamburgerIcon",icon:O.a,style:{color:"#0d6efd",fontSize:"45px"}})})}),l?Object(u.jsx)("nav",{className:"smallNav",children:Object(u.jsxs)("ul",{children:[n?Object(u.jsx)("li",{children:Object(u.jsx)(b.a,{onClick:function(){return c()},className:"btn-lg",type:"submit",value:"search",variant:"primary",style:{backgroundColor:"#0854c4",fontSize:"large"},children:"Log Out"})}):Object(u.jsx)("li",{children:Object(u.jsx)(b.a,{onClick:function(){return t()},className:"btn-lg",type:"submit",value:"search",variant:"primary",style:{backgroundColor:"#0854c4",fontSize:"large"},children:"Log In"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/weather-app/myprofile",children:"My Profile"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/weather-app/",children:"Weather"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/weather-app/about",children:"About"})})]})}):null,Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[n?Object(u.jsx)("li",{children:Object(u.jsx)(b.a,{onClick:function(){return c()},className:"btn-lg",type:"submit",value:"search",variant:"primary",style:{backgroundColor:"#0854c4",fontSize:"large"},children:"Log Out"})}):Object(u.jsx)("li",{children:Object(u.jsx)(b.a,{onClick:function(){return t()},className:"btn-lg",type:"submit",value:"search",variant:"primary",style:{backgroundColor:"#0854c4",fontSize:"large"},children:"Log In"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/myprofile",children:"My Profile"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/",children:"Weather"})}),Object(u.jsx)("li",{children:Object(u.jsx)(s.b,{to:"/about",children:"About"})})]})})]})},x=c(26),p=c.n(x),g=c(41),f=c(42),y=c.n(f),v=c(20),S=function(e){var t=e.handleSubmit,c=e.isError;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(v.a,{className:"box",onSubmit:t,children:[Object(u.jsx)(v.a.Group,{className:"mb-3",controlId:"country",children:Object(u.jsx)(v.a.Control,{type:"text",placeholder:"Country"})}),Object(u.jsx)(v.a.Group,{className:"mb-3",controlId:"city",children:Object(u.jsx)(v.a.Control,{type:"text",placeholder:"City"})}),Object(u.jsx)("div",{className:"col text-center",children:Object(u.jsx)(b.a,{className:"btn btn-primary btn-lg",type:"submit",variant:"primary",style:{marginTop:"1rem"},children:" Get Weather"})})]}),c&&Object(u.jsx)("span",{className:"errMsg",style:{display:"block"},children:"Something went wrong. Please check if your input is valid."})]})},N=c(43),_=function(e){var t=e.isInitialRender,c=e.isLoading,a=e.isError,n=e.city,r=e.country,s=e.temp,i=e.temp_max,l=e.temp_min,j=e.description,o=e.icon;return Object(u.jsx)(u.Fragment,{children:c?Object(u.jsx)("div",{className:"loader"}):Object(u.jsx)("div",{className:"weatherTable",children:t||a?null:Object(u.jsxs)(u.Fragment,{children:[n&&r?Object(u.jsx)("span",{className:"cityCountry",children:Object(u.jsxs)("h3",{children:[n,", ",r]})}):null,Object(u.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,style:{maxWidth:"100%"},children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"\xb0C"}),Object(u.jsx)("th",{children:"Min./Max. \xb0C"}),Object(u.jsx)("th",{children:"Description"})]})}),Object(u.jsx)("tbody",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"align-middle",children:s?Object(u.jsxs)("span",{children:[Math.floor(s),"\xb0"]}):null}),Object(u.jsxs)("td",{className:"align-middle",children:["  ",l&&i?Object(u.jsxs)("span",{children:[Math.floor(l),"\xb0 - ",Math.floor(i),"\xb0"]}):null]}),Object(u.jsxs)("td",{className:"align-middle",children:[Object(u.jsx)("img",{className:"openWeatherIcon",src:"http://openweathermap.org/img/w/".concat(o,".png"),alt:"weathericon"}),j]})]})})]})]})})})},C=c(44),E=c.n(C),T=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),l=i[0],o=i[1],b=Object(a.useState)(""),h=Object(j.a)(b,2),O=h[0],m=h[1],x=Object(a.useState)(""),f=Object(j.a)(x,2),v=f[0],N=f[1],C=Object(a.useState)(""),T=Object(j.a)(C,2),w=T[0],I=T[1],A=Object(a.useState)(""),k=Object(j.a)(A,2),P=k[0],R=k[1],W=Object(a.useState)(""),D=Object(j.a)(W,2),F=D[0],L=D[1],H=Object(a.useState)(!1),K=Object(j.a)(H,2),U=K[0],M=K[1],z=Object(a.useState)(!1),B=Object(j.a)(z,2),G=B[0],V=B[1],J=Object(a.useState)(!0),q=Object(j.a)(J,2),Y=q[0],Q=q[1],X=function(){var t=Object(g.a)(p.a.mark((function t(c){var a,n,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=c.target.elements.city.value,n=c.target.elements.country.value,a){t.next=5;break}return alert("Field cannot be empty. Please enter city."),t.abrupt("return");case 5:if(Number.isNaN(Number(a))){t.next=9;break}return alert("Please enter valid city name."),t.abrupt("return");case 9:if(V(!1),M(!0),!a){t.next=32;break}return t.prev=13,t.next=16,y.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(n,"&mode=json&units=metric&appid=").concat(e));case 16:s=t.sent,r(s.data.name),o(s.data.sys.country),I(s.data.main.temp),L(s.data.main.temp_max),R(s.data.main.temp_min),m(s.data.weather[0].description),N(s.data.weather[0].icon),Y&&Q(!1),t.next=31;break;case 27:t.prev=27,t.t0=t.catch(13),console.log(t.t0),V(!0);case 31:case 32:M(!1);case 33:case"end":return t.stop()}}),t,null,[[13,27]])})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(d.Icon,{className:"weatherIcon",icon:E.a}),Object(u.jsx)("span",{children:Object(u.jsx)("h1",{children:"Weather App"})})]}),Object(u.jsxs)("div",{className:"homeContainer",children:[Object(u.jsx)(S,{handleSubmit:function(e){e.preventDefault(),X(e)},isError:G}),Object(u.jsx)(_,{isInitialRender:Y,isLoading:U,isError:G,city:n,country:l,temp:w,temp_max:F,temp_min:P,description:O,icon:v})]})]})},w=function(){var e=Object(o.b)(),t=e.user,c=e.loginWithRedirect,a=e.isAuthenticated;return Object(u.jsx)(u.Fragment,{children:a?Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("img",{className:"userLogo",src:t.picture,alt:t.name}),Object(u.jsx)("span",{children:Object(u.jsx)("h1",{children:t.name})}),Object(u.jsx)("span",{children:Object(u.jsxs)("h3",{children:["(",Object(u.jsxs)("i",{children:[t.nickname,")"]})]})}),Object(u.jsx)("span",{children:Object(u.jsx)("h4",{children:t.email})})]}):Object(u.jsxs)("div",{className:"noUser",children:["Please \xa0 ",Object(u.jsx)(b.a,{onClick:function(){return c()},type:"submit",value:"search",variant:"primary",style:{fontSize:"large"},children:"Log In"})," \xa0 to view this page."]})})},I=c(45),A=c.n(I),k=c(46),P=c.n(k),R=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(d.Icon,{className:"loginIcon",icon:A.a,style:{color:"#0d6efd",fontSize:"90px"}}),Object(u.jsx)("span",{children:Object(u.jsx)("h1",{children:"About"})})]}),Object(u.jsxs)("div",{className:"homeContainer",children:[Object(u.jsx)("h5",{className:"aboutText",style:{fontWeight:"200"},children:"Hello! This app was made to practice OAuth 2.0 authentication and fetching data from external APIs."}),Object(u.jsx)("br",{}),"Check out my Github profile:",Object(u.jsx)("a",{href:"http://github.com/tasteslikestrawberries",style:{color:"#0d6efd"},target:"_blank",rel:"noreferrer",children:Object(u.jsx)(d.Icon,{icon:P.a,style:{fontSize:"43px",color:"#242526",margin:"1rem 0"}})})]})]})},W=(c(83),function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(l,{}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{}),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/about",children:Object(u.jsx)(R,{})}),Object(u.jsx)(i.a,{path:"/myprofile",children:Object(u.jsx)(w,{})}),Object(u.jsx)(i.a,{path:"/",children:Object(u.jsx)(T,{})})]})]})]})}),D=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH0_DOMAIN,F=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH0_CLIENT_ID;r.a.render(Object(u.jsx)(o.a,{domain:D,clientId:F,redirectUri:window.location.origin,children:Object(u.jsx)(W,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.291da4ae.chunk.js.map