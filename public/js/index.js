'use strict';

const titleHeader = new Vue({
    el: '#title__header',
    data: {
        title__header: '乳幼児れんらくノート',
    },
});

/**
 * @method header
 */
function header() {
    const btnHamburger = document.getElementById('btnNavbarToggle');
    const navbarNav2 = document.getElementById('navbarNav2');
    const navlinks = document.querySelectorAll('#navbarNav2 a');

    btnHamburger.addEventListener('click', () => {
        navbarNav2.classList.toggle('navbar__collapse--open');
        navbarNav2.classList.toggle('navbar__collapse');
        console.log(navbarNav2);
        navlinks.forEach((navlink) => {
            console.log(navlink);
            navlink.classList.toggle('nav__link--open');
            navlink.classList.toggle('nav__link');
        });
    });
}
header();

/**
 * @method resizeWindow
 */
function resizeWindow() {
    const navbarNav2 = document.getElementById('navbarNav2');
    const navlinks = document.querySelectorAll('#navbarNav2 a');
    if (navbarNav2.className == 'navbar__collapse--open') {
        navbarNav2.classList.replace(
            'navbar__collapse--open',
            'navbar__collapse',
        );
        console.log(navbarNav2);
        navlinks.forEach((navlink) => {
            console.log(navlink);
            navlink.classList.replace('nav__link--open', 'nav__link');
        });
    }
}

window.onresize = resizeWindow;
