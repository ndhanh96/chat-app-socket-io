(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,c){},125:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(25),r=c.n(s),u=c(35),j=c(3),i=c(18),o=c(15),b=(c(74),c(28)),l=Object(b.b)({name:"users",initialState:{name:""},reducers:{setName:function(e,t){e.name=t.payload}}}),O=l.actions.setName,h=l.reducer,d=c(1);function m(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(j.f)(),r=Object(o.c)((function(e){return e.users.name})),u=Object(o.b)();return r&&!c&&u(O("")),Object(d.jsxs)("div",{className:"nameInputBox",children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(O(c)),s.push("/chat")},className:"nameInputForm",children:[Object(d.jsx)("h1",{children:"Type your name to chat"}),Object(d.jsx)("input",{className:"nameInput",value:c,onChange:function(e){return a(e.target.value)},placeholder:"your name goes here..."})]}),r]})}var f=c(39),p=(c(77),c(65)),x=(c(124),Object(p.io)("https://randomass.xyz/",{path:"/api/socketio"}));function v(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(i.a)(s,2),u=r[0],b=r[1],l=Object(n.useState)([]),O=Object(i.a)(l,2),h=O[0],m=O[1],p=Object(n.useRef)(null),v=Object(o.c)((function(e){return e.users.name})),g=Object(j.f)();v||g.push("/");return x.on("serverSent",(function(e){b(e)})),Object(n.useEffect)((function(){u.length>0&&m((function(e){return[].concat(Object(f.a)(e),[u])}))}),[u]),Object(n.useEffect)((function(){if(h.length>0){var e=h[h.length-1][2];p.current.scrollIntoView(),console.log(e)}}),[h]),Object(d.jsxs)("div",{className:"chatBox",children:[Object(d.jsxs)("h1",{children:["Welcome to chat room ",v]}),Object(d.jsx)("ul",{children:0!==h.length?h.map((function(e){return Object(d.jsxs)("li",{ref:p,id:e[2],children:[" ",Object(d.jsx)("span",{className:"sender",children:e[0]})," ",": ".concat(e[1])]},e[2])})):""}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c&&(x.emit("clientSent",{name:v,msg:c}),m((function(e){return[].concat(Object(f.a)(e),[[v,c,Date.parse(new Date)]])}))),a("")},children:[Object(d.jsx)("input",{value:c,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Send"})]})]})}var g=function(){return Object(d.jsx)(u.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/",children:Object(d.jsx)(m,{})}),Object(d.jsx)(j.a,{exact:!0,path:"/chat",children:Object(d.jsx)(v,{})})]})})})},S=Object(b.a)({reducer:{users:h}});r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(o.a,{store:S,children:Object(d.jsx)(g,{})})}),document.getElementById("root"))},74:function(e,t,c){}},[[125,1,2]]]);
//# sourceMappingURL=main.412e04d0.chunk.js.map