document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HERO SLIDER AUTOMÁTICO ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000;

    function nextHeroSlide() {
        if(slides.length > 0) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
    }

    if (slides.length > 0) {
        setInterval(nextHeroSlide, slideInterval);
    }

    // --- 2. CONTADOR ANIMADO (ESTADÍSTICAS) ---
    const stats = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateStats = () => {
        stats.forEach(stat => {
            const updateCount = () => {
                const target = +stat.getAttribute('data-target');
                const count = +stat.innerText;
                const inc = target / speed;

                if (count < target) {
                    stat.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    stat.innerText = target;
                }
            };
            updateCount();
        });
    };

    const statsSection = document.querySelector('.stats-bar');
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) statObserver.observe(statsSection);

    // --- 3. MENÚ MÓVIL Y DROPDOWN (EXPERIENCIA EN OBRAS) ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropBtn = document.getElementById('dropdown-btn-mobile');

    // Abrir/Cerrar menú hamburguesa
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Lógica para que el dropdown bajé suavemente sin ir a otra página
    if (dropBtn) {
        dropBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault(); 
                e.stopPropagation(); // Evita que el clic cierre el menú principal
                
                const dropdownParent = dropBtn.parentElement;
                dropdownParent.classList.toggle('active');
                
                // Animación de la flechita
                const icon = dropBtn.querySelector('.fa-chevron-down');
                if (icon) {
                    icon.style.transition = 'transform 0.3s ease';
                    icon.style.transform = dropdownParent.classList.contains('active') 
                        ? 'rotate(180deg)' 
                        : 'rotate(0deg)';
                }
            }
        });
    }

    // Cerrar menú al hacer clic en un enlace normal (para navegación interna)
    const navItems = document.querySelectorAll('.nav-links a:not(.dropbtn)');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 4. EFECTOS DEL HEADER AL HACER SCROLL ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '5px 0';
            header.style.backgroundColor = 'rgba(10, 26, 53, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.padding = '10px 0';
            header.style.backgroundColor = '#0a1a35';
            header.style.boxShadow = 'none';
        }
    });
});

// --- 5. GALERÍA INFINITA (CLONACIÓN FUERA DEL DOMContentLoaded PARA EVITAR SALTOS) ---
const track = document.querySelector('.gallery-track');
if (track) {
    const items = Array.from(track.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
}