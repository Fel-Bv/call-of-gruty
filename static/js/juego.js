let $pantalla_carga;
let $puntos;
let $juego;
let $arma;

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

function iniciarJuego() {
    document.querySelector('main').classList.remove('d-none');
    crearMinion();
}

function main() {
    $pantalla_carga = document.querySelector('.pantalla-carga');
    $puntos = document.getElementById('puntos');
    $juego = document.getElementById('juego');
    $arma = document.getElementById('img-arma');

    setTimeout(iniciarJuego, 3000);
}

document.readyState == 'complete'? main(): document.addEventListener('DOMContentLoaded', main);
