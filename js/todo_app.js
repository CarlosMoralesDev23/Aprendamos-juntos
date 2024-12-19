
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
