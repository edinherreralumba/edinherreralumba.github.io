document.addEventListener('DOMContentLoaded', () => {

    const diasEl = document.getElementById('dias');
    const horasEl = document.getElementById('horas');
    const minutosEl = document.getElementById('minutos');
    const segundosEl = document.getElementById('segundos');

    // La fecha de lanzamiento es 30 días a partir de ahora
    const fechaLanzamiento = new Date();
    fechaLanzamiento.setDate(fechaLanzamiento.getDate() + 30);

    function actualizarCuentaRegresiva() {
        const ahora = new Date().getTime();
        const distancia = fechaLanzamiento.getTime() - ahora;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        diasEl.textContent = dias < 10 ? '0' + dias : dias;
        horasEl.textContent = horas < 10 ? '0' + horas : horas;
        minutosEl.textContent = minutos < 10 ? '0' + minutos : minutos;
        segundosEl.textContent = segundos < 10 ? '0' + segundos : segundos;

        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById('countdown').innerHTML = '<span>¡Mi sitio ya está en línea!</span>';
        }
    }

    const intervalo = setInterval(actualizarCuentaRegresiva, 1000);

    actualizarCuentaRegresiva();
});