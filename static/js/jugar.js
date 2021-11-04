let $iframe_juego;
let $jugar_btn;

function main() {
    $iframe_juego = document.getElementById('iframe-juego');
    $jugar_btn = document.getElementById('jugar-btn');

    $jugar_btn.addEventListener('click', () => {
        const img = [
            './static/img/gru sosteniendo una fusca.png',
            './static/img/cargando.jpg',
        ][Math.round(Math.random())];

        Modal.mostrar();
        Modal.ponerContenido('Nueva partida', `
        <figure>
            <img src="${img}" alt="Gru con un arma">
        </figure>
        <b>
            TIP: USA TU ARMA PARA DISPARAR.
        </b>
        <button class="btn btn-naranja" id="iniciar-juego-btn">CONTINUAR</button>
        `);

        document.getElementById('iniciar-juego-btn').addEventListener('click', () => {
            $iframe_juego.src = './juego.html';
            $iframe_juego.classList.remove('d-none');

            Modal.esconder();
        });
    });
}

document.readyState == 'complete'? main(): document.addEventListener('DOMContentLoaded', main);
