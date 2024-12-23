//* ---------   Función LOGIN   ---------

const formLogin = document.getElementById("form_login");

document.getElementById("boton_login").addEventListener("click", () => {
    formLogin.classList.toggle("ocultoLogin");
});

document.getElementById("closeLogin").addEventListener("click", () => {
    formLogin.classList.toggle("ocultoLogin");
});

//* --------   Función Ayuda  --------

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









//* ----------------------  LocalStorage  ----------------------
let nivelGuardado = localStorage.getItem("nivelActual");











//*  ------------------------  Seleccion de tematica y asignacion a susbtitulos  ------------------------

const temas = document.querySelectorAll("#aplicacion_menu li a");
const tituloDeTemaElegido = document.getElementById("tituloDeTemaElegido");
const tituloDePractica = document.getElementById("tituloEncabezadoModalPractica");

function actualizarTituloTema(nuevoTitulo) {
    tituloDeTemaElegido.textContent = nuevoTitulo;
    tituloDePractica.textContent = nuevoTitulo;
    // datosPracticaActual.tema.push(nuevoTitulo);
}

temas.forEach((tema) => {
    tema.addEventListener("click", () => {
        const temaElegido = tema.textContent;
        actualizarTituloTema(temaElegido);
        // Aquí puedes agregar lógica adicional para mostrar contenido específico según el tema
    });
});










//*  ------------------------  Generar cajas de nivel por JS  ------------------------
const aplicacionNiveles = document.getElementById("aplicacion_niveles");
const totalNiveles = 20;
let nivelActual = 1;
let plusCount = 1;


//* Visual cajas
for (let i = 0; i < totalNiveles; i++) {
    const div = document.createElement("div");
    div.classList.add("cajaNivel");

    if (i > 0 && nivelActual % 5 !== 0) {
        div.classList.add("bloqueado");
    }

    // Niveles Plus
    if (nivelActual % 5 === 0) {
        div.classList.add("cajaNivelPlus");
        div.innerHTML = `<a href="#aplicacion_practica">Plus ${plusCount}</a>`;
        plusCount++;
    } else {
        div.innerHTML = `<a href="#aplicacion_practica">Nivel ${nivelActual}</a>`;
    }

    aplicacionNiveles.appendChild(div);
    nivelActual++;
}








//*  ------------------------  Crear la caja "Borrar Progreso"  -----------------------
const cajaBorrarProgreso = document.createElement("div");
cajaBorrarProgreso.id = "borrar-progreso";
cajaBorrarProgreso.classList.add("cajaNivel");
cajaBorrarProgreso.textContent = "Borrar Progreso";

//* Añadir la caja al último lugar de cajas
aplicacionNiveles.appendChild(cajaBorrarProgreso);

//* Evento para deshacer todo lo aprobado
cajaBorrarProgreso.addEventListener("click", reiniciarProgreso);


//* Función para reiniciar el progreso
function reiniciarProgreso() {
    localStorage.removeItem("nivelActual");
    nivelActualPractica = 1; //seteo el nivel actual a 1
    inicializarNivel(nivelActualPractica); // Reinicio el nivel 1
    alert("Progreso reiniciado.");
}








//*  ------------------  Generar bloqueo de cajas de nivel hasta aprobar ------------------

const cajasNivel = document.querySelectorAll(".cajaNivel");
cajasNivel.forEach((caja, indice) => {
    caja.addEventListener("click", () => {
        // Primero verifica si el índice es mayor o igual a 4:
        if (indice >= 4) {
            alert(
                "Este nivel está en desarrollo. Por favor, elige un nivel del 1 al Plus 1."
            );
        } else if (caja.classList.contains("bloqueado")) {
            alert("Debes aprobar los niveles anteriores para acceder a este.");
        } else {
            crearDatosPracticaActual();
        }
    });
});









//*  ------------------ Array Niveles  verbos-optiones ------------------
//* Para conectar con las cajas generadas anteriormente
let niveles = [];


//* ----------------------- Cargar Datos desde JSON -----------------------
async function cargarDatosDeJSON() {
    try {

        const timeOut = setTimeout(() => {
            throw new Error(
                "La petición tardo demasiado, No se pudo cargar el archivo JSON."
            );
        }, 2000);

        const response = await fetch("/js/niveles.JSON");
        clearTimeout(timeOut);

        niveles = await response.json(); 
        console.log("Datos del JSON cargados:", niveles);
    } catch (error) {
        console.error("Error al cargar el JSON:", error);
        alert("Hubo un problema al cargar los datos. Por favor, inténtalo de nuevo más tarde.");
    }
}








//* ----------------------- Construir Modal Practica -----------------------
//* Referencias al DOM
const verboPregunta = document.getElementById("verbo");
const opcionesRespuesta = document.querySelectorAll(".opcion");
const contadorCorrectas = document.querySelector("#Correctas p");
const contadorIncorrectas = document.querySelector("#Incorrectas p");


//* Variables para la práctica
let nivelActualPractica = nivelGuardado ? parseInt(nivelGuardado) : 1;
let correctas = 0; 
let incorrectas = 0; 
let preguntasDisponibles = []; 








