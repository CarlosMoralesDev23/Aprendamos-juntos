
//Función LOGIN

const botonLogin = document.getElementById("boton_login");
const contenedorLogin = document.getElementById("form_login");
botonLogin.addEventListener("click", () => {
    contenedorLogin.classList.toggle("ocultoLogin");
});





//Función Ayuda
const ayudaIcon = document.getElementById("ayuda_icon");
const contenedorInstrucciones = document.getElementById(
    "contenedor_instrucciones"
);

ayudaIcon.addEventListener("click", () => {
    contenedorInstrucciones.classList.toggle("oculto");
});

