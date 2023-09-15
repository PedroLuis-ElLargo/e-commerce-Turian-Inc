// JavaScript para manejar el menú de navegación móvil

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.fa-bars').addEventListener('click', function () {
        const listaMenu = document.querySelector('.listaMenu');
        if (window.innerWidth <= 800) {
            listaMenu.style.visibility = 'visible';
        }
    });

    document.querySelector('.fa-xmark').addEventListener('click', function () {
        const listaMenu = document.querySelector('.listaMenu');
        if (window.innerWidth <= 800) {
            listaMenu.style.visibility = 'hidden';
        }
    });

    // Agregar evento click a cada enlace dentro del menú
    const enlacesMenu = document.querySelectorAll('.listaMenu a');
    enlacesMenu.forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            const listaMenu = document.querySelector('.listaMenu');
            if (window.innerWidth <= 800) {
                listaMenu.style.visibility = 'hidden';
            }
        });
    });
});

// controles de acerca de la empresa
var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}