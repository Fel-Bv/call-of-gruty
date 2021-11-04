let $instrucciones_btn;

function main() {
    $instrucciones_btn = document.getElementById('instrucciones-btn');
    $instrucciones_btn.addEventListener('click', () => {
        Modal.mostrar();
        Modal.ponerContenido('¿Cómo jugar?', `
        <div class="flecha centrar-todo modal-instrucciones">
            <figure>
                <img src="./static/img/clic izquierdo.png" alt="Clic izquierdo">
            </figure>
            <h1>
                = Disparar
            </h1>
        </div>
        <p>
            Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </p>
        `);
    });
}

document.readyState == 'complete'? main(): document.addEventListener('DOMContentLoaded', main);
