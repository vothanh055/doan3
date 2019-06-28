$(document).ready(function () {
    $('active toggle-menu').click(function (e) { 
        e.preventDefault();
         $('.menu ul li a').fadeIn();
         $('.menu ul li a').Toggle();
        // $('.menu').slideToggle();
         $('.menu').ToggleClass('fadeIn');
        // $('.menu').toggle();
        
    });
});
$(document).ready(function () {
    $('.lala').click(function (e) { 
        e.preventDefault();
        // $('html').scrollTop(500) 
        $('html').animate({
            scrollTop: 0
        },1000)
    });
    $('.bien').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('.bien').offset().top
        },1000)
    });
});