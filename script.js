const fechaInicio = new Date("July 20, 2026 03:23:00").getTime(); 

function actualizarContador() {
    const ahora = new Date().getTime();
    let diferencia = ahora - fechaInicio;

    const msPorAnio = 1000 * 60 * 60 * 24 * 365;
    const msPorDia = 1000 * 60 * 60 * 24;
    const msPorHora = 1000 * 60 * 60;
    const msPorMinuto = 1000 * 60;
    const msPorSegundo = 1000;

    const anios = Math.floor(diferencia / msPorAnio);
    diferencia %= msPorAnio;

    const dias = Math.floor(diferencia / msPorDia);
    diferencia %= msPorDia;

    const horas = Math.floor(diferencia / msPorHora);
    diferencia %= msPorHora;

    const minutos = Math.floor(diferencia / msPorMinuto);
    diferencia %= msPorMinuto;

    const segundos = Math.floor(diferencia / msPorSegundo);

    const ms = Math.floor(diferencia % msPorSegundo);

    document.getElementById("Anios").innerText = anios;
    document.getElementById("Dias").innerText = dias;
    document.getElementById("Horas").innerText = horas;
    document.getElementById("Minutos").innerText = minutos;
    document.getElementById("Segundos").innerText = segundos;
    document.getElementById("Milisegundos").innerText = ms;
}

actualizarContador();

setInterval(actualizarContador, 10);
