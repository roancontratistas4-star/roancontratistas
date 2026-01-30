document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if(mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Efecto de aparición suave al bajar el scroll
    const reveals = document.querySelectorAll('.reveal, .map-card');
    
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    function scrollReveal() {
        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', scrollReveal);

    // Inyectar animaciones CSS via JS para mantener el archivo CSS limpio
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal { opacity: 0; transform: translateY(30px); transition: 0.8s all ease; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .map-card { transition: 0.5s; }
        .map-card:hover { background: #0a1a35; color: white; }
        .map-card:hover p { color: #ccc; }
        .map-card:hover h3 { color: #e31e24; }
    `;
    document.head.appendChild(style);
});