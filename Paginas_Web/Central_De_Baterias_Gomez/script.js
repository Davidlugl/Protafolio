document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Product filtering by category
    const categoryFilter = document.getElementById('category-filter');
    const productList = document.getElementById('product-list');
    const productItems = productList.querySelectorAll('.product-item');

    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;

        productItems.forEach(item => {
            const productCategory = item.dataset.category;
            if (selectedCategory === 'todos' || productCategory === selectedCategory) {
                item.style.display = 'flex'; // Show the item
            } else {
                item.style.display = 'none'; // Hide the item
            }
        });
    });

    // Basic Add to Cart functionality (console log for demonstration)
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountSpan = document.getElementById('cart-count');
    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;
            cartItemCount++;
            cartCountSpan.textContent = cartItemCount;
            console.log(`Producto añadido al carrito: ${productName}. Total en carrito: ${cartItemCount}`);
            alert(`"${productName}" ha sido añadido al carrito (simulado).`); // Simple feedback
        });
    });

    // Optional: Highlight current section in navigation (more complex, but good for UX)
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Simple form submission (prevents default and logs data)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            console.log('Formulario de contacto enviado:');
            console.log(`Nombre: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Mensaje: ${message}`);

            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            this.reset(); // Clear the form
        });
    }

});