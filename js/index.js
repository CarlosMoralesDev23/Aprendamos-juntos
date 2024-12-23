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

//*  --------  Seleccion de tematica y asignacion a susbtitulos  ---------

const temas = document.querySelectorAll("#aplicacion_menu li a");
const tituloDeTemaElegido = document.getElementById("tituloDeTemaElegido");
const tituloDePractica = document.getElementById(
    "tituloEncabezadoModalPractica"
);

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

//*  --------  Generar cajas de nivel por JS  ---------
const aplicacionNiveles = document.getElementById("aplicacion_niveles");
const totalNiveles = 20;
let nivelActual = 1;
let plusCount = 1;

for (let i = 0; i < totalNiveles; i++) {
    const div = document.createElement("div");
    div.classList.add("cajaNivel");

    if (i > 0 && nivelActual % 5 !== 0) {
        div.classList.add("bloqueado");
    }

    // Si es un nivel Plus
    if (nivelActual % 5 === 0) {
        div.classList.add("cajaNivelPlus");
        div.innerHTML = `<a href="#aplicacion_practica">Plus ${plusCount}</a>`;
        plusCount++;
    } else {
        div.innerHTML = `<a href="#aplicacion_practica">Nivel ${nivelActual}</a>`;
    }

    aplicacionNiveles.appendChild(div);
    nivelActual++; // Incrementa el nivel actual después de cada ciclo
}

//*  --------  Generar bloqueo de cajas de nivel hasta aprobar ---------

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

//*  -------- Array Niveles  verbos-optiones --------
//* Para conectar con las cajas generadas anteriormente
const niveles = [
    {
        level: 1,
        verbs: [
            {
                numero: 1,
                present: "be",
                options: ["was/were", "been", "being"],
                correct: "was/were",
            },
            {
                numero: 2,
                present: "have",
                options: ["had", "hadded", "hadd"],
                correct: "had",
            },
            {
                numero: 3,
                present: "do",
                options: ["did", "done", "does"],
                correct: "did",
            },
            {
                numero: 4,
                present: "say",
                options: ["said", "sayed", "says"],
                correct: "said",
            },
            {
                numero: 5,
                present: "go",
                options: ["went", "goed", "goes"],
                correct: "went",
            },
            {
                numero: 6,
                present: "get",
                options: ["got", "getted", "gets"],
                correct: "got",
            },
            {
                numero: 7,
                present: "make",
                options: ["made", "maked", "makes"],
                correct: "made",
            },
            {
                numero: 8,
                present: "know",
                options: ["knew", "knowed", "knows"],
                correct: "knew",
            },
            {
                numero: 9,
                present: "think",
                options: ["thought", "thinked", "thinks"],
                correct: "thought",
            },
            {
                numero: 10,
                present: "take",
                options: ["took", "taked", "takes"],
                correct: "took",
            },
        ],
    },
    {
        level: 2,
        verbs: [
            {
                numero: 11,
                present: "come",
                options: ["came", "comed", "comes"],
                correct: "came",
            },
            {
                numero: 12,
                present: "see",
                options: ["saw", "seed", "sees"],
                correct: "saw",
            },
            {
                numero: 13,
                present: "want",
                options: ["wanted", "wantes", "wants"],
                correct: "wanted",
            },
            {
                numero: 14,
                present: "use",
                options: ["used", "useed", "uses"],
                correct: "used",
            },
            {
                numero: 15,
                present: "find",
                options: ["found", "finded", "finds"],
                correct: "found",
            },
            {
                numero: 16,
                present: "give",
                options: ["gave", "gived", "gives"],
                correct: "gave",
            },
            {
                numero: 17,
                present: "tell",
                options: ["told", "telled", "tells"],
                correct: "told",
            },
            {
                numero: 18,
                present: "work",
                options: ["worked", "workes", "works"],
                correct: "worked",
            },
            {
                numero: 19,
                present: "call",
                options: ["called", "callen", "calls"],
                correct: "called",
            },
            {
                numero: 20,
                present: "try",
                options: ["tried", "tryed", "tries"],
                correct: "tried",
            },
        ],
    },
    {
        level: 3,
        verbs: [
            {
                numero: 21,
                present: "need",
                options: ["needed", "needes", "needs"],
                correct: "needed",
            },
            {
                numero: 22,
                present: "feel",
                options: ["felt", "feeled", "feels"],
                correct: "felt",
            },
            {
                numero: 23,
                present: "become",
                options: ["became", "becomed", "becomes"],
                correct: "became",
            },
            {
                numero: 24,
                present: "leave",
                options: ["left", "leaved", "leaves"],
                correct: "left",
            },
            {
                numero: 25,
                present: "put",
                options: ["put", "putted", "puts"],
                correct: "put",
            },
            {
                numero: 26,
                present: "mean",
                options: ["meant", "meaned", "means"],
                correct: "meant",
            },
            {
                numero: 27,
                present: "keep",
                options: ["kept", "keeped", "keeps"],
                correct: "kept",
            },
            {
                numero: 28,
                present: "let",
                options: ["let", "letted", "lets"],
                correct: "let",
            },
            {
                numero: 29,
                present: "begin",
                options: ["began", "beginned", "begins"],
                correct: "began",
            },
            {
                numero: 30,
                present: "seem",
                options: ["seemed", "seemes", "seems"],
                correct: "seemed",
            },
        ],
    },
    {
        level: 4,
        verbs: [
            {
                numero: 31,
                present: "help",
                options: ["helped", "helpes", "helps"],
                correct: "helped",
            },
            {
                numero: 32,
                present: "talk",
                options: ["talked", "talkes", "talks"],
                correct: "talked",
            },
            {
                numero: 33,
                present: "turn",
                options: ["turned", "turnes", "turns"],
                correct: "turned",
            },
            {
                numero: 34,
                present: "start",
                options: ["started", "startes", "starts"],
                correct: "started",
            },
            {
                numero: 35,
                present: "show",
                options: ["showed", "showen", "shows"],
                correct: "showed",
            },
            {
                numero: 36,
                present: "play",
                options: ["played", "playes", "plays"],
                correct: "played",
            },
            {
                numero: 37,
                present: "run",
                options: ["ran", "runned", "runs"],
                correct: "ran",
            },
            {
                numero: 38,
                present: "move",
                options: ["moved", "moveed", "moves"],
                correct: "moved",
            },
            {
                numero: 39,
                present: "like",
                options: ["liked", "likees", "likes"],
                correct: "liked",
            },
            {
                numero: 40,
                present: "live",
                options: ["lived", "liveed", "lives"],
                correct: "lived",
            },
        ],
    },
    {
        plus: 1,
        verbs: [
            {
                numero: 51,
                present: "include",
                options: ["included", "includeed", "includes"],
                correct: "included",
            },
        ],
    },
];

