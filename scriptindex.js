/**
 * ROAN CONTRATISTAS - Script de Intro
 * Gestiona el reloj del sistema, la carga de datos y la transición de entrada.
 */

// 1. RELOJ EN TIEMPO REAL
function updateClock() {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        const now = new Date();
        // Formato de 24 horas (HH:MM:SS)
        clockEl.innerText = now.toLocaleTimeString('es-PE', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
    }
}

// Actualizar cada segundo
setInterval(updateClock, 1000);
updateClock();

// 2. FUNCIÓN DE ENTRADA AL SITIO PRINCIPAL
function systemEnter() {
    const ui = document.getElementById('ui-main');
    const video = document.getElementById('background-video');

    // Aplicar clase de animación de salida (definida en el CSS)
    if (ui) {
        ui.classList.add('system-zoom');
    }

    // Efecto visual opcional: Desvanecer el video al salir
    if (video) {
        video.style.transition = 'opacity 0.8s ease';
        video.style.opacity = '0';
    }

    // Redirección después de que termine la animación visual
    setTimeout(() => {
        // Asegúrate de que "principal.html" sea el nombre exacto de tu siguiente archivo
        window.location.href = "home.html"; 
    }, 800);
}

// 3. OPTIMIZACIÓN DE CARGA (OPCIONAL)
// Si el video tarda mucho en cargar, esto asegura que la UI se vea bien
window.addEventListener('load', () => {
    console.log("ROAN System: Ready");
    // Aquí podrías disparar sonidos de "click" o efectos adicionales si lo deseas
});