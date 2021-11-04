let $salir_btn;

function main() {
    $salir_btn = document.getElementById('salir-btn');
    $salir_btn.addEventListener('click', () => {
        Modal.mostrar();
        Modal.ponerContenido('Salir', `
        <figure>
            <img src="./static/img/no.jpg" alt="No.">
        </figure>
        `);
    });
}

document.readyState == 'complete'? main(): document.addEventListener('DOMContentLoaded', main);
