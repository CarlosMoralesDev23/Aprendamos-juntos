
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



//* Cuando yo haga click en uno de los temas (li) del menu de app (EVENTO), se CREA un let tema




let tema = document.getElementById("")



const button = document.querySelector("button");


button.addEventListener("click", (event) => {
    button.textContent = `Recuento de clics: ${event.detail}`;



});