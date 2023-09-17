"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[154],{7154:function(e,t,s){s.r(t);var n=s(4165),c=s(5861),r=s(9439),a=s(2791),l=s(3332),o=s(3359),d=s(1243),i=s(3402),u=s(2744),h=s(1355),p=s(184),v=h.Z.Option;t.default=function(){var e=(0,a.useState)(["Not Processed","Processing","Shipped","Delivered","Cancel"]),t=(0,r.Z)(e,2),s=t[0],x=(t[1],function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t){var s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.delete("".concat("http://localhost:8081","/api/v1/auth/order/cancel/").concat(t));case 3:s=e.sent,(c=s.data).success?(i.ZP.success("Product is deleted Successfully"),w()):i.ZP.error(c.message),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),i.ZP.error("Something went wrong while deleting the product");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),m=(0,a.useState)([]),j=(0,r.Z)(m,2),f=j[0],g=j[1],Z=(0,u.a)(),b=(0,r.Z)(Z,2),N=b[0],w=(b[1],function(){var e=(0,c.Z)((0,n.Z)().mark((function e(){var t,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("".concat("http://localhost:8081","/api/v1/auth/all-orders"));case 3:t=e.sent,s=t.data,g(s),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}());(0,a.useEffect)((function(){null!==N&&void 0!==N&&N.token&&w()}),[null===N||void 0===N?void 0:N.token]);var S=function(){var e=(0,c.Z)((0,n.Z)().mark((function e(t,s){var c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.put("".concat("http://localhost:8081","/api/v1/auth/order-status/").concat(t),{status:s});case 3:c=e.sent,c.data,w(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,s){return e.apply(this,arguments)}}(),y=(0,a.useState)(null),k=(0,r.Z)(y,2),P=k[0],D=k[1],I=(0,a.useState)(null),C=(0,r.Z)(I,2),O=C[0],_=C[1],A=(0,a.useState)(null),E=(0,r.Z)(A,2),F=E[0],B=E[1];return(0,a.useEffect)((function(){var e=localStorage.getItem("day"),t=localStorage.getItem("month"),s=localStorage.getItem("year");if(e&&t&&s)D(e),_(t),B(s);else{var n=new Date,c=n.getDate(),r=n.getMonth()+1,a=n.getFullYear();localStorage.setItem("day",c),localStorage.setItem("month",r),localStorage.setItem("year",a),D(c),_(r),B(a)}}),[]),(0,p.jsx)(o.Z,{title:"All Orders Data",children:(0,p.jsx)("div",{className:"container-fluid m-3 p-3",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-3",children:(0,p.jsx)(l.Z,{})}),(0,p.jsxs)("div",{className:"col-md-8",children:[(0,p.jsx)("h1",{className:"text-center",children:"All Orders"}),(0,p.jsx)("div",{className:"border shadow",children:(0,p.jsx)("table",{className:"table",children:(0,p.jsx)("thead",{})})}),(0,p.jsx)("div",{children:(0,p.jsx)("div",{children:null===f||void 0===f?void 0:f.map((function(e,t){var n,c;return(0,p.jsxs)("div",{className:"border shadow",children:[(0,p.jsxs)("table",{className:"table",children:[(0,p.jsx)("table",{className:"table",children:(0,p.jsx)("thead",{className:"adminorderss",children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{scope:"col",children:"#"}),(0,p.jsx)("th",{scope:"col",children:"Status"}),(0,p.jsx)("th",{scope:"col",children:"Buyer"}),(0,p.jsx)("th",{scope:"col",children:"Date"}),(0,p.jsx)("th",{scope:"col",children:"Payment"}),(0,p.jsx)("th",{scope:"col",children:"Quantity"})]})})}),(0,p.jsxs)("tbody",{className:"adminorderss",children:[(0,p.jsxs)("tr",{children:[(0,p.jsx)("td",{children:t+1}),(0,p.jsx)("td",{children:(0,p.jsx)(h.Z,{bordered:!1,onChange:function(t){return S(e._id,t)},defaultValue:null===e||void 0===e?void 0:e.status,children:s.map((function(e,t){return(0,p.jsx)(v,{value:e,children:e},t)}))})}),(0,p.jsx)("td",{children:null===e||void 0===e||null===(n=e.buyer)||void 0===n?void 0:n.name}),(0,p.jsxs)("td",{children:[P,"/",O,"/",F]}),(0,p.jsx)("td",{children:null!==e&&void 0!==e&&e.payment.success?"Success":"Failed"}),(0,p.jsx)("td",{children:null===e||void 0===e||null===(c=e.products)||void 0===c?void 0:c.length})]}),(0,p.jsx)("button",{className:"btn btn-danger ms-2 mt-2",onClick:function(){x(e._id)},children:"Delete"})]})]}),(0,p.jsx)("div",{className:"container",children:null===e||void 0===e?void 0:e.products.map((function(e,t){return(0,p.jsxs)("div",{className:"row mb-2 p-3 card flex-row",children:[(0,p.jsx)("div",{className:"col-md-4",children:(0,p.jsx)("img",{src:"".concat("http://localhost:8081","/api/v1/product/product-photo/").concat(e._id),className:"card-img-top",alt:e.name,height:"150px"})}),(0,p.jsxs)("div",{className:"col-md-8",children:[(0,p.jsx)("p",{children:(0,p.jsx)("b",{children:e.name})}),(0,p.jsx)("p",{children:e.description}),(0,p.jsxs)("p",{children:["Price: ",e.price]})]})]})}))})]})}))})})]})]})})})}}}]);
//# sourceMappingURL=154.ccce0686.chunk.js.map