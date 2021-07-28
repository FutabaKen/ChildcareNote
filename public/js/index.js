'use strict';

var title__header = new Vue({
    el: '#title__header',
    data: {
        title__header: '乳幼児れんらくノート'
    }
})

function header() {

    const body = document.body;
    const btnHamburger = document.getElementById('btnNavbarToggle');
    const navbarNav2 = document.getElementById('navbarNav2');
    const navlinks = document.querySelectorAll('#navbarNav2 a')

    btnHamburger.addEventListener('click', function () {
        navbarNav2.classList.toggle('navbar__collapse--open');
        navbarNav2.classList.toggle('navbar__collapse');
        console.log(navbarNav2);
        // console.table(navlinks);
        navlinks.forEach(navlink => {
            console.log(navlink);
            navlink.classList.toggle('nav__link--open');
            navlink.classList.toggle('nav__link');
        });
    });
}
header();