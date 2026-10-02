
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

        if (tipo === "todos") {
            
            card.parentElement.style.display = "";

        }

        else if (tipo === "vocal") {

            if (card.dataset.tipo === "vocal") {

                card.parentElement.style.display = "";

            } else {

                card.parentElement.style.display = "none";

            }

        } else if (tipo === "consonante") {

            if (card.dataset.tipo === "consonante") { 
                
                card.parentElement.style.display = "";

            } else {
                card.parentElement.style.display = "none"; 
            }

        }

    });

}
