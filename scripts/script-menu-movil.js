document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const movilMenu = document.getElementById('movilMenu');
    const menuLinks = movilMenu.querySelectorAll('a');
    const menuItems = movilMenu.querySelectorAll('li');

    menuToggle.addEventListener('click', function () {
        movilMenu.classList.toggle('active');
        if (movilMenu.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            movilMenu.classList.remove('active');
        });
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            movilMenu.classList.remove('active');
        });
    });
});