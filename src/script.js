
const boutonMenu = document.querySelector('#bouton-menu');
const menu = document.querySelector('#menu');

boutonMenu.addEventListener('click', function() {
    menu.classList.toggle("hidden");

    const iconMenu = document.querySelector('#bouton-menu i');

    if (menu.classList.contains("hidden")) {
        iconMenu.className = "fa-solid fa-bars fa-3x";
    } else {
        iconMenu.className = "fa-solid fa-xmark fa-3x";
    }
});