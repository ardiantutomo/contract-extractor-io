(this["webpackJsonpcontract-extractor"]=this["webpackJsonpcontract-extractor"]||[]).push([[0],{115:function(e,a,t){e.exports=t(225)},120:function(e,a,t){},121:function(e,a,t){},198:function(e,a){},199:function(e,a){},200:function(e,a){},201:function(e,a){},202:function(e,a){},225:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),o=(t(120),t(121),t(31)),u=t(230),m=t(234),i=t(39),s=t.n(i),p=t(233),f=t(231),E=t(54),d=t(226),h=t(229),g=t(227),b=function(e){var a=e.contract;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Title: ",l.a.createElement("br",null),a.title.map((function(e){return l.a.createElement(g.a,{value:e})}))),l.a.createElement("p",null,"Contract number: ",l.a.createElement(g.a,{value:a["contract-number"]}),")"),l.a.createElement("p",null,"Date: ",l.a.createElement("br",null),a.date.map((function(e){return l.a.createElement(g.a,{value:e})}))),l.a.createElement("p",null,"Money: ",l.a.createElement("br",null),a.money.map((function(e){return l.a.createElement(g.a,{value:e})}))))},v=t(232),N=t(49),x=t.n(N),k=d.a.Dragger,y=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],r={name:"file",multiple:!0,method:"POST",action:"https://contract-extractor-io.herokuapp.com/text",onChange:function(e){var a=e.file.status;"uploading"!==a&&console.log(e.file,e.fileList),"done"===a?(c((function(a){return[].concat(Object(E.a)(a),[e.file.response])})),h.a.success("".concat(e.file.name," file uploaded successfully."))):"error"===a&&h.a.error("".concat(e.file.name," file upload failed."))}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{span:24,className:"panel"},l.a.createElement("center",null,l.a.createElement("h1",null,"Text")))),l.a.createElement(k,r,l.a.createElement("p",{className:"ant-upload-drag-icon"},l.a.createElement(v.a,null)),l.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),l.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")),t.map((function(e,a){return l.a.createElement(u.a,null,l.a.createElement(m.a,{span:12,className:"panel"},l.a.createElement(x.a,{document:{url:"https://contract-extractor-io.herokuapp.com/data/"+e.filename}})),l.a.createElement(m.a,{span:12,className:"panel"},l.a.createElement(b,{contract:e})))})))},O=d.a.Dragger,S=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],r={name:"file",multiple:!0,method:"POST",action:"https://contract-extractor-io.herokuapp.com/ocr",onChange:function(e){var a=e.file.status;"uploading"!==a&&console.log(e.file,e.fileList),"done"===a?(c((function(a){return[].concat(Object(E.a)(a),[e.file.response])})),h.a.success("".concat(e.file.name," file uploaded successfully."))):"error"===a&&h.a.error("".concat(e.file.name," file upload failed."))}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(m.a,{span:24,className:"panel"},l.a.createElement("center",null,l.a.createElement("h1",null,"OCR")))),l.a.createElement(O,r,l.a.createElement("p",{className:"ant-upload-drag-icon"},l.a.createElement(v.a,null)),l.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),l.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")),t.map((function(e,a){return l.a.createElement(u.a,null,l.a.createElement(m.a,{span:12,className:"panel"},l.a.createElement(x.a,{document:{url:"https://contract-extractor-io.herokuapp.com/data/"+e.filename}})),l.a.createElement(m.a,{span:12,className:"panel"},l.a.createElement(b,{contract:e})))})))},C=function(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=a[0],c=a[1],r=0==t?l.a.createElement(u.a,null,l.a.createElement(m.a,{span:12,className:s.a.pane,onClick:function(){return c(2)}},l.a.createElement("div",{className:s.a.center},l.a.createElement(p.a,{style:{fontSize:"250px",color:"rgb(0, 200, 50)"}}),l.a.createElement("center",null,l.a.createElement("h1",null,"OCR")))),l.a.createElement(m.a,{span:12,className:s.a.pane,onClick:function(){return c(1)}},l.a.createElement("div",{className:s.a.center},l.a.createElement(f.a,{style:{fontSize:"250px",color:"#08c"}}),l.a.createElement("center",null,l.a.createElement("h1",null,"Text"))))):1==t?l.a.createElement(y,null):l.a.createElement(S,null);return l.a.createElement("div",null,r)},j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,a,t){e.exports={pane:"Home_pane__3eTBF",center:"Home_center__2czf1"}}},[[115,1,2]]]);
//# sourceMappingURL=main.eabb0206.chunk.js.map