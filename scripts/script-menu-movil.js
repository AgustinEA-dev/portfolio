document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const movilMenu = document.getElementById('movilMenu');
    const menuLinks = movilMenu.querySelectorAll('a');
    const menuItems = movilMenu.querySelectorAll('li'); // Seleccionamos todos los <li> en el menú

    // Al hacer clic en el botón del menú, toggle de la clase 'active'
    menuToggle.addEventListener('click', function () {
        movilMenu.classList.toggle('active');
        if (movilMenu.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Al hacer clic en cualquier enlace, cerrar el menú
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            movilMenu.classList.remove('active');
        });
    });

    // Al hacer clic en cualquier <li>, cerrar el menú
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            movilMenu.classList.remove('active');
        });
    });
});