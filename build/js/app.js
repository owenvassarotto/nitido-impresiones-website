const navegacion=document.querySelector(".header .navegacion"),btnMenu=document.querySelector(".header #menu-btn"),enlaces=document.querySelectorAll(".header .navegacion a");function cargarEventos(){btnMenu.addEventListener("click",abrirCerrarMenu)}function abrirCerrarMenu(){btnMenu.classList.toggle("fa-times"),navegacion.classList.toggle("activo")}function scrollNavegacion(){enlaces.forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const o=e.target.attributes.href.value;document.querySelector(o).scrollIntoView({behavior:"smooth"})}))})}function scrollBtnEmpezar(){const e=document.querySelector(".hero .hero-contenido .button"),o=document.querySelector("#nosotros");e.addEventListener("click",()=>{o.scrollIntoView({behavior:"smooth"})})}cargarEventos(),window.onload=function(){const e=document.querySelector(".contenedor-loader");e.style.visibility="hidden",e.style.opacity="0"},window.onscroll=()=>{btnMenu.classList.remove("fa-times"),navegacion.classList.remove("activo")},window.addEventListener("scroll",(function(){document.querySelector(".header").classList.toggle("hd-activo",window.scrollY>0)})),scrollNavegacion(),scrollBtnEmpezar();
//# sourceMappingURL=app.js.map