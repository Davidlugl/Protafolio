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
const translations = {
        en: {
            'Inicio': 'Home',
            'Menú': 'Menu',
            'Ubicaciones': 'Locations',
            'Contacto': 'Contact',
            'Pedir Ahora': 'Order Now',
            'Renata Tacos': 'Renata Tacos',
            'El auténtico sabor de México en Bogotá. ¡Disfruta de nuestros tacos, burritos y más!':
                'The authentic flavor of Mexico in Bogotá. Enjoy our tacos, burritos and more!',
            'Ver Nuestro Menú': 'See Our Menu',
            'Pedir Ahora por Rappi': 'Order Now on Rappi',
            'Nuestro Menú': 'Our Menu',
            'Unidad $5.600 / Con costra +$1.600': 'Unit $5,600 / With cheese crust +$1,600',
            'Tacos': 'Tacos',
            'Bistec de res': 'Beef steak',
            'Tierno bistec de res sazonado a la perfección, servido en tortilla de maíz.':
                'Tender beef steak seasoned to perfection, served on corn tortilla.',
            'Pollo': 'Chicken',
            'Delicioso pollo desmechado con el toque especial de Renata Tacos.':
                'Delicious shredded chicken with Renata Tacos special touch.',
            'Carnitas': 'Carnitas',
            'Suave y jugosa carne de cerdo confitada al estilo tradicional mexicano.':
                'Tender and juicy pork confit in traditional Mexican style.',
            'Quesadilla': 'Quesadilla',
            'Tortilla de maíz rellena de queso fundido, un clásico irresistible.':
                'Corn tortilla filled with melted cheese, an irresistible classic.',
            'Cochinita pibil': 'Cochinita pibil',
            'Solo viernes': 'Only Fridays',
            'Cerdo marinado en achiote y cocinado lentamente, ¡sabor yucateco auténtico!.':
                'Pork marinated in annatto and slowly cooked, authentic Yucatecan flavor!',
            'Chicharron': 'Pork crackling',
             
            'Crujiente chicharrón con un toque de limón y cilantro, ideal para los amantes del sabor.':
                'Crispy pork crackling with a touch of lime and cilantro, perfect for flavor lovers.',
            'Cerdo al pastor': 'Pork al pastor',
            'Carne de cerdo adobada y cocinada al pastor, con piña y especias.':
                'Adobo-marinated pork cooked al pastor style with pineapple and spices.',
            'Chorizo mexicano': 'Mexican chorizo',
            'Auténtico chorizo mexicano con ese toque picante y sabroso.':
                'Authentic Mexican chorizo with a spicy and savory touch.',
            'Berenjena y champiñones': 'Eggplant and mushrooms',
            'Una opción vegetariana deliciosa con vegetales frescos y queso.':
                'A delicious vegetarian option with fresh vegetables and cheese.',
            'Arequipe y queso': 'Dulce de leche and cheese',
            'Una dulce combinación de arequipe y queso, perfecto para un postre diferente.':
                'A sweet mix of dulce de leche and cheese, perfect as a dessert.',
            'Tortas': 'Sandwiches',
            'Sándwich mexicano con tierno bistec de res, frijoles, aguacate y aderezos.':
                'Mexican sandwich with tender beef steak, beans, avocado and sauces.',
            'Deliciosa torta rellena de jugoso pollo, lechuga, tomate y mayonesa.':
                'Delicious sandwich filled with juicy chicken, lettuce, tomato and mayo.',
            'Sándwich con carnitas tradicionales, aguacate, cebolla y cilantro.':
                'Traditional carnitas sandwich with avocado, onion and cilantro.',
            'Torta con cerdo al pastor, piña, cebolla y cilantro, una explosión de sabor.':
                'Al pastor pork sandwich with pineapple, onion and cilantro, a burst of flavor.',
            'Sándwich con chorizo mexicano, papas, crema y aguacate.':
                'Mexican chorizo sandwich with potatoes, cream and avocado.',
            'Opción vegetariana con berenjena, champiñones, queso y aguacate.':
                'Vegetarian option with eggplant, mushrooms, cheese and avocado.',
            'Flautas': 'Flautas',
            'Flautas de Pollo': 'Chicken Flautas',
            'Tortillas de maíz crujientes rellenas de pollo, servidas con crema y lechuga.':
                'Crispy corn tortillas filled with chicken, served with cream and lettuce.',
            'con aguo o gaseosa': 'with water or soda',
            'Flautas de res': 'Beef Flautas',
            'Tortillas crujientes rellenas de sabrosa carne de res, con guarniciones frescas.':
                'Crispy tortillas filled with tasty beef, with fresh sides.',
            'Flautas mixtas': 'Mixed flautas',
            'Una combinación de flautas de pollo y res para que pruebes lo mejor de ambos.':
                'A mix of chicken and beef flautas so you can taste the best of both.',
            'Sopas': 'Soups',
            'Sopa de pollo y limon': 'Chicken and lime soup',
            'Caldo reconfortante de pollo con un toque cítrico de limón y hierbas.':
                'Comforting chicken broth with a citrus touch of lime and herbs.',
            'Plato especial': 'Special dish',
            'Hamburguesa Renata': 'Renata Burger',
            'Nuestra hamburguesa especial con el toque mexicano de la casa.':
                'Our special burger with the house Mexican touch.',
            'Burritos': 'Burritos',
            'Burrito sencillo tinga Pollo': 'Simple chicken tinga burrito',
            'Burrito clásico con pollo desmechado en salsa tinga, arroz y frijoles.':
                'Classic burrito with shredded chicken in tinga sauce, rice and beans.',
            'Burrito sencillo berenjena y champiñones': 'Simple eggplant and mushroom burrito',
            'Burrito vegetariano con berenjena, champiñones, arroz y frijoles.':
                'Vegetarian burrito with eggplant, mushrooms, rice and beans.',
            'Burrito sencillo carnitas': 'Simple carnitas burrito',
            'Burrito con tiernas carnitas, arroz, frijoles y salsa.':
                'Burrito with tender carnitas, rice, beans and sauce.',
            'Totopos y gaseosa o agua': 'Nachos and soda or water',
            'Gringas': 'Gringas',
            'Gringa con jugoso bistec de res y queso fundido en tortilla de harina.':
                'Gringa with juicy beef steak and melted cheese in flour tortilla.',
            'Gringa rellena de pollo desmechado y una generosa capa de queso derretido.':
                'Gringa filled with shredded chicken and melted cheese.',
            'Gringa con nuestras deliciosas carnitas y queso, una combinación perfecta.':
                'Gringa with our delicious carnitas and cheese, a perfect combo.',
            'Gringa con cerdo al pastor, piña y queso, un toque tropical y sabroso.':
                'Gringa with pork al pastor, pineapple and cheese, a tropical flavor.',
            'Gringa con auténtico chorizo mexicano y queso fundido.':
                'Gringa with authentic Mexican chorizo and melted cheese.',
            'Gringa vegetariana con berenjena, champiñones y queso derretido.':
                'Vegetarian gringa with eggplant, mushrooms and melted cheese.',
            'Adiciones': 'Add-ons',
            'Renachos': 'Renachos',
            'Nuestros nachos especiales con queso, jalapeños y tu elección de carne.':
                'Our special nachos with cheese, jalapeños and your choice of meat.',
            'Totopos con guacamole': 'Nachos with guacamole',
            'Crujientes totopos acompañados de nuestro guacamole fresco y casero.':
                'Crunchy nachos with fresh homemade guacamole.',
            'Totopos': 'Nachos',
            'Bolsa de crujientes totopos de maíz, perfectos para acompañar.':
                'Bag of crunchy corn nachos, perfect to pair with your meal.',
            'Guacamole': 'Guacamole',
            'Porción extra de nuestro delicioso guacamole fresco.':
                'Extra portion of our delicious fresh guacamole.',
            'Frijol negro': 'Black beans',
            'Porción de frijoles negros refritos, cremosos y llenos de sabor.':
                'Portion of creamy, flavorful refried black beans.',
            'Salsa de frasco x 4oz': 'Jarred sauce (4oz)',
            'Nuestras salsas caseras en presentación de 4oz para llevar el sabor a casa.':
                'Our homemade sauces in 4oz jars to take home the flavor.',
            'Paquete de tortillas (20 unidades)': 'Tortilla pack (20 units)',
            'Un paquete de tortillas de maíz frescas para preparar tus propios tacos en casa.':
                'A pack of fresh corn tortillas to make your own tacos at home.',
            'Cerveza': 'Beer',
            'Cerveza ligera y refrescante, ideal para acompañar tus tacos.':'Light and refreshing beer, ideal to accompany your tacos',
            'Cerveza clásica de cuerpo ligero en presentación mini':'Classic light-bodied beer in mini presentation',
            'Cerveza dorada premium, suave y equilibrada':'Premium golden beer, smooth and balanced',
            'Cerveza lager europea con un sabor distintivo y refrescante.':'European lager beer with a distinctive and refreshing taste',
            'Disfruta el sabor de Corona sin alcohol, refrescante y ligera.':'Enjoy the taste of Corona without alcohol, refreshing and light',
            'Agua Con/Sin gas': 'Sparkling/Still Water',
            'Refrescante agua mineral para hidratarte.':'Refreshing mineral water to hydrate you',
            'gaseosa': 'Soda',
            'fuez tea': 'Iced tea',
            'Té frío refrescante con diferentes sabores.':'Refreshing iced tea with different flavors',
            'Horchata': 'Horchata',
            'Bebida tradicional de arroz con canela, dulce y refrescante.':'Traditional rice drink with cinnamon, sweet and refreshing',
            'Jamaica': 'Hibiscus',
            'Bebida natural de flor de Jamaica, un sabor único y vibrante.':'Natural drink made from hibiscus flower, a unique and vibrant flavor',

            'Tamarindo': 'Tamarind',
            'Bebida de tamarindo, dulce y ligeramente ácida.':'Tamarind drink, sweet and slightly sour',
            'Bebidas': 'Drinks',
            'Aguas Frescas': 'Fresh Waters',
            'Refreshing combination of pineapple and mint.': 'Refrescante combinación de piña y hierbabuena.Refreshing combination of pineapple and mint.',
            'Bebida exótica y agridulce de tamarindo.': 'Exotic and sweet-sour tamarind drink.',
            'La clásica limonada colombiana con el toque dulce de la panela.': 'The classic Colombian lemonade with the sweet touch of panela.',
            'Botella de mezcal 400 Conejos, ideal para compartir y disfrutar.': 'Bottle of 400 Conejos mezcal, perfect for sharing and enjoying.',
            'Un trago de mezcal 400 Conejos para saborear su carácter ahumado.': 'A shot of 400 Conejos mezcal to savor its smoky character.',
            'Botella de tequila 1800 Reposado, suave y con notas de agave.': 'Bottle of 1800 Reposado tequila, smooth with agave notes.',
            'Un trago de tequila 1800 Reposado, perfecto para degustar.': 'A shot of 1800 Reposado tequila, perfect for tasting.',
            'Botella de tequila Doble Diamante, ideal para los amantes del buen tequila.': 'Bottle of Doble Diamante tequila, perfect for tequila lovers.', 
            'Un trago de tequila Doble Diamante, una experiencia premium.': 'A shot of Doble Diamante tequila, a premium experience.',
            'Media botella de aguardiente Antioqueño, el sabor de Colombia.': 'Half bottle of Antioqueño aguardiente, the taste of Colombia.',
            'Botella de tequila Jose Cuervo, un clásico para cualquier celebración.': 'Bottle of Jose Cuervo tequila, a classic for any celebration.',
            'Media botella de tequila Jose Cuervo, la opción ideal para un grupo pequeño.': 'Half bottle of Jose Cuervo tequila, the ideal option for a small group.',
            'Un trago de tequila Jose Cuervo, el toque mexicano que necesitas.': 'A shot of Jose Cuervo tequila, the Mexican touch you need.',
            'Clásico cóctel de tequila con limón y un borde de sal, fresco y vibrante.': 'Classic tequila cocktail with lime and a salted rim, fresh and vibrant.',
            'Refrescante cóctel de tequila con refresco de toronja y un toque de limón.': 'Refreshing tequila cocktail with grapefruit soda and a touch of lime.',
            'Ver en Mapa': 'View on Map',

            'Destilados y mezclas': 'Spirits and Cocktails',
            'EL EXCESO DE ALCOHOL ES PERJUDICIAL PARA LA SALUD y PROHÍBASE EL EXPENDIO DE BEBIDAS EMBRIAGANTES A MENORES DE EDAD.':
                'EXCESSIVE ALCOHOL IS HARMFUL TO HEALTH and the sale of alcoholic beverages to minors is prohibited.',  
            'Contáctanos': 'Contact Us',
            '¿Tienes preguntas, comentarios o quieres hacer una reserva especial? ¡Escríbenos!':
                'Have questions, comments or want a special reservation? Write to us!',
            'Enviar Mensaje': 'Send Message',
            'Tu Nombre': 'Your Name',
            'Tu Email': 'Your Email',
            'Tu numero celular': 'Your phone number',
            'Tu Mensaje': 'Your Message',
            'Nuestras Ubicaciones': 'Our Locations'
        }
    };

function translatePage(language) {
    if (language === 'es') return location.reload(); // Recarga para volver al original

    const elements = document.querySelectorAll('h1, h2, h3, h4, p, a, button, span, input, textarea');

    elements.forEach(el => {
        const original = el.innerHTML.trim();
        const translated = translations[language][original];
        if (translated) {
            if (el.placeholder !== undefined && el.placeholder !== '') {
                el.placeholder = translated;
            } else {
                el.innerHTML = translated;
            }
        }
    });
}

document.getElementById('language-select').addEventListener('change', e => {
    translatePage(e.target.value);
});
    
});