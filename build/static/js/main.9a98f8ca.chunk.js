(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,n,t){e.exports=t(46)},29:function(e,n,t){},31:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c,o=t(1),a=t.n(o),l=t(15),d=t.n(l),r=(t(29),t(31),t(16)),i=t(4),u=t(17),J=(t(33),t(10)),M=t.n(J),N=t(49);var X=function(e){var n=Object(o.useState)([]),t=Object(i.a)(n,2),c=t[0],l=t[1],d=Object(o.useState)(!0),r=Object(i.a)(d,2),u=r[0],J=r[1],X=Object(o.useState)("AreaUnderTheCurve_901"),m=Object(i.a)(X,2),h=m[0],p=m[1],E=function(){N.a.get("https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=".concat(h)).then(function(e){return l(e.data)},J(!1)).catch(function(e){console.log(e)})};return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null,a.a.createElement("div",{className:"container"},a.a.createElement("div",null,a.a.createElement("h1",null,"Maths Question Paper")),u?a.a.createElement("button",{onClick:E},a.a.createElement("h3",null,"Start Your Exam")):null,a.a.createElement("br",null),a.a.createElement(M.a.Provider,null,a.a.createElement("div",{style:{height:"150px"}},a.a.createElement("ul",{style:{height:"150px"}},c.map(function(e){return a.a.createElement("li",{key:e.QuestionID,style:{height:"90px"}},a.a.createElement(M.a.Node,{formula:e.Question}))})))),[1,2,3].map(function(e){return a.a.createElement("button",{key:e,onClick:function(){var n;1===(n=e)?(p("AreaUnderTheCurve_901"),E(),console.log(h)):2===n?(p("DifferentialCalculus2_901"),E(),console.log(h)):3===n&&(p("BinomialTheorem_901"),E(),console.log(h))}},"Question ",e)}))))},s=u.a.div(c||(c=Object(r.a)(["\n.container{\n  height: 250px;\n}\n.MJXc-processed {\n  display:block;\n}\n.mjx-math {\n  display:block;\n}\n#MJXc-Node-284 , #MJXc-Node-303, #MJXc-Node-324,#MJXc-Node-328 , #MJXc-Node-163, #MJXc-Node-176, #MJXc-Node-6 ,#MJXc-Node-32, #MJXc-Node-72 ,#MJXc-Node-78 ,\n#MJXc-Node-107 , #MJXc-Node-115 , #MJXc-Node-121 , #MJXc-Node-133{\n  display:none;\n}\n#MJXc-Node-926, #MJXc-Node-334 , #MJXc-Node-360 , #MJXc-Node-466 , #MJXc-Node-400 ,#MJXc-Node-406 , #MJXc-Node-435 , #MJXc-Node-443 , #MJXc-Node-449 , #MJXc-Node-461 ,\n#MJXc-Node-491 , #MJXc-Node-504 , #MJXc-Node-612 , #MJXc-Node-631 , #MJXc-Node-652 , #MJXc-Node-656{\n  display:none;\n}\n#MJXc-Node-990 , #MJXc-Node-662 ,#MJXc-Node-688 , #MJXc-Node-728 , #MJXc-Node-734 , #MJXc-Node-763 , #MJXc-Node-771 ,#MJXc-Node-777 , \n#MJXc-Node-789 , #MJXc-Node-819 , #MJXc-Node-832 , #MJXc-Node-940 , #MJXc-Node-959 , #MJXc-Node-980 , #MJXc-Node-984{\n  display:none;\n}\n.mjx-chtml{\n   background: aliceblue; \n}\n\n@media only screen and (max-width: 600px){\n  .mjx-chtml {\n    font-size: 50%;\n  }\n}\n"])));var m=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"App"},a.a.createElement(X,null)))},h=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,48)).then(function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,a=n.getLCP,l=n.getTTFB;t(e),c(e),o(e),a(e),l(e)})};d.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null))),h()}},[[21,3,2]]]);
//# sourceMappingURL=main.9a98f8ca.chunk.js.map