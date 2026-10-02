/*function contador() {
    const volteadas = document.querySelectorAll(".card-dorso").length;
    document.getElementById("contador").textContent = String(volteadas);
}

//FuncionFlipCard

function voltear(card) {
    //actualiza el contador de cartas volteadas
    contador();
    card.classList.toggle("card-dorso");
}

//Botones de filtro.

function filtro(tipo){
    
    switch (tipo) {
        case "vocal":
            document.querySelectorAll(`[data-tipo="consonante"]`).forEach((consonante) => {
                consonante.style.display = "none";
            })
            break;
        case "consonante":
            document.querySelectorAll(`[data-tipo="vocal"]`).forEach((vocal) => {
                vocal.style.display = "none";
            })
        case "todos":
            document.querySelectorAll(`[data-tipo="vocal"]`).forEach((vocal) => {
                vocal.style.display = "block";
            })
            document.querySelectorAll(`[data-tipo="consonante"]`).forEach((consonante) => {
                consonante.style.display = "block";
            })
    }
}*/
/* CONTADOR*/

let letrasDescubiertas = new Set();


/*FUNCIÓN VOLTEAR*/

function voltear(card) {

    // Agregar o quitar la clase volteada
    card.classList.toggle("volteada");


    // Identificar la letra
    const letra = card
        .querySelector(".card-frente h1")
        .textContent;


    // Si es la primera vez que se descubre
    if (card.classList.contains("volteada")) {

        if (!letrasDescubiertas.has(letra)) {

            letrasDescubiertas.add(letra);

            actualizarContador();

        }

    }

}


/* ACTUALIZAR CONTADOR*/

function actualizarContador() {

    const contador = document.getElementById("contador");

    contador.textContent = letrasDescubiertas.size;

}


/* FILTRAR*/

function filtrar(tipo) {

    const cards = document.querySelectorAll(".letra-card");


    cards.forEach(function (card) {

        if (tipo === "todas") {

            card.parentElement.style.display = "";

        }

        else if (tipo === "vocales") {

            if (card.dataset.tipo === "vocal") {

                card.parentElement.style.display = "";

            } else {

                card.parentElement.style.display = "none";

            }

        }

    });

}
