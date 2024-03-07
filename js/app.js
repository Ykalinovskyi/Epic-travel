// Находим кнопку и картинку
const navBtn = document.querySelector('#btn-mobile-nav');
const navBtnImg = document.querySelector('#img-mobile-nav');

// Находим секцию мобильной навигации и шапку сайта
const mobileNav = document.querySelector('#mobile-nav');
const header = document.querySelector('#header');

// Добавляем обработчик события на кнопку
navBtn.addEventListener('click', function(){
    
    navBtn.classList.toggle('open');
    mobileNav.classList.toggle('open');
    header.classList.toggle('header-white-bg');

    document.body.classList.toggle('no-scroll');

    if(navBtn.classList.contains('open')) {
        navBtnImg.src = './img/icons/nav-close.svg';
    }else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
})