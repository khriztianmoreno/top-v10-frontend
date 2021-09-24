(this.webpackJsonptasks=this.webpackJsonptasks||[]).push([[0],{42:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a.n(r),i=a(6),o=(a(42),a(70)),l=a(5),u=a.n(l),d=a(9),j=a(3),A=a(10),p=a(1);function b(e){var t=e.task,a=e.toggleTask,n=e.deleteTask;return Object(p.jsxs)("li",{"data-testid":"task-item",children:[Object(p.jsx)("span",{role:"button",className:t.completed?"done":null,onClick:function(){return a(t)},"aria-hidden":!0,children:t.title})," ",Object(p.jsx)("button",{type:"button",onClick:function(e){return n(e,t)},children:"x"})]})}b.defaultProps={toggleTask:function(){},deleteTask:null};var O=a(27),h=a.n(O),m="LOGIN",g="LOGOUT",f="LOAD_TASKS",x="ERROR",v="AUTHENTICATED",C="NOT_AUTHENTICATED",N="TOKEN",B=Object({NODE_ENV:"production",PUBLIC_URL:"/top-v10-frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL||"http://localhost:3001";var w=h.a.create({baseURL:B,headers:{Authorization:"Bearer ".concat(localStorage.getItem(N))}}),E=a(28),S=Object(E.a)();var k=function(){var e=Object(i.c)((function(e){return e.tasks})),t=Object(n.useState)({title:""}),a=Object(A.a)(t,2),c=a[0],r=a[1],s=Object(i.b)();Object(n.useEffect)((function(){s(function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/tasks");case 2:a=e.sent,t({type:f,payload:a.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[s]);var o=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({title:c.title})},e.next=5,fetch("http://localhost:3001/tasks",a);case 5:r((function(e){return Object(j.a)(Object(j.a)({},e),{},{title:""})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(e){e.preventDefault()},O=function(e){w.put("http://localhost:3001/tasks/".concat(e.id),{data:Object(j.a)(Object(j.a)({},e),{},{completed:!e.completed})}).then((function(){}))};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Lista de Tareas"}),Object(p.jsx)("ul",{className:"tasks",children:e.length>0&&e.map((function(e){return Object(p.jsx)(b,{task:e,toggleTask:O,deleteTask:l},e.id)}))}),Object(p.jsxs)("form",{onSubmit:o,children:[Object(p.jsx)("input",{type:"text",value:c.title,onChange:function(e){r(Object(j.a)(Object(j.a)({},c),{},{title:e.target.value}))}}),Object(p.jsx)("button",{type:"submit",children:"Crear Tarea"})]})]})};var T=function(){var e=Object(i.b)(),t=Object(n.useState)({email:"",password:""}),a=Object(A.a)(t,2),c=a[0],r=a[1],s=function(e){var t=e.target.name,a=e.target.value,n=Object(j.a)({},c);n[t]=a,r(n)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=c.email,n=c.password;e(function(e,t){return function(){var a=Object(d.a)(u.a.mark((function a(n){var c,r,s;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w.post("/login",{email:e,password:t});case 3:c=a.sent,r=c.data.token,s=c.data.user,localStorage.setItem(N,r),n({type:m,payload:s}),S.push("/"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n({type:x,payload:a.t0});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(a,n))},"data-testid":"form",children:[Object(p.jsx)("input",{type:"text",name:"email","data-testid":"email",value:c.email,onChange:s}),Object(p.jsx)("input",{type:"password","data-testid":"password",name:"password",value:c.password,onChange:s}),Object(p.jsx)("button",{type:"submit",children:"Ingresar"})]})]})};var y=function(){return Object(p.jsx)("h1",{children:"Register"})},F=a(31),D=function(e){var t=e.component,a=Object(F.a)(e,["component"]);Object(i.c)((function(e){return e.auth}));return Object(p.jsx)(o.a,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return Object(p.jsx)(t,Object(j.a)({},e))}}))};var L=function(){var e=Object(n.useState)(null),t=Object(A.a)(e,2),a=t[0],c=t[1];function r(){return(r=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("image",a),e.next=4,w.post("/upload",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{type:"file",onChange:function(e){c(e.target.files[0])}}),Object(p.jsx)("button",{type:"button",onClick:function(){return r.apply(this,arguments)},children:"Enviar"})]})},U=a.p+"static/media/food.58c698ab.jpeg",R=(a(67),function(e){var t=e.title,a=e.author,n=void 0===a?"khriztian":a,c=e.description,r=e.date,s=e.image,i=void 0===s?U:s,o=e.liked,l=e.likeCount;return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("div",{className:"card-header",children:[Object(p.jsx)("div",{className:"profile",children:Object(p.jsx)("span",{className:"letter",children:n[0]})}),Object(p.jsxs)("div",{className:"card-title-group",children:[Object(p.jsx)("h5",{className:"card-title",children:t}),Object(p.jsx)("div",{className:"card-date",children:r})]})]}),Object(p.jsx)("img",{className:"card-image",src:i,alt:"Logo"}),Object(p.jsx)("div",{className:"card-text",children:c}),Object(p.jsxs)("div",{className:"card-like-bar",children:[o?Object(p.jsx)("img",{className:"card-like-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABIQAAASEBDb+0VwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKrSURBVFiFxZfNS1RRGMZ/75mx0mtQ62pXOU4WqROGhDqkDhm0cCEk1aqibNUiqP6EoIIggnDTroKoNpLO2J0RURI/wkqTbFcRFBThpDbd+7aYxsqvmbHsPsvz8Ty/cw/c+1xRVbyU8TQ9F4DRSMSKh8P+fI3j4bB/NBKxsq2T+Vcw2dS0NvU9eVyUaiAEbANcgXcqdKijN0u7e4YXMxtrqC0X9IQgB4FNpA/4ChhUoa/Ab7Vv7eiYXRJgojEcUnVvAcHlqaXdceRs0LanAIYOhYqKpq3LAqeyHPi5C8eC0cTIAoDx+ro2Eb0G+LKYZPTMXzC7z/niVy30xYGKHPelVLSttKunfQ7gZUPtTmAQWJOjSUadKriiHMhz36zrOJXBx70vZLCyssDaaD0ByvM0+VsNJz8l95riDVaLB+EAFcUbrBajolUehAOgolUGJOQVAEjIAGXeAVBmgEmv0gVeG4QBrwAUBoyoPPEMQBkws2btXeCtB/nv1TF3zK7OzqSInv/f6YJcDNr2VPpbICIv62v6gf/0TpChQCyxB1VN9wFVdX3mCPBx1aPhsw89ys+v4FwhCT6yJ1E5BMysYn4KleZt0cR4ZuCPRhSIxftBjwDuqsQrJ0picfv3oQWVLBDtuadKK/DtH0Y7ICcDscSt+RMLKllGY401+43KfWD9X4bPqOrh0ljPg8UmlwSAdMfzwUOFLSsM/2Awzdujdu9SC5ZtxcFoYsTxpXaj3F9BeJf73exaLhyyPIHfNdFQd1rRK8C6LEu/oXIh0J24Sg7mOQMAjEfCZaJ6G9Udi80rjKuY1mCX/TRXz7wAAN5UVxdOWQWXgDZ+XaGLcqP4a+rc5r6+6Xz88gbIaKIxHHJxrwMYzJmSLntwJT4rBkjvFgHI5a5XB+AfyPO/4x9FiBTsX64VCwAAAABJRU5ErkJggg==",alt:"Logo"}):Object(p.jsx)("img",{className:"card-like-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKDSURBVFiFxZY/S1xBFMV/s7pgIEIwSBDdQkhiQMTCTohgaWVjJViJ4FdQYS1MFez8FEbSWGi6kCKmEMViC0lMZSMJBtHgRiJ7U7zz3Nn17du3f3wZuLBz7z3n3JmdmXedmfE/R2dc0DmXAV5qemJmt0lInXOdwHNNv5pZqWaymVUY0AXkgY/AJWCyG2AfmK7GeNhp5dx4uEtx5YGue5gqglGg4IF/ALvAB+DU838C+j1cv3xh/FSYXXGE/gIwGlkAMAf8UeJ7YDBihZNaoQHHwDPZsXz7wGQEblCcJo25igK0giugCMzX2mLldgA73orCHdsBOupg56VxFe5gGNgUST6OwCPqBo68rT0CuhNi88JshjfwtRwnUYckhmgA+CwbaADXJS2TNquaLCQladWABWmuZoARgnFIeiPUGnEEJ/gF8NjMimmoO+ceAb+Bb47gofhrZk/TEPeKOAeyGYJr1OOc60tRvA/oAQoZyv/HWFoFeFqHGeBAk/EUCwi1DgBywDXB65RL4QrmpHUN5ELnEsG93E6hgG1pLflPcZbymz7zgOIzlL8h2bsCFBwHSsAFMPYA4mPiLgHjd/6qpGVVeE7Vd7tF8VFxGrBcEYtIXlPiT2C4DeLD4jJg7V68BmhdgLNWdkIrPxPXemRODHiDck831YT4FOWecqNmXh2SFR2aW2CxAfFFYUrASmxuArJZyl3uW8DF5DrlhF30bF3+hCua8E7xFlHtddDpbHm3aCIRdwPbOgR8l8AXoNeL9cpnyhlKzNvgweoF9jyhV7KwsD2/sLYX4G31Own+kpl8iZvapgvwDtsbgh6/qN81D2ecORE2NZxzTwDM7KJpjlYKaMf4B9FNQRk/3BnLAAAAAElFTkSuQmCC",alt:"Logo"}),Object(p.jsxs)("div",{className:"like-text",children:[Object(p.jsx)("b",{children:l})," LIKES"]})]})]})});R.defaultProps={title:"Tacos arabes",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero exercitationem odio, doloremque soluta enim, corporis labore quidem officia eius quisquam iusto eligendi natus molestiae culpa ab possimus cum, quia eum.",date:(new Date).toDateString(),liked:!1,likeCount:0};var I=R;a(68);function P(e){var t=e.type,a=void 0===t?"info":t,n=e.children;return Object(p.jsx)("p",{className:"alert alert-".concat(a),children:n})}function V(){var e=Object(i.c)((function(e){return e.error}));return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(o.b,{history:S,children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(D,{exact:!0,path:"/",component:k}),Object(p.jsx)(o.a,{exact:!0,path:"/login",component:T}),Object(p.jsx)(o.a,{exact:!0,path:"/register",component:y}),Object(p.jsx)(o.a,{exact:!0,path:"/upload",component:L}),Object(p.jsx)(o.a,{exact:!0,path:"/card",component:I})]})}),e?Object(p.jsx)(P,{type:"error",children:e}):null]})}var X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},K=a(14),J=a(30),H={auth:{status:"AUTH_LOADING",user:null},tasks:[],error:null},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;if(t.type===m)return Object(j.a)(Object(j.a)({},e),{},{auth:{status:v,user:t.payload}});if(t.type===g)return Object(j.a)(Object(j.a)({},e),{},{auth:{status:C,user:null}});if(t.type===x){var a=t.payload,n="Encontramos un error desconocido, intena nuevamente o comu ...";return"NetworkError"===a.name?n="Encontra ...":a.response&&401===a.response.status&&(n=a.response.data.message),Object(j.a)(Object(j.a)({},e),{},{error:n})}return t.type===f?Object(j.a)(Object(j.a)({},e),{},{tasks:t.payload}):e},G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.b;var q=Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(i.a,{store:Object(K.c)(Y,G(Object(K.a)(J.a))),children:Object(p.jsx)(V,{})})});s.a.render(q,document.getElementById("root")),X()}},[[69,1,2]]]);
//# sourceMappingURL=main.5d1ce337.chunk.js.map