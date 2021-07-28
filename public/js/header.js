// 'use strict';

function header() {

    const body = document.body;
    const btnHamburger = document.getElementById('btnNavbarToggle');
    const navbarNav2 = document.getElementById('navbarNav2');

    btnHamburger.addEventListener('click', function(){
        navbarNav2.classList.toggle('navbar__collapse--open');
        navbarNav2.classList.toggle('navbar__collapse');
    });
}
header();