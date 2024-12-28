function cambiar(elemento) {
    if( elemento.innerText == "Cerrar Sesión") {
        elemento.innerText = "Iniciar Sesión"
        alert("¿Seguro que quieres cerrar sesión?")
    }else{
        elemento.innerText = "Cerrar Sesión"
        alert("¿Quieres iniciar sesión?")
    }
}

function desaparece(asd) {
    asd.remove();
}

function like(gustar) {
    alert("Te ha gustado esta definición")
}

function incrementarLikes() {
    const contenedor = document.querySelector("#goldenRetriever");
    const textoLikes = contenedor.querySelector(".megusta");
    let likesActuales = parseInt(textoLikes.innerText.split(" ")[0]);
    likesActuales++;

    textoLikes.innerText = ` ${likesActuales} me gusta`;
}
function incrementarLikes2() {
    const contenedor = document.querySelector("#gatoTigre");
    const textoLikes = contenedor.querySelector(".megusta");
    let likesActuales = parseInt(textoLikes.innerText.split(" ")[0]);
    likesActuales++;

    textoLikes.innerText = `${likesActuales} me gusta`;
}

