document.addEventListener('DOMContentLoaded', () => {
    const quoteForm = document.getElementById('quoteForm');

    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 1. Capturar los valores
            const rs = document.getElementById('razon_social').value;
            const ruc = document.getElementById('ruc').value;
            const nom = document.getElementById('nombre_contacto').value;
            const tel = document.getElementById('telefono').value;
            const em = document.getElementById('email_cliente').value;
            const msg = document.getElementById('mensaje').value;

            // 2. Configurar datos
            const emailEmpresa = "roancontratistas@gmail.com";
            const asunto = `Cotización Web: ${rs}`;
            const cuerpo = `NUEVA SOLICITUD DE COTIZACIÓN\n\n` +
                           `Razón Social: ${rs}\n` +
                           `RUC: ${ruc}\n` +
                           `Nombre: ${nom}\n` +
                           `Teléfono: ${tel}\n` +
                           `Email: ${em}\n\n` +
                           `Mensaje:\n${msg}`;

            // 3. Crear el enlace directo para GMAIL WEB
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailEmpresa}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

            // 4. Abrir en una pestaña nueva
            window.open(gmailUrl, '_blank');
        });
    }
});