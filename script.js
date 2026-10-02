function contador() {
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
}


