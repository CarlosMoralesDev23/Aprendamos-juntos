
// Todo ESTO SE DEBERIA HACER CON Javascript


//TODO en las paginas del sitio web, y navegar entre ellas.
//1  home
//2  about me
//3  contec me
//4  sing up
//5  politicas


//TODO cuando haga click en uno de los li del menu del app, el modal niveles modifique
// Este debe traerse todo el objeto con todos los niveles que correspondan a dicha tematica. 
// su encabezado. 
// información ayuda
// los niveles van con los objetos que correspondan. 



//TODO cuando haga click en uno de los niveles, el modal practica modifique
// este debe traerse la seccion objeto que corresponda al nivel. y con el formar el:  
// su encabezado. 
// información ayuda
// los niveles van con los objetos que correspondan. 
// Los verbos se mostraran de forma aleatoria
// se carga el primer verbo del objeto, 


//TODO Cuando se seleccione una opcion recien allí se habilita el boton avanzar

//TODO cuando presione el boton avanzar y la respuesta es correcta, aumentar el contador correct en +1

//TODO cuando presione el boton avanzar y la respuesta es INcorrecta, aumentar el contador correct en +1

//TODO cuando presione el boton avanzar y la respuesta es correcta, que el contador Correct parpadee en verde 2 segundos en verde. 

//TODO cuando presione el boton avanzar y la respuesta es INcorrecta, que el contador INorrect parpadee en Rojo 2 segundos en verde. 

//TODO cuando presione el boton avanzar y se hayam terminado los vedrbos y las correctas son superior al 80% mostar un alert de que el usuario aprobo. 








// Obtenemos el contenedor principal
const contenedorPractica = document.getElementById("aplicacion_practica");

// Función para construir el modal de práctica
function construirPractica(levelKey, verboIndex) {
    const level = levels[levelKey];
    const verbo = level.verbs[verboIndex];

    // Asegurarse de que haya un verbo válido
    if (!verbo) {
        console.error("Verbo no encontrado en el nivel especificado.");
        return;
    }

    // Limpia el contenedor previo (si ya tenía contenido)
    contenedorPractica.innerHTML = "";

    // Crear la estructura HTML
    const html = `
        <div class="parent">
            <div id="tarea"><h3 id="tituloEncabezadoModalPractica">${levelKey} - Verb Practice</h3></div>
            <div id="iconoAyuda"><p>Help</p></div>
            <div id="verbo"><h2>${verbo.present}</h2></div>
            ${verbo.options
                .map(
                    (option, index) => `
                    <div id="opcion${index + 1}" class="opcion">
                        <h4>${option}</h4>
                    </div>`
                )
                .join("")}
            <button class="contadores" id="Correctas">  
                <h3>Correct:</h3>
                <p>0</p>
            </button>
            <button class="contadores" id="Incorrectas">
                <h3>Incorrect:</h3>
                <p>0</p>
            </button>
            <button class="botones" id="Avanzar">
                <h3>Avanzar</h3>
            </button>
        </div>
    `;

    // Insertar el HTML en el contenedor
    contenedorPractica.innerHTML = html;

    // Agregar eventos de interacción
    const opciones = document.querySelectorAll(".opcion");
    opciones.forEach((opcion, index) => {
        opcion.addEventListener("click", () => {
            const selectedOption = verbo.options[index];
            if (selectedOption === verbo.correct) {
                alert("¡Correcto!");
            } else {
                alert("Incorrecto. La respuesta correcta era: " + verbo.correct);
            }
        });
    });

    const botonAvanzar = document.getElementById("Avanzar");
    botonAvanzar.addEventListener("click", () => {
        const siguienteIndex = verboIndex + 1 < level.verbs.length ? verboIndex + 1 : 0;
        construirPractica(levelKey, siguienteIndex);
    });
}

// Inicia la práctica con el primer nivel y primer verbo
construirPractica("level_1", 0);






