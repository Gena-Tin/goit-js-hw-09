const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");d.disabled=!0;let a=null;t.addEventListener("click",(()=>{t.disabled=!0,d.disabled=!1,a=setInterval((()=>{e.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.161a2155.js.map
