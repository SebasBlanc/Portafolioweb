document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Ocultar el header en pantallas pequeñas al cargar la página
    if (window.innerWidth <= 768) {
        header.style.transform = "translateY(-100%)";
        header.style.opacity = "0";
    }

    // Mostrar el header cuando el mouse entra en la parte superior
    document.addEventListener("mousemove", function (event) {
        if (event.clientY < 50) {
            header.style.transform = "translateY(0)";
            header.style.opacity = "1";
        }
    });

    // Ocultar el header cuando el mouse sale de la parte superior
    document.addEventListener("mouseleave", function () {
        if (window.innerWidth <= 768) {
            header.style.transform = "translateY(-100%)";
            header.style.opacity = "0";
        }
    });

    // Asegurar que el header se esconda al redimensionar la pantalla
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 768) {
            header.style.transform = "translateY(-100%)";
            header.style.opacity = "0";
        } else {
            header.style.transform = "translateY(0)";
            header.style.opacity = "1";
        }
    });
});


