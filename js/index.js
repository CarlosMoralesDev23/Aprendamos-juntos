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










//* ----------------------- Construir Modal Practica -----------------------
//* Referencias al DOM
const verboPregunta = document.getElementById("verbo");
const opcionesRespuesta = document.querySelectorAll(".opcion");
const contadorCorrectas = document.querySelector("#Correctas p");
const contadorIncorrectas = document.querySelector("#Incorrectas p");



// Variables para la práctica
let nivelActualPractica = nivelGuardado ? parseInt(nivelGuardado) : 1;
let correctas = 0; // Respuestas correctas
let incorrectas = 0; // Respuestas incorrectas
let preguntasDisponibles = []; // Almacena las preguntas disponibles en un nivel











// Cargar las preguntas del nivel actual
function inicializarNivel(nivel) {
    if (niveles.length === 0) {
        alert("No se han cargado los datos de niveles aún.");
        return;
    }

    const datosDelNivel = niveles.find((n) => n.level === nivel);

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

// Cargar una pregunta aleatoria del nivel actual
function cargarPregunta() {
    if (preguntasDisponibles.length === 0) {
        verificarDesbloqueo();
        return;
    }

    // Selecciona una pregunta aleatoria
    const randomIndex = Math.floor(Math.random() * preguntasDisponibles.length);
    const pregunta = preguntasDisponibles.splice(randomIndex, 1)[0]; // Elimina y obtiene la pregunta seleccionada

    // Desordenar las opciones de respuesta
    const opcionesDesordenadas = pregunta.options
        .slice()
        .sort(() => Math.random() - 0.5);

    // Mostrar la pregunta en el DOM
    verboPregunta.innerHTML = `<h2>${pregunta.present}</h2>`;
    opcionesRespuesta.forEach((opcion, idx) => {
        opcion.textContent = opcionesDesordenadas[idx];
        opcion.dataset.correcto =
            opcionesDesordenadas[idx] === pregunta.correct;
        opcion.classList.remove("bloqueado");
    });
}

// Verificar respuesta y cargar la siguiente pregunta
opcionesRespuesta.forEach((opcion) => {
    opcion.addEventListener("click", () => {
        if (opcion.classList.contains("bloqueado")) return; // Evita clics dobles
        opcion.classList.add("bloqueado"); // Bloquea clics adicionales

        if (opcion.dataset.correcto === "true") {
            correctas++;
            contadorCorrectas.textContent = correctas;
            alert("¡Correcto!");
        } else {
            incorrectas++;
            contadorIncorrectas.textContent = incorrectas;
            alert("Incorrecto. Inténtalo de nuevo.");
        }

        setTimeout(cargarPregunta, 500); // Carga la siguiente pregunta después de un breve retraso
    });
});

function desbloquearNivel(nivel) {
    const cajasNivel = document.querySelectorAll(".cajaNivel");
    if (nivel - 1 < cajasNivel.length) {
        cajasNivel[nivel - 1].classList.remove("bloqueado");
    }
}

function verificarDesbloqueo() {
    const totalPreguntas = correctas + incorrectas;
    const porcentajeCorrectas = (correctas / totalPreguntas) * 100;

    if (porcentajeCorrectas >= 80) {
        nivelActualPractica++;
        localStorage.setItem("nivelActual", nivelActualPractica); // Guardar el nivel aprobado

        desbloquearNivel(nivelActualPractica); // Desbloquea el siguiente nivel

        if (nivelActualPractica % 5 === 0) {
            alert(
                `¡Felicidades! Has desbloqueado el nivel Plus ${Math.floor(
                    nivelActualPractica / 5
                )}.`
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
        );
        inicializarNivel(nivelActualPractica); // Reinicia el nivel actual
    }
}

// Inicializa el nivel al cargar
inicializarNivel(nivelActualPractica);