//* Practica

//*  --------  MODAL DE PRÁCTICA  ---------

// Referencias al DOM del modal práctica
const verboPregunta = document.getElementById("verbo");
const opcionesRespuesta = document.querySelectorAll(".opcion");
const contadorCorrectas = document.querySelector("#Correctas p");
const contadorIncorrectas = document.querySelector("#Incorrectas p");



// Al cargar la página, restaurar el nivel guardado
let nivelGuardado = localStorage.getItem("nivelActual");

// Variables para la práctica
let nivelActualPractica = nivelGuardado ? parseInt(nivelGuardado) : 1;
let correctas = 0; // Respuestas correctas
let incorrectas = 0; // Respuestas incorrectas
let preguntasDisponibles = []; // Almacena las preguntas disponibles en un nivel

// Cargar las preguntas del nivel actual
function inicializarNivel(nivel) {
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
        opcion.dataset.correcto = opcionesDesordenadas[idx] === pregunta.correct;
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

function verificarDesbloqueo() {
    const totalPreguntas = correctas + incorrectas;
    const porcentajeCorrectas = (correctas / totalPreguntas) * 100;

    if (porcentajeCorrectas >= 80) {
        nivelActualPractica++;
        localStorage.setItem("nivelActual", nivelActualPractica); // Guardar el nivel aprobado

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






//* Asignarselo a una caja tipo nivel 
function reiniciarProgreso() {
    localStorage.removeItem("nivelActual");
    nivelActualPractica = 1;
    inicializarNivel(nivelActualPractica);
    alert("Progreso reiniciado.");
}