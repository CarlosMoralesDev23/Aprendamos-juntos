// Seleccionar el icono y el div
const ayudaIcon = document.getElementById("ayuda_icon");
const contenedorInstrucciones = document.getElementById("contenedor_instrucciones");

// Agregar evento al icono
ayudaIcon.addEventListener("click", () => {
    // Alternar visibilidad
    if (
        contenedorInstrucciones.style.display === "none" ||
        contenedorInstrucciones.style.display === ""
    ) {
        contenedorInstrucciones.style.display = "flex"; // Mostrar el div
    } else {
        contenedorInstrucciones.style.display = "none"; // Ocultar el div
    }
});

