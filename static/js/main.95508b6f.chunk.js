(this["webpackJsonpstarter-project"]=this["webpackJsonpstarter-project"]||[]).push([[0],{120:function(e){e.exports=JSON.parse('[{"id":1,"manufacturer":"Waltz","name":"Bixby","width_value":7.6,"width_unit":"in"},{"id":2,"manufacturer":"Test","name":"Board","width_value":200,"width_unit":"mm"}]')},121:function(e){e.exports=JSON.parse('[{"id":1,"manufacturer":"Ace","name":"11","axle_width_value":7.25,"axle_width_unit":"in","hanger_width_value":4.6,"hanger_width_unit":"in"},{"id":2,"manufacturer":"Ace","name":"22","axle_width_value":7.6,"axle_width_unit":"in","hanger_width_value":5,"hanger_width_unit":"in"}]')},122:function(e){e.exports=JSON.parse('[{"id":1,"manufacturer":"Waltz","name":"Donut","width_value":36,"width_unit":"mm","offset":true},{"id":2,"manufacturer":"Decomposed","name":"Four Leeches 2.0","width_value":35,"width_unit":"mm","offset":true},{"id":3,"manufacturer":"Decomposed","name":"Mortal Pegasus","width_value":36,"width_unit":"mm","offset":true},{"id":4,"manufacturer":"Decomposed","name":"Cesspool Bottomfeeder","width_value":36,"width_unit":"mm","offset":true},{"id":5,"manufacturer":"Decomposed","name":"Grey Matter","width_value":35,"width_unit":"mm","offset":true},{"id":6,"manufacturer":"Decomposed","name":"Crystal Skull","width_value":36,"width_unit":"mm","offset":true},{"id":7,"manufacturer":"DOGTOWN","name":"k-9 80\'s Street/Freestyle","width_value":36,"width_unit":"mm","offset":true},{"id":8,"manufacturer":"SK8KINGS","name":"Crown Jewels","width_value":37,"width_unit":"mm","offset":true},{"id":9,"manufacturer":"SK8KINGS","name":"King Spinners","width_value":36,"width_unit":"mm","offset":false}]')},135:function(e,t,n){},136:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(25),u=n.n(c),r=(n(135),n(33)),l=n(29),o=n(90),d=n(218),s=n(214),h=n(219),j=(n(136),n(66)),f=n(216),b="in",m="mm",_=function(e,t){switch(t){case b:return e;case m:return e/25.4;default:throw new Error("Unknown unit ".concat(t))}},w=function(e){return e===b?'"':e},O=n(7),v=j.a.Option,x=function(e){return e===b?.1:1},g=function(e){return e?Number.MIN_SAFE_INTEGER:0},p=function(e){var t=e.defaultValue,n=void 0===t?0:t,i=e.defaultUnit,c=void 0===i?b:i,u=e.negativeValue,l=void 0!==u&&u,o=e.onChange,d=void 0===o?function(e){return e}:o,s=Object(a.useState)(n),h=Object(r.a)(s,2),_=h[0],w=h[1],p=Object(a.useState)(c),S=Object(r.a)(p,2),k=S[0],y=S[1],C=function(e){y(e),d(_,e)};return Object(O.jsx)(f.a,{className:"MeasurementInput",addonAfter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;return Object(O.jsxs)(j.a,{defaultValue:e,className:"select-after",onChange:C,children:[Object(O.jsx)(v,{value:b,children:"in"}),Object(O.jsx)(v,{value:m,children:"mm"})]})}(k),defaultValue:_,step:x(k),min:g(l),onChange:function(e){w(e),d(e,k)}})},S=function(e){var t=e.title,n=void 0===t?"":t;return Object(O.jsx)("div",{className:"ant-form-item-label",children:Object(O.jsx)("label",{title:n,children:n})})},k=function(e){return Object(O.jsxs)(h.b,{className:e.title,align:"start",children:[Object(O.jsx)(S,{title:e.title}),Object(O.jsx)(h.b,{direction:"vertical",children:e.children})]})},y=function(e){return Object(O.jsxs)(h.b,{children:[Object(O.jsx)(S,{title:e.title}),e.children]})},C=function(e){var t=e.options,n=e.deck,a=e.setDeck,i=void 0===a?function(e){return e}:a,c=Object(O.jsx)(y,{title:"Deck Width",children:Object(O.jsx)(p,{defaultValue:7.6})});return Object(O.jsxs)(k,{title:"Deck",children:[Object(O.jsx)(j.a,{value:n.value,options:t,onSelect:function(e){i(t[e])},style:{width:250}}),0===n.value&&c]})},D=function(e){var t=e.options,n=e.truck,i=e.setTruck,c=void 0===i?function(e){return e}:i,u=Object(a.useState)(Object(l.a)({axle_width_value:7.25,axle_width_unit:b,hanger_width_value:4.6,hanger_width_unit:b},t[0])),o=Object(r.a)(u,2),d=o[0],s=o[1],h=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{title:"Axle Width",children:Object(O.jsx)(p,{defaultValue:d.axle_width_value,defaultUnit:d.axle_width_unit,onChange:function(e,t){var n=Object(l.a)(Object(l.a)({},d),{},{axle_width_value:e,axle_width_unit:t});s(n),c(n)}})}),Object(O.jsx)(y,{title:"Hanger Width",children:Object(O.jsx)(p,{defaultValue:d.hanger_width_value,defaultUnit:d.hanger_width_unit,onChange:function(e,t){var n=Object(l.a)(Object(l.a)({},d),{},{hanger_width_value:e,hanger_width_unit:t});s(n),c(n)}})})]});return Object(O.jsxs)(k,{title:"Truck",children:[Object(O.jsx)(j.a,{value:n.value,options:t,onSelect:function(e){c(0===e?d:t[e])},style:{width:250}}),0===n.value&&h]})},N=function(e){var t=e.options,n=e.wheel,i=e.setWheel,c=void 0===i?function(e){return e}:i,u=Object(a.useState)(Object(l.a)({width_value:36,width_unit:m},t[0])),o=Object(r.a)(u,2),d=o[0],s=o[1],h=Object(O.jsx)(y,{title:"Deck Width",children:Object(O.jsx)(p,{defaultValue:d.width_value,defaultUnit:d.width_unit,onChange:function(e,t){var n=Object(l.a)(Object(l.a)({},d),{},{width_value:e,width_unit:t});s(n),c(n)}})});return Object(O.jsxs)(k,{title:"Wheel",children:[Object(O.jsx)(j.a,{value:n.value,options:t,onSelect:function(e){c(0===e?d:t[e])},style:{width:250}}),0===n.value&&h]})},F=s.a.Text,I=function(e,t){return _(e.hanger_width_value,e.hanger_width_unit)+2*_(t.width_value,t.width_unit)},T=function(e){e.deck;var t=e.truck,n=e.wheel;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(F,{children:["The complete width of your trucks and wheels will be ",I(t,n).toFixed(3),'"']})})},W=n(120),V=n(121),A=n(122),B=n(217),E=n(215),J=B.a.Panel,G=["VERY Alpha version, it's full of bugs.","I plan to add washers (including custom ones)","Right now Deck is not doing anything. Still trying to figure out the best way to use the information.","I would like some kind of diagram to help with visualisation."],K=function(){return Object(O.jsx)(B.a,{ghost:!0,children:Object(O.jsx)(J,{header:"Notes",children:Object(O.jsx)(E.b,{bordered:!0,dataSource:G,renderItem:function(e){return Object(O.jsxs)(E.b.Item,{children:["- ",e]})}})})})},M=d.a.Header,U=d.a.Content,P=d.a.Footer,z=s.a.Title,H=function(){var e=[{value:0,label:"Custom"}].concat(Object(o.a)(W.map((function(e){return Object(l.a)({value:e.id,label:"".concat(e.manufacturer," ").concat(e.name," (").concat(e.width_value).concat(w(e.width_unit),")")},e)})))),t=Object(a.useState)(e[1]),n=Object(r.a)(t,2),i=n[0],c=n[1],u=[{value:0,label:"Custom"}].concat(Object(o.a)(V.map((function(e){return Object(l.a)({value:e.id,label:"".concat(e.manufacturer," ").concat(e.name," (").concat(e.axle_width_value).concat(w(e.axle_width_unit),")")},e)})))),s=Object(a.useState)(u[1]),j=Object(r.a)(s,2),f=j[0],b=j[1],m=[{value:0,label:"Custom"}].concat(Object(o.a)(A.map((function(e){return Object(l.a)({value:e.id,label:"".concat(e.manufacturer," ").concat(e.name," (").concat(e.width_value).concat(w(e.width_unit),")")},e)})))),_=Object(a.useState)(m[1]),v=Object(r.a)(_,2),x=v[0],g=v[1];return Object(O.jsxs)(d.a,{className:"layout",children:[Object(O.jsx)(M,{children:Object(O.jsx)(z,{style:{color:"white"},children:"Freestyle Setup Helper"})}),Object(O.jsx)(U,{style:{padding:"0 50px"},children:Object(O.jsxs)(h.b,{direction:"vertical",children:[Object(O.jsx)(K,{}),Object(O.jsx)(C,{options:e,deck:i,setDeck:c}),Object(O.jsx)(D,{options:u,truck:f,setTruck:b}),Object(O.jsx)(N,{options:m,wheel:x,setWheel:g}),Object(O.jsx)(T,{deck:i,truck:f,wheel:x})]})}),Object(O.jsxs)(P,{style:{textAlign:"center"},children:["Designed and developed by the ",Object(O.jsx)("a",{href:"https://discord.gg/6SB27XCc",children:"Waltz Discord community"}),"."]})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),a(e),i(e),c(e),u(e)}))};u.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(H,{})}),document.getElementById("root")),L()}},[[213,1,2]]]);
//# sourceMappingURL=main.95508b6f.chunk.js.map