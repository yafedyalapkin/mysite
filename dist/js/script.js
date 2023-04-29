// humburger 
// ========================================================================================================================
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

$(document).ready(function(){   
    new WOW().init();
})

$("a[href^='#']").click(function() {  /* скролл */
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    menu.classList.remove('menu_active');
    return false;
});

