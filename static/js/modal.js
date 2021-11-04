let $contenedor_modal;

class Modal {
    static mostrando = false;
    static $titulo_modal;
    static $cuerpo_modal;
    static $modal;

    static ponerContenido(titulo, contenido) {
        Modal.$cuerpo_modal.innerHTML = contenido;
        Modal.$titulo_modal.innerHTML = titulo;
    }

    static esconder() {
        Modal.limpiar();

        $contenedor_modal.classList.add('d-none');
        Modal.mostrando = false;
    }

    static mostrar() {
        $contenedor_modal.classList.remove('d-none');
        Modal.mostrando = true;
    }

    static limpiar() {
        Modal.ponerContenido('', '');
    }
}

function main() {
    $contenedor_modal = document.getElementById('contenedor-modal');
    Modal.$titulo_modal = document.querySelector('.titulo-modal');
    Modal.$cuerpo_modal = document.querySelector('.cuerpo-modal');
    Modal.$modal = document.getElementById('modal');
}

document.readyState == 'complete'? main(): document.addEventListener('DOMContentLoaded', main);
