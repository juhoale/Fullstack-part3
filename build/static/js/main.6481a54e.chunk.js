(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{24:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),a=t(18),u=t.n(a),o=(t(24),t(19)),i=t(3),s=t(5),l=t.n(s),d="/api/persons",j={getAll:function(){return l.a.get(d).then((function(e){return e.data}))},create:function(e){return l.a.post(d,e).then((function(e){return e.data}))},remove:function(e){return l.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.status}))},modify:function(e,n){return l.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))}},b=t(0),f=function(e){var n=e.persons,t=e.personsFiltered,c=e.filter,r=e.handleDelete;return""===c?Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Numbers"}),n.map((function(e){return Object(b.jsx)(h,{person:e,handleDelete:r},e.name)}))]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Numbers"}),t.map((function(e){return Object(b.jsx)(h,{person:e,handleDelete:r},e.name)}))]})},h=function(e){var n=e.person,t=e.handleDelete;return Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:[n.name," ",n.number," ",Object(b.jsx)("button",{onClick:function(){return t(n)},children:"Delete"})]})})},m=function(e){var n=e.filter,t=e.handleFilter;return Object(b.jsxs)("div",{children:["filter: ",Object(b.jsx)("input",{value:n,onChange:t})]})},O=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Add a new"}),Object(b.jsxs)("form",{onSubmit:e.addName,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:e.newName,onChange:e.NameChange}),Object(b.jsx)("br",{}),"number: ",Object(b.jsx)("input",{value:e.newNumber,onChange:e.NumberChange})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})]})},v=function(e){var n=e.message;return null===n?null:Object(b.jsx)("div",{className:"success",children:n})},x=function(e){var n=e.message;return null===n?null:Object(b.jsx)("div",{className:"error",children:n})},p=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)([]),u=Object(i.a)(a,2),s=u[0],l=u[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),p=h[0],g=h[1],w=Object(c.useState)(""),C=Object(i.a)(w,2),N=C[0],S=C[1],D=Object(c.useState)(""),y=Object(i.a)(D,2),F=y[0],L=y[1],k=Object(c.useState)(null),A=Object(i.a)(k,2),T=A[0],I=A[1],P=Object(c.useState)(null),B=Object(i.a)(P,2),E=B[0],J=B[1];Object(c.useEffect)((function(){M()}),[]);var M=function(){j.getAll().then((function(e){r(e)}))},q=function(e){I(e),setTimeout((function(){I(null)}),3e3)};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(v,{message:T}),Object(b.jsx)(x,{message:E}),Object(b.jsx)(m,{filter:F,handleFilter:function(e){L(e.target.value);var n,c,r=Object(o.a)(t);l((n=r,c=e.target.value,n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}))))}}),Object(b.jsx)(O,{addName:function(e){e.preventDefault();var n={name:p,number:N},c=t.find((function(e){return e.name.toLowerCase()===p.toLowerCase()}));void 0!==c?window.confirm("".concat(p," is already added to phonebook, replace the old number with a new one?"))&&j.modify(c.id,n).then((function(e){q("Changed number of ".concat(e.name)),M()})).catch((function(e){J("Information of ".concat(n.name," has already been removed from the server")),setTimeout((function(){J(null)}),5e3),M()})):j.create(n).then((function(e){r(t.concat(e)),l(t),g(""),S(""),q("Added ".concat(e.name))})).catch((function(e){J(e.response.data.error),setTimeout((function(){J(null)}),5e3)}))},newName:p,newNumber:N,NameChange:function(e){g(e.target.value)},NumberChange:function(e){S(e.target.value)}}),Object(b.jsx)(f,{persons:t,personsFiltered:s,filter:F,handleDelete:function(e){window.confirm("Are you  sure you want to delete ".concat(e.name))&&j.remove(e.id).then((function(n){q("Deleted ".concat(e.name)),M()}))}})]})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,u=n.getTTFB;t(e),c(e),r(e),a(e),u(e)}))};u.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.6481a54e.chunk.js.map