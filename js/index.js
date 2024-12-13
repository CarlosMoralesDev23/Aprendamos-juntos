
//* Función LOGIN
const botonLogin = document.getElementById("boton_login");
const closeLogin = document.getElementById("closeLogin");
const formLogin = document.getElementById("form_login")

botonLogin.addEventListener("click", () => {
    formLogin.classList.toggle("ocultoLogin");
});

closeLogin.addEventListener("click", () => {
    formLogin.classList.toggle("ocultoLogin");
})



//* Función Ayuda
const ayudaIcon = document.getElementById("ayuda_icon");
const closeContenedorInstrucciones = document.getElementById("closeLoginInstrucciones");
const contenedorInstrucciones = document.getElementById("contenedor_instrucciones");

ayudaIcon.addEventListener("click", () => {
    contenedorInstrucciones.classList.toggle("oculto");
});

closeContenedorInstrucciones.addEventListener("click", () => {
    contenedorInstrucciones.classList.toggle("oculto")
})





//* Modal practica menu

const temasElegidos = document.querySelectorAll("#aplicacion_menu li a")
const tituloDeTemaElegido = document.getElementById("tituloDeTemaElegido");

temasElegidos.forEach( tema => {
    tema.addEventListener("click", (event) => {
        //Acá obtendre el texto del tema elegido
        const temaElegido = event.target.textContent;

        //Acá tengo que actualizar h2 del contenedor de aplicación
        tituloDeTemaElegido.textContent = temaElegido;
    })
    
});
