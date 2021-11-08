let $pantalla_carga;
let $puntos;
let $juego;
let $arma;
let $main;

function disparo() {
    $arma.style.animationDuration = '.2s';
    $arma.style.animationName = 'disparo';

    setTimeout(() => {
        $arma.style.animationDuration = '1.5s';
        $arma.style.animationName = 'animacion_arma';
    }, 400);
}

function crearMinion() {
    const $minion = document.createElement('img');
    $minion.src = [
        './static/img/minion morado arriba.png',
        './static/img/minion morado normal.png'
    ][Math.round(Math.random())];
    $minion.classList.add('minion');

    let arriba = ! $minion.src.includes('arriba')? Math.random() * 100: 0;
    if (arriba < window.screen.availHeight - 175)
        $minion.style.top = `${arriba}px`;
    else
        $minion.style.top = '0';

    let izquierda = Math.random() * 1000;
    if (izquierda < window.screen.availWidth - 175)
        $minion.style.left = `${izquierda}px`;
    else
        $minion.style.left = '0';

    $minion.onclick = () => {
        disparo();

        const puntos = parseInt($puntos.innerText);
        $puntos.innerText = puntos + 1;

        $minion.remove();
        crearMinion();
    };

    $juego.append($minion);
}

function mapaAleatorio() {
    $juego.style.backgroundImage = `url(./static/img/fondo/${Math.round(Math.random() * 4)}.jpg)`;

    crearMinion();

    $main.classList.remove('d-none');
}

function iniciarJuego() {
    let grilla_mapa = '<section id="grilla-mapa">';
    let imagen_mapa = '';

    for (let i = 0; i < 5; i++) {
        grilla_mapa += `
        <figure>
            <img class="img-mapa" src="./static/img/fondo/${i}.jpg" alt="Mapa ${i}">
        </figure>
        `;
    }
    grilla_mapa += `
    <figure>
        <img src="./static/img/fondo/aleatorio.png" alt="Mapa aleatorio" id="mapa-aleatorio">
    </figure>
    `;
    Modal.ponerContenido('Selecciona un mapa', grilla_mapa);
    Modal.mostrar();
    Modal.$modal.querySelectorAll('.img-mapa').forEach($img => {
        $img.onclick = () => {
            imagen_mapa = $img.src;
            $juego.style.backgroundImage = `url(${imagen_mapa})`;

            crearMinion();

            $main.classList.remove('d-none');

            Modal.esconder();
        }
    });
    document.getElementById('mapa-aleatorio').onclick = () => {
        mapaAleatorio();

        Modal.esconder();
    }
    document.querySelector('.btn-cerrar-modal').addEventListener('click', () => {
        mapaAleatorio();
    });
}

function main() {
    $pantalla_carga = document.querySelector('.pantalla-carga');
    $puntos = document.getElementById('puntos');
    $juego = document.getElementById('juego');
    $arma = document.getElementById('img-arma');
    $main = document.querySelector('main');

    setTimeout(iniciarJuego, 3000);
}

document.readyState == 'complete'? main(): document.addEventListener('DOMContentLoaded', main);
