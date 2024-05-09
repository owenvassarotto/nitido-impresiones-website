// Variables
const navegacion = document.querySelector(".header .navegacion");
const btnMenu = document.querySelector(".header #menu-btn");
const enlaces = document.querySelectorAll(".header .navegacion a");
// Setear el año actual al span del footer
const footerYear = document.getElementById("year").textContent = new Date().getFullYear();

cargarEventos();
// Función para llamar a los eventos
function cargarEventos() {
  btnMenu.addEventListener("click", abrirCerrarMenu);
  scrollNavegacion();
  scrollBtnEmpezar();
  ocultarBtnWsp(); 
}

function abrirCerrarMenu() {
  btnMenu.classList.toggle("fa-times");
  navegacion.classList.toggle("activo");
}

// Loader
window.onload = function () {
  const contenedor = document.querySelector(".contenedor-loader");

  contenedor.style.visibility = "hidden";
  contenedor.style.opacity = "0";
};

// Al dar scroll cierro el menú
window.onscroll = () => {
  btnMenu.classList.remove("fa-times");
  navegacion.classList.remove("activo");
};

// Modificar style del header al hacer scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("hd-activo", window.scrollY > 0);
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

// Botón empezar hero
function scrollBtnEmpezar() {
  const btnEmpezar = document.querySelector(".hero .hero-contenido .button");
  const seccion = document.querySelector("#nosotros");

  btnEmpezar.addEventListener("click", () => {
    seccion.scrollIntoView({ behavior: "smooth" });
  });
}

// Oculto en botón flotante de whatsapp para poder apreciar con claridad en footer
function ocultarBtnWsp(){
  const btnWsp = document.querySelector(".btn-wsp");
  const sectionContacto = document.querySelector("#contacto");

  window.addEventListener("scroll", function() {
    if(sectionContacto.getBoundingClientRect().top < 0){
     btnWsp.style.display = 'none';
    }
    else{
      btnWsp.style.display = "block";
    }
  });
}