const levels = {
    level_1: {
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
    level_2: {
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
    level_3: {
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
    level_4: {
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
    level_5: {
        verbs: [
            {
                numero: 41,
                present: "believe",
                options: ["believed", "believeed", "believes"],
                correct: "believed",
            },
            {
                numero: 42,
                present: "hold",
                options: ["held", "holded", "holds"],
                correct: "held",
            },
            {
                numero: 43,
                present: "bring",
                options: ["brought", "bringed", "brings"],
                correct: "brought",
            },
            {
                numero: 44,
                present: "happen",
                options: ["happened", "happend", "happens"],
                correct: "happened",
            },
            {
                numero: 45,
                present: "write",
                options: ["wrote", "writed", "writes"],
                correct: "wrote",
            },
            {
                numero: 46,
                present: "sit",
                options: ["sat", "sitted", "sits"],
                correct: "sat",
            },
            {
                numero: 47,
                present: "stand",
                options: ["stood", "standed", "stands"],
                correct: "stood",
            },
            {
                numero: 48,
                present: "lose",
                options: ["lost", "loseed", "loses"],
                correct: "lost",
            },
            {
                numero: 49,
                present: "pay",
                options: ["paid", "payed", "pays"],
                correct: "paid",
            },
            {
                numero: 50,
                present: "meet",
                options: ["met", "meeted", "meets"],
                correct: "met",
            },
        ],
    },
    level_6: {
        verbs: [
            {
                numero: 51,
                present: "include",
                options: ["included", "includeed", "includes"],
                correct: "included",
            },
            {
                numero: 52,
                present: "continue",
                options: ["continued", "continueed", "continues"],
                correct: "continued",
            },
            {
                numero: 53,
                present: "set",
                options: ["set", "setted", "sets"],
                correct: "set",
            },
            {
                numero: 54,
                present: "learn",
                options: ["learned", "learnes", "learns"],
                correct: "learned",
            },
            {
                numero: 55,
                present: "change",
                options: ["changed", "changeed", "changes"],
                correct: "changed",
            },
            {
                numero: 56,
                present: "lead",
                options: ["led", "leaded", "leads"],
                correct: "led",
            },
            {
                numero: 57,
                present: "understand",
                options: ["understood", "understanded", "understands"],
                correct: "understood",
            },
            {
                numero: 58,
                present: "watch",
                options: ["watched", "watcheed", "watches"],
                correct: "watched",
            },
            {
                numero: 59,
                present: "follow",
                options: ["followed", "followes", "follows"],
                correct: "followed",
            },
            {
                numero: 60,
                present: "stop",
                options: ["stopped", "stopes", "stops"],
                correct: "stopped",
            },
        ],
    },
    level_7: {
        verbs: [
            {
                numero: 61,
                present: "create",
                options: ["created", "createed", "creates"],
                correct: "created",
            },
            {
                numero: 62,
                present: "speak",
                options: ["spoke", "speaken", "speaks"],
                correct: "spoke",
            },
            {
                numero: 63,
                present: "read",
                options: ["read", "readed", "reads"],
                correct: "read",
            },
            {
                numero: 64,
                present: "allow",
                options: ["allowed", "allowes", "allows"],
                correct: "allowed",
            },
            {
                numero: 65,
                present: "add",
                options: ["added", "addes", "adds"],
                correct: "added",
            },
            {
                numero: 66,
                present: "spend",
                options: ["spent", "spended", "spends"],
                correct: "spent",
            },
            {
                numero: 67,
                present: "grow",
                options: ["grew", "growed", "grows"],
                correct: "grew",
            },
            {
                numero: 68,
                present: "open",
                options: ["opened", "openes", "opens"],
                correct: "opened",
            },
            {
                numero: 69,
                present: "walk",
                options: ["walked", "walkes", "walks"],
                correct: "walked",
            },
            {
                numero: 70,
                present: "win",
                options: ["won", "winned", "wins"],
                correct: "won",
            },
        ],
    },
    level_8: {
        verbs: [
            {
                numero: 71,
                present: "offer",
                options: ["offered", "offeres", "offers"],
                correct: "offered",
            },
            {
                numero: 72,
                present: "remember",
                options: ["remembered", "rememberes", "remembers"],
                correct: "remembered",
            },
            {
                numero: 73,
                present: "love",
                options: ["loved", "lovees", "loves"],
                correct: "loved",
            },
            {
                numero: 74,
                present: "consider",
                options: ["considered", "consideres", "considers"],
                correct: "considered",
            },
            {
                numero: 75,
                present: "appear",
                options: ["appeared", "appeares", "appears"],
                correct: "appeared",
            },
            {
                numero: 76,
                present: "buy",
                options: ["bought", "buyed", "buys"],
                correct: "bought",
            },
            {
                numero: 77,
                present: "wait",
                options: ["waited", "waites", "waits"],
                correct: "waited",
            },
            {
                numero: 78,
                present: "serve",
                options: ["served", "servees", "serves"],
                correct: "served",
            },
            {
                numero: 79,
                present: "die",
                options: ["died", "dieed", "dies"],
                correct: "died",
            },
            {
                numero: 80,
                present: "send",
                options: ["sent", "sended", "sends"],
                correct: "sent",
            },
        ],
    },
    level_9: {
        verbs: [
            {
                numero: 81,
                present: "expect",
                options: ["expected", "expectes", "expects"],
                correct: "expected",
            },
            {
                numero: 82,
                present: "build",
                options: ["built", "builded", "builds"],
                correct: "built",
            },
            {
                numero: 83,
                present: "stay",
                options: ["stayed", "stayes", "stays"],
                correct: "stayed",
            },
            {
                numero: 84,
                present: "fall",
                options: ["fell", "falled", "falls"],
                correct: "fell",
            },
            {
                numero: 85,
                present: "cut",
                options: ["cut", "cutted", "cuts"],
                correct: "cut",
            },
            {
                numero: 86,
                present: "reach",
                options: ["reached", "reaches", "reached"],
                correct: "reached",
            },
            {
                numero: 87,
                present: "kill",
                options: ["killed", "killes", "kills"],
                correct: "killed",
            },
            {
                numero: 88,
                present: "remain",
                options: ["remained", "remaines", "remains"],
                correct: "remained",
            },
            {
                numero: 89,
                present: "suggest",
                options: ["suggested", "suggestes", "suggests"],
                correct: "suggested",
            },
            {
                numero: 90,
                present: "raise",
                options: ["raised", "raisees", "raises"],
                correct: "raised",
            },
        ],
    },
    level_10: {
        verbs: [
            {
                numero: 91,
                present: "pass",
                options: ["passed", "passes", "pass"],
                correct: "passed",
            },
            {
                numero: 92,
                present: "sell",
                options: ["sold", "selled", "sells"],
                correct: "sold",
            },
            {
                numero: 93,
                present: "require",
                options: ["required", "requires", "require"],
                correct: "required",
            },
            {
                numero: 94,
                present: "report",
                options: ["reported", "reportes", "reports"],
                correct: "reported",
            },
            {
                numero: 95,
                present: "decide",
                options: ["decided", "decides", "decide"],
                correct: "decided",
            },
            {
                numero: 96,
                present: "pull",
                options: ["pulled", "pulles", "pull"],
                correct: "pulled",
            },
            {
                numero: 97,
                present: "break",
                options: ["broke", "broked", "breaks"],
                correct: "broke",
            },
            {
                numero: 98,
                present: "spend",
                options: ["spent", "spendes", "spend"],
                correct: "spent",
            },
            {
                numero: 99,
                present: "wear",
                options: ["wore", "weared", "wears"],
                correct: "wore",
            },
            {
                numero: 100,
                present: "drive",
                options: ["drove", "drived", "drives"],
                correct: "drove",
            },
        ],
    },
    level_11: {
        verbs: [
            {
                numero: 101,
                present: "choose",
                options: ["chose", "choosed", "chooses"],
                correct: "chose",
            },
            {
                numero: 102,
                present: "win",
                options: ["won", "winned", "wins"],
                correct: "won",
            },
            {
                numero: 103,
                present: "teach",
                options: ["taught", "teached", "teaches"],
                correct: "taught",
            },
            {
                numero: 104,
                present: "develop",
                options: ["developed", "developes", "develops"],
                correct: "developed",
            },
            {
                numero: 105,
                present: "sleep",
                options: ["slept", "sleeped", "sleeps"],
                correct: "slept",
            },
            {
                numero: 106,
                present: "catch",
                options: ["caught", "catched", "catches"],
                correct: "caught",
            },
            {
                numero: 107,
                present: "spend",
                options: ["spent", "spendes", "spends"],
                correct: "spent",
            },
            {
                numero: 108,
                present: "fight",
                options: ["fought", "fighted", "fights"],
                correct: "fought",
            },
            {
                numero: 109,
                present: "throw",
                options: ["threw", "throwed", "throws"],
                correct: "threw",
            },
            {
                numero: 110,
                present: "hit",
                options: ["hit", "hitted", "hits"],
                correct: "hit",
            },
        ],
    },
    level_12: {
        verbs: [
            {
                numero: 111,
                present: "prove",
                options: ["proved", "proveed", "proves"],
                correct: "proved",
            },
            {
                numero: 112,
                present: "decide",
                options: ["decided", "decides", "decide"],
                correct: "decided",
            },
            {
                numero: 113,
                present: "forget",
                options: ["forgot", "forgeted", "forgets"],
                correct: "forgot",
            },
            {
                numero: 114,
                present: "sing",
                options: ["sang", "singed", "sings"],
                correct: "sang",
            },
            {
                numero: 115,
                present: "fly",
                options: ["flew", "flied", "flies"],
                correct: "flew",
            },
            {
                numero: 116,
                present: "grow",
                options: ["grew", "growed", "grows"],
                correct: "grew",
            },
            {
                numero: 117,
                present: "drink",
                options: ["drank", "drinked", "drinks"],
                correct: "drank",
            },
            {
                numero: 118,
                present: "run",
                options: ["ran", "runned", "runs"],
                correct: "ran",
            },
            {
                numero: 119,
                present: "rise",
                options: ["rose", "rised", "rises"],
                correct: "rose",
            },
            {
                numero: 120,
                present: "beat",
                options: ["beat", "beated", "beats"],
                correct: "beat",
            },
        ],
    },
    level_13: {
        verbs: [
            {
                numero: 121,
                present: "drive",
                options: ["drove", "drived", "drives"],
                correct: "drove",
            },
            {
                numero: 122,
                present: "fall",
                options: ["fell", "falled", "falls"],
                correct: "fell",
            },
            {
                numero: 123,
                present: "hurt",
                options: ["hurt", "hurted", "hurts"],
                correct: "hurt",
            },
            {
                numero: 124,
                present: "shoot",
                options: ["shot", "shooted", "shoots"],
                correct: "shot",
            },
            {
                numero: 125,
                present: "stand",
                options: ["stood", "standed", "stands"],
                correct: "stood",
            },
            {
                numero: 126,
                present: "read",
                options: ["read", "readed", "reads"],
                correct: "read",
            },
            {
                numero: 127,
                present: "begin",
                options: ["began", "beginned", "begins"],
                correct: "began",
            },
            {
                numero: 128,
                present: "close",
                options: ["closed", "closeed", "closes"],
                correct: "closed",
            },
            {
                numero: 129,
                present: "explain",
                options: ["explained", "explaines", "explains"],
                correct: "explained",
            },
            {
                numero: 130,
                present: "answer",
                options: ["answered", "answeres", "answers"],
                correct: "answered",
            },
        ],
    },
    level_14: {
        verbs: [
            {
                numero: 131,
                present: "run",
                options: ["ran", "runned", "runs"],
                correct: "ran",
            },
            {
                numero: 132,
                present: "allow",
                options: ["allowed", "allowes", "allows"],
                correct: "allowed",
            },
            {
                numero: 133,
                present: "lose",
                options: ["lost", "loseed", "loses"],
                correct: "lost",
            },
            {
                numero: 134,
                present: "choose",
                options: ["chose", "choosed", "chooses"],
                correct: "chose",
            },
            {
                numero: 135,
                present: "open",
                options: ["opened", "openes", "opens"],
                correct: "opened",
            },
            {
                numero: 136,
                present: "speak",
                options: ["spoke", "speaken", "speaks"],
                correct: "spoke",
            },
            {
                numero: 137,
                present: "show",
                options: ["showed", "showes", "shows"],
                correct: "showed",
            },
            {
                numero: 138,
                present: "write",
                options: ["wrote", "writed", "writes"],
                correct: "wrote",
            },
            {
                numero: 139,
                present: "listen",
                options: ["listened", "listenes", "listens"],
                correct: "listened",
            },
            {
                numero: 140,
                present: "appear",
                options: ["appeared", "appeares", "appears"],
                correct: "appeared",
            },
        ],
    },
    level_15: {
        verbs: [
            {
                numero: 141,
                present: "build",
                options: ["built", "builded", "builds"],
                correct: "built",
            },
            {
                numero: 142,
                present: "buy",
                options: ["bought", "buyed", "buys"],
                correct: "bought",
            },
            {
                numero: 143,
                present: "catch",
                options: ["caught", "catched", "catches"],
                correct: "caught",
            },
            {
                numero: 144,
                present: "feel",
                options: ["felt", "feeled", "feels"],
                correct: "felt",
            },
            {
                numero: 145,
                present: "find",
                options: ["found", "finded", "finds"],
                correct: "found",
            },
            {
                numero: 146,
                present: "forget",
                options: ["forgot", "forgeted", "forgets"],
                correct: "forgot",
            },
            {
                numero: 147,
                present: "hear",
                options: ["heard", "heared", "hears"],
                correct: "heard",
            },
            {
                numero: 148,
                present: "hold",
                options: ["held", "holded", "holds"],
                correct: "held",
            },
            {
                numero: 149,
                present: "keep",
                options: ["kept", "keeped", "keeps"],
                correct: "kept",
            },
            {
                numero: 150,
                present: "leave",
                options: ["left", "leaved", "leaves"],
                correct: "left",
            },
        ],
    },
    level_16: {
        verbs: [
            {
                numero: 151,
                present: "mean",
                options: ["meant", "meaned", "means"],
                correct: "meant",
            },
            {
                numero: 152,
                present: "meet",
                options: ["met", "meeted", "meets"],
                correct: "met",
            },
            {
                numero: 153,
                present: "pay",
                options: ["paid", "payed", "pays"],
                correct: "paid",
            },
            {
                numero: 154,
                present: "put",
                options: ["put", "putted", "puts"],
                correct: "put",
            },
            {
                numero: 155,
                present: "read",
                options: ["read", "readed", "reads"],
                correct: "read",
            },
            {
                numero: 156,
                present: "run",
                options: ["ran", "runned", "runs"],
                correct: "ran",
            },
            {
                numero: 157,
                present: "say",
                options: ["said", "sayed", "says"],
                correct: "said",
            },
            {
                numero: 158,
                present: "sell",
                options: ["sold", "selled", "sells"],
                correct: "sold",
            },
            {
                numero: 159,
                present: "send",
                options: ["sent", "sended", "sends"],
                correct: "sent",
            },
            {
                numero: 160,
                present: "set",
                options: ["set", "setted", "sets"],
                correct: "set",
            },
        ],
    },
    level_plus1: {
        verbs: [
            {
                numero: 51,
                present: "include",
                options: ["included", "includeed", "includes"],
                correct: "included",
            },
        ],
    },
    level_plus2: {
        verbs: [
            {
                numero: 51,
                present: "include",
                options: ["included", "includeed", "includes"],
                correct: "included",
            },
        ],
    },
    level_plus3: {
        verbs: [
            {
                numero: 51,
                present: "include",
                options: ["included", "includeed", "includes"],
                correct: "included",
            },
        ],
    },
};
