const navegacion = document.querySelector(".header .navegacion");
const btnMenu = document.querySelector(".header #menu-btn");
const enlaces = document.querySelectorAll(".header .navegacion a");

cargarEventos();

function cargarEventos() {
  btnMenu.addEventListener("click", abrirCerrarMenu);
}

function abrirCerrarMenu() {
  btnMenu.classList.toggle("fa-times");
  navegacion.classList.toggle("activo");
}

// Loader
window.onload = function(){
  const contenedor = document.querySelector('.contenedor-loader');

  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';
}

// Al dar scroll cierro el menú
window.onscroll = () => {
  btnMenu.classList.remove("fa-times");
  navegacion.classList.remove("activo");
};

// Modificar style del header al hacer scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector('.header');
  header.classList.toggle('hd-activo', window.scrollY > 0);
});

// Dirigirse a las distintas secciones
function scrollNavegacion() {
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}

scrollNavegacion();

// Botón empezar hero
function scrollBtnEmpezar(){
  const btnEmpezar = document.querySelector('.hero .hero-contenido .button');
  const seccion = document.querySelector('#nosotros');

  btnEmpezar.addEventListener('click', () =>{
    seccion.scrollIntoView({behavior: "smooth"});
  });
}

scrollBtnEmpezar();

