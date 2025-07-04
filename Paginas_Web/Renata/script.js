document.addEventListener('DOMContentLoaded', () => {
    // Manejo del menú hamburguesa para móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Para animar el icono
        });

        // Cierra el menú si se hace clic en un enlace (navegación a una sección)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }

    // Opcional: Desplazamiento suave (Smooth Scroll) para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Opcional: Alerta simple al enviar el formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue

            // Aquí podrías enviar los datos del formulario a un servidor
            // Por ahora, solo mostraremos una alerta
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

            this.reset(); // Limpia el formulario
        });
    }

});