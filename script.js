window.onload = function() {
    var pantallaCarga = document.getElementById("pantallaCarga");
    var contenidoPrincipal = document.getElementById("contenidoPrincipal");
    var pantallaintermedia = document.getElementById("pantallaintermedia");
    var popupAnuncio = document.getElementById("popupAnuncio");
    var cerrarPopup = document.getElementById("cerrarPopup");
    var aceptarCookies = document.getElementById("aceptarCookies");
    var botonAceptarCookies = document.getElementById("botonAceptarCookies");
    var cookiesAceptadas = false;

    pantallaintermedia.style.display = "none";

    // Pantalla de carga
    setTimeout(function() {
        pantallaCarga.style.display = "none";
        contenidoPrincipal.style.display = "block";
        contenidoPrincipal.style.visibility = "visible";
    }, 1000);

    // Mostrar pop-up después de 10 segundos
    setTimeout(function() {
        popupAnuncio.style.display = "flex";
    }, 10000);

    cerrarPopup.onclick = function() {
        popupAnuncio.style.display = "none";
    }

    document.getElementById("Boton").onclick = function() {
        pantallaintermedia.style.display = "block";
    };

    // Mostrar la barra de cookies
    aceptarCookies.style.display = "block";

    // Controlar el scroll
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var documentHeight = document.documentElement.scrollHeight;
        var windowHeight = window.innerHeight;

        // Si no se han aceptado las cookies y el usuario intenta bajar más allá de la mitad de la página
        if (!cookiesAceptadas && scrollTop > (documentHeight - windowHeight) / 2) {
            window.scrollTo(0, (documentHeight - windowHeight) / 2);
            aceptarCookies.style.display = "block";
        }
    };

    // Aceptar cookies
    botonAceptarCookies.onclick = function() {
        cookiesAceptadas = true;
        aceptarCookies.style.display = "none";
    }
}






