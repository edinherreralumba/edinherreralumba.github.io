document.addEventListener('DOMContentLoaded', () => {

    const diasEl = document.getElementById('dias');
    const horasEl = document.getElementById('horas');
    const minutosEl = document.getElementById('minutos');
    const segundosEl = document.getElementById('segundos');

    // ** LÓGICA CORREGIDA: Establece una fecha de lanzamiento fija **
    // La fecha de lanzamiento será el 10 de septiembre de 2025 (30 días a partir de hoy)
    const fechaLanzamiento = new Date('September 10, 2025 00:00:00');

    function actualizarCuentaRegresiva() {
        const ahora = new Date().getTime();
        const distancia = fechaLanzamiento.getTime() - ahora;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Si la cuenta regresiva termina, muestra el mensaje
        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById('countdown').innerHTML = '<span>¡Mi sitio ya está en línea!</span>';
            return;
        }

        // De lo contrario, actualiza los números
        diasEl.textContent = dias < 10 ? '0' + dias : dias;
        horasEl.textContent = horas < 10 ? '0' + horas : horas;
        minutosEl.textContent = minutos < 10 ? '0' + minutos : minutos;
        segundosEl.textContent = segundos < 10 ? '0' + segundos : segundos;
    }

    // Actualiza la cuenta regresiva cada segundo
    const intervalo = setInterval(actualizarCuentaRegresiva, 1000);

    // Llama a la función al cargar para evitar un "parpadeo" inicial
    actualizarCuentaRegresiva();
});
