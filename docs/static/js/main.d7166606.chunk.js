(this["webpackJsonpbebidas-context"]=this["webpackJsonpbebidas-context"]||[]).push([[0],{30:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c(4),s=c.n(a),i=(c(30),c(5)),o=c.n(i),l=c(7),j=c(2),d=c(8),u=c.n(d),b=Object(r.createContext)(),h=function(e){var t=e.children,c=Object(r.useState)([]),a=Object(j.a)(c,2),s=a[0],i=a[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",e.next=3,u.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");case 3:t=e.sent,i(t.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(b.Provider,{value:{categorias:s},children:t})},O=Object(r.createContext)(),x=function(e){var t=e.children,c=Object(r.useState)(null),a=Object(j.a)(c,2),s=a[0],i=a[1],d=Object(r.useState)({}),b=Object(j.a)(d,2),h=b[0],x=b[1];return Object(r.useEffect)((function(){s&&function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=" https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(s),e.next=3,u.a.get(t);case 3:c=e.sent,x(c.data.drinks[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s]),Object(n.jsx)(O.Provider,{value:{datos:h,setIdReceta:i,setDatos:x},children:t})},m=Object(r.createContext)(),p=function(e){var t=e.children,c=Object(r.useState)([]),a=Object(j.a)(c,2),s=a[0],i=a[1],d=Object(r.useState)({ingrediente:"",categoria:""}),b=Object(j.a)(d,2),h=b[0],O=b[1],x=h.ingrediente,p=h.categoria,f=Object(r.useState)(!1),g=Object(j.a)(f,2),v=g[0],k=g[1];return Object(r.useEffect)((function(){v&&function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(x,"&c=").concat(p),e.next=3,u.a.get(t);case 3:c=e.sent,i(c.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[h]),Object(n.jsx)(m.Provider,{value:{resultadobusqueda:h,recetas:s,consultar:v,setBuscaRecetas:O,setConsultar:k},children:t})},f=c(10),g=c(12),v=function(){var e=Object(r.useContext)(m),t=e.setBuscaRecetas,c=e.setConsultar,a=Object(r.useContext)(b).categorias,s=Object(r.useState)({ingrediente:"",categoria:""}),i=Object(j.a)(s,2),o=i[0],l=i[1],d=o.ingrediente,u=o.categoria,h=function(e){l(Object(g.a)(Object(g.a)({},o),{},Object(f.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)("form",{className:"formulario-form contenedor",onSubmit:function(e){e.preventDefault(),""!==d.trim()&&""!==u.trim()?(t(o),c(!0),l({ingrediente:"",categoria:""})):console.log("Todos los campos son obligatorios")},children:[Object(n.jsx)("input",{type:"text",name:"ingrediente",value:d,placeholder:"Buscar por Ingrediente Ej. Tequila",className:"input-ingrediente form-control",onChange:h}),Object(n.jsxs)("select",{className:"select form-control",name:"categoria",onChange:h,children:[Object(n.jsx)("option",{value:"",children:"--Seleccione--"}),a.map((function(e){return Object(n.jsx)("option",{value:e.strCategory,children:e.strCategory},e.strCategory)}))]}),Object(n.jsx)("button",{type:"submit",className:"button form-control",children:"Buscar bebidas"})]})},k=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h1",{className:"stroke",children:"Busca recetas de bebidas"})})},N=c(58);function w(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var C=function(e){for(var t=[],c=1;c<=16;c++)e["strIngredient".concat(c)]&&t.push(Object(n.jsxs)("li",{className:"listado-ingredientes",children:[e["strIngredient".concat(c)],Object(n.jsx)("span",{children:e["strMeasure".concat(c)]})]}));return t},y=function(e){var t=e.receta,c=Object(r.useContext)(O),a=c.datos,s=c.setIdReceta,i=c.setDatos,o=Object(r.useState)(w),l=Object(j.a)(o,1)[0],d=Object(r.useState)(!1),u=Object(j.a)(d,2),b=u[0],h=u[1];return Object(n.jsxs)("div",{className:"receta-card contenedor",children:[Object(n.jsx)("h2",{children:t.strDrink}),Object(n.jsxs)("div",{className:"receta-img",children:[Object(n.jsx)("img",{src:t.strDrinkThumb,alt:t.strDrink}),Object(n.jsx)("button",{type:"button",className:"btn-receta",onClick:function(){h(!0),s(t.idDrink)},children:"Ver Receta"}),Object(n.jsx)(N.a,{open:b,onClose:function(){s(null),h(!1),i({})},children:Object(n.jsxs)("div",{style:l,className:"paper",children:[Object(n.jsx)("h1",{className:"titulo-receta",children:"Receta"}),Object(n.jsxs)("h2",{className:"titulo-bebida",children:[" ",a.strDrink]}),Object(n.jsx)("img",{src:a.strDrinkThumb,alt:"Imagen de ".concat(a.strDrink),className:"img-bebida-receta"}),Object(n.jsx)("h2",{className:"titulo-ingredientes",children:"Ingredientes y cantidades"}),Object(n.jsx)("ul",{className:"order-list",children:C(a)}),Object(n.jsx)("h3",{className:"text-warning",children:"Instrucciones "}),Object(n.jsx)("p",{children:a.strInstructions})]})})]})]})},D=function(){var e=Object(r.useContext)(m),t=e.resultadobusqueda,c=e.recetas;return Object(n.jsxs)(n.Fragment,{children:[0===c.length?null:Object(n.jsxs)("h2",{className:"text-center mt-5 titulo-resultado",children:["Listado de ",t.ingrediente," en la categor\xeda de"," ",t.categoria]}),Object(n.jsx)("div",{className:"contenedor-recetas contenedor",children:c.map((function(e){return Object(n.jsx)(y,{receta:e},e.idDrink)}))})]})};c(52);var I=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(h,{children:Object(n.jsx)(p,{children:Object(n.jsxs)(x,{children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("div",{className:"contenedor",children:Object(n.jsx)(k,{})})}),Object(n.jsx)("div",{className:"indicacion",children:Object(n.jsx)("h3",{children:"Buscar bebidas por Categoria E Ingrediente"})}),Object(n.jsx)("div",{className:"formulario",children:Object(n.jsx)(v,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(D,{})}),Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("div",{className:"contenedor-footer",children:[Object(n.jsxs)("div",{className:"campo-footer",children:[Object(n.jsx)("h2",{children:"Aplicaci\xf3n hecha por"}),Object(n.jsx)("p",{className:"text-center text-white",children:"Alejandro Ram\xedrez Rodr\xedguez \xa9"})]}),Object(n.jsxs)("div",{className:"campo-footer",children:[Object(n.jsx)("h2",{children:"Redes sociales"}),Object(n.jsxs)("div",{className:"iconos-sociales",children:[Object(n.jsx)("a",{href:"https://www.facebook.com/alejandro.ramirezrodriguez.796/",className:"text-center",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"facebook.png",alt:"facebook-logo"})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/alejandro-ramirez-rodriguez",className:"text-center",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"linkedin.png",alt:"linkedin-logo"})}),Object(n.jsx)("a",{href:"https://github.com/DeveloperAlexRamirez",className:"text-center",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"github.png",alt:"github-logo"})})]})]})]})})]})})})})};s.a.render(Object(n.jsx)(I,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d7166606.chunk.js.map