//* --------------  Hacer click en caja y cargar la practica  ----------

//* Funcion para completar el modal practica - si nunca use - se llama al final del archivo con nivel 1 por defecto
function inicializarNivel(nivelActualPractica) {
    if (niveles.length === 0) {
        alert("No se han cargado los datos de niveles aún.");
        return;
    }

    const datosDelNivel = niveles.find((n) => n.level === nivelActualPractica);

    if (!datosDelNivel) {
        alert("No se encontraron datos para este nivel.");
        return;
    }

    preguntasDisponibles = [...datosDelNivel.verbs]; // Clona las preguntas del nivel
    correctas = 0;
    incorrectas = 0;
    contadorCorrectas.textContent = correctas;
    contadorIncorrectas.textContent = incorrectas;

    cargarPregunta();
}










//* --------- Funcion para cargar el verbo present y sus opciones aleatoriamente, del nivelActualPractica ----------
function cargarPregunta() {



    //* Si ya no quedan verbos present del nivelActualPractica verificar si aprobe o no. 
    if (preguntasDisponibles.length === 0) {
        verificarDesbloqueo();
        return;
    }



    //* Metodo para desordenar los verbos present del nivelActualPractica
    const randomIndex = Math.floor(Math.random() * preguntasDisponibles.length);
    const pregunta = preguntasDisponibles.splice(randomIndex, 1)[0]; // Elimina y obtiene la pregunta seleccionada



    //* Metodo para desordenar las opciones del verbo present del nivelActualPractica
    const opcionesDesordenadas = pregunta.options
        .slice()
        .sort(() => Math.random() - 0.5);



    //* Construir la pregunta en el DOM
    verboPregunta.innerHTML = `<h2>${pregunta.present}</h2>`;
    opcionesRespuesta.forEach((opcion, idx) => {
        opcion.textContent = opcionesDesordenadas[idx];
        opcion.dataset.correcto =
            opcionesDesordenadas[idx] === pregunta.correct;
        opcion.classList.remove("bloqueado");
    });
}








//* ------------------------ Comprobar si se elige la opcion correcta  --------------------------
// - Si es correcta se aumenta el contador correctas;  misma logica para las incorrectas
opcionesRespuesta.forEach((opcion) => {
    opcion.addEventListener("click", () => {
        if (opcion.classList.contains("bloqueado")) return;
        opcion.classList.add("bloqueado"); 

        if (opcion.dataset.correcto === "true") {
            correctas++;
            contadorCorrectas.textContent = correctas;
            alert("¡Correcto!");
        } else {
            incorrectas++;
            contadorIncorrectas.textContent = incorrectas;
            alert("Incorrecto. Inténtalo de nuevo.");
        }

        setTimeout(cargarPregunta, 300); 
    });
});








//*  ----------------  Función para desbloquear la caja nivel  ----------------
function desbloquearNivel(nivelActualPractica) {
    const cajasNivel = document.querySelectorAll(".cajaNivel");

    // si el nivel aprobado es 19, y voy al 20,  20-1,
    // es menor a los 20 caja nivel,  por lo cual caja 20 se desbloquea
    if (nivelActualPractica - 1 < cajasNivel.length) {
        cajasNivel[nivelActualPractica - 1].classList.remove("bloqueado");
    }
}










//* -----------------  Verificar si aprobe el nivel y desbloquear el siguiente  ---------------
function verificarDesbloqueo() {
    const totalPreguntas = correctas + incorrectas;
    const porcentajeCorrectas = (correctas / totalPreguntas) * 100;

    if (porcentajeCorrectas >= 80) {
        // Si se aprueba el nivel anterior entonces se aumenta el nivelActualPractica
        // Para posterior desbloquear el siguiente nivel
        nivelActualPractica++;

        //*  ---- LOCAL STORAGE - GUARDAR PROGRESO ---
        localStorage.setItem("nivelActual", nivelActualPractica);

        //* Desbloquea el siguiente nivel
        desbloquearNivel(nivelActualPractica);

        if (nivelActualPractica % 5 === 0) {
            alert(
                `¡Felicidades! Has desbloqueado el nivel Plus ${Math.floor(
                    nivelActualPractica / 5
                )}.` //divide el nivel actual entre 5, y redonea hacia abajo. 
            );
        } else {
            alert(
                `¡Felicidades! Has desbloqueado el nivel ${nivelActualPractica}.`
            );
        }

        inicializarNivel(nivelActualPractica);
    } else {
        alert(
            `No alcanzaste el 80%. Obtuviste un ${porcentajeCorrectas.toFixed(
                2
            )}%. Intenta nuevamente.`
            //tofixed con el numero 2, es para decir que te de 2 decimales
        );
        inicializarNivel(nivelActualPractica); // Volver a comenzar en el mismo nivel
    }
}










//* Llamar la función al inicio para cargar los datos en la variable global "niveles"
cargarDatosDeJSON().then(() => {
    console.log("Datos cargados y disponibles para usar.");
    inicializarNivel(nivelActualPractica); // Inicializa el nivel después de cargar los datos
});