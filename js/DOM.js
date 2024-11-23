
const ayudaIcon = document.getElementById("ayuda_icon");
const contenedorInstrucciones = document.getElementById(
    "contenedor_instrucciones"
);

ayudaIcon.addEventListener("click", () => {
    contenedorInstrucciones.classList.toggle("oculto");
});




const botonLogin = document.getElementById("boton_login");
const contenedorLogin = document.getElementById("form_login");
botonLogin.addEventListener("click", ()=>{
    contenedorInstrucciones.classList.toggle("oculto");
})