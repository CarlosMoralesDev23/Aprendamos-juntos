
//Función LOGIN
document.getElementById("boton_login").addEventListener("click", () => {
    document.getElementById("form_login").classList.toggle("ocultoLogin");
});




//Función Ayuda
const ayudaIcon = document.getElementById("ayuda_icon");
const contenedorInstrucciones = document.getElementById(
    "contenedor_instrucciones"
);

ayudaIcon.addEventListener("click", () => {
    contenedorInstrucciones.classList.toggle("oculto");
});

