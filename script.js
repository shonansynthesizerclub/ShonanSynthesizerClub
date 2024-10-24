'use strict';

function Menu() {
    let menu = document.querySelector('.d3');
    let nav = document.querySelector('.navi');
    let spans = menu.getElementsByTagName('span');

    if (menu.classList.contains('open')) {
        //TODO Refactor Span logic
        spans[0].style.transform = "translateY(-400%)";
        spans[2].style.transform = "translateY(400%)";
        menu.classList.remove('open');
        nav.classList.remove('open');
        /*TODO Rework closeNav functionality*/
        document.querySelector('.closeNav').style.background = 'transparent'
        document.querySelector('.closeNav').setAttribute("pointer-events", "none")
    }
    else {
        //TODO Refactor Span logic
        spans[0].style.transform = "translateY(0)";
        spans[2].style.transform = "translateY(0)";
        menu.classList.add('open');
        nav.classList.add('open');
        nav.style.width = 'auto';
        /*TODO Rework closeNav functionality*/
        document.querySelector('.closeNav').style.background = 'rgba(0,0,0,.7)';
        document.querySelector('.closeNav').setAttribute("pointer-events", "all");
    }    
}

function UserMenu() {
    let menu = document.querySelector('.UNavi');

    if (menu.classList.contains('UNaviOpen')) {
        menu.classList.remove('UNaviOpen')
    }
    else {
        menu.classList.add('UNaviOpen')
    }
}
