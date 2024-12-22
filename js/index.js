//* Función LOGIN
const formLogin = document.getElementById("form_login");

document.getElementById("boton_login").addEventListener("click", () => {
    formLogin.classList.toggle("ocultoLogin");
});

document.getElementById("closeLogin").addEventListener("click", () => {
    formLogin.classList.toggle("ocultoLogin");
});

//* Función Ayuda
const ayudaIcon = document.getElementById("ayuda_icon");
const closeContenedorInstrucciones = document.getElementById(
    "closeLoginInstrucciones"
);
const contenedorInstrucciones = document.getElementById(
    "contenedor_instrucciones"
);

ayudaIcon.addEventListener("click", () => {
    contenedorInstrucciones.classList.toggle("oculto");
});

closeContenedorInstrucciones.addEventListener("click", () => {
    contenedorInstrucciones.classList.toggle("oculto");
});









// Obtener los elementos del DOM
const temas = document.querySelectorAll("#aplicacion_menu li a");
const tituloDeTemaElegido = document.getElementById("tituloDeTemaElegido");
const tituloDePractica = document.getElementById(
    "tituloEncabezadoModalPractica"
);

// Función para actualizar el título del tema elegido
function actualizarTituloTema(nuevoTitulo) {
    tituloDeTemaElegido.textContent = nuevoTitulo;
    tituloDePractica.textContent = nuevoTitulo;
}

// Agregar event listener a los temas
temas.forEach(tema => {
    tema.addEventListener('click', () => {
        const temaElegido = tema.textContent;
        actualizarTituloTema(temaElegido);
        // Aquí puedes agregar lógica adicional para mostrar contenido específico según el tema
    });
});



const cajasNivel = document.querySelectorAll(".cajaNivel");

cajasNivel.forEach((caja, indice) => {
    caja.addEventListener("click", () => {
        // Si el índice es mayor o igual a 4 (suponiendo que "Plus 1" está en el índice 3):
        if (indice >= 4) {
            alert(
                "Este nivel está en desarrollo. Por favor, elige un nivel del 1 al Plus 1."
            );
        }
    });
});