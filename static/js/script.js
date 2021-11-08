function pantallaCompleta(elemento) {
    // Soporta la mayoría de navegadores y sus versiones:
    var metodo = elemento.requestFullScreen 
        || elemento.webkitRequestFullScreen 
        || elemento.mozRequestFullScreen 
        || elemento.msRequestFullScreen;

    if (metodo) { // Función nativa
        metodo.call(elemento);
    } else if (typeof window.ActiveXObject !== "undefined") { // IE antiguo
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function cambiarOrientacionPantalla(orientacion = 'landscape-primary') {
    if (screen.orientation.type != orientacion) {
        screen.orientation.lock(orientacion)
            .then(() => {
                console.info('Orientación bloqueada.');
                console.info(orientacion);
            })
            .catch((error) => {
                console.error(error);
                alert(error);
            });
    }
}

function main() {
    // Cada que se presione un boton se mostrará la ventana modal:
    document.querySelectorAll('main button').forEach(btn => {
        btn.addEventListener('click', Modal.mostrar, false);
    });

    Modal.mostrar();
    Modal.ponerContenido('Call Of Gruty', `
        <p>
            Para jugar debes dar permiso de acceder a las siguientes funciones:
            <ul>
                <li>Pantalla completa</li>
                <li>Rotar pantalla</li>
            </ul>
        </p>
        <button id="pantalla-completa-btn">Acepto</button>
    `);
    document.getElementById('pantalla-completa-btn').addEventListener('click', (evento) => {
        evento.preventDefault();
        evento.stopPropagation();

        pantallaCompleta(document.body);

        screen.orientation.addEventListener('change', () => cambiarOrientacionPantalla());
        cambiarOrientacionPantalla();

        Modal.esconder();
    });
}

document.readyState == 'complete'? main(): document.addEventListener('DOMContentLoaded', main);
