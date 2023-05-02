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

    
 


    $(document).ready(function(){
        $.fn.animate_Text = function() {
            var string = this.text();
            return this.each(function(){
                var $this = $(this);
                string = string.replace(/front-end/g, '<span class="red">$&</span>');
                $this.html(string.replace(/(<[^>]*>)|(.)/g, function(match, p1, p2) {
                    if (p1) return p1;
                    return '<span class="new">' + p2 + '</span>';
                }));
                $this.find('span.new').each(function(i, el){
                    setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
                });
            });
        };
        $('#smooth').show();
        $('#smooth').animate_Text();
        $('#smooth').append('<img src="icons/macbook.png" alt="" class="promo__macbook animate__animated animate__bounceInDown wow" data-wow-delay="0.7s">');
    });



    
})

$("a[href^='#']").click(function() {  /* скролл */
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    menu.classList.remove('menu_active');
    return false;
});






