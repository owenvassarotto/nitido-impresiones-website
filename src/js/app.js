const navegacion = document.querySelector(".header .navegacion");
const btnMenu = document.querySelector(".header #menu-btn");

cargarEventos();

function cargarEventos() {
  btnMenu.addEventListener("click", abrirCerrarMenu);
}

function abrirCerrarMenu() {
  btnMenu.classList.toggle("fa-times");
  navegacion.classList.toggle("activo");
}

// Al dar scroll cierro el menú
window.onscroll = () => {
  btnMenu.classList.remove("fa-times");
  navegacion.classList.remove("activo");
};

window.addEventListener("scroll", function(){
  const header = document.querySelector('.header');
  header.classList.toggle('hd-activo', window.scrollY > 0);
});
