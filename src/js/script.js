$(function() {

    //бургер
    $('.for-business__nav-burger-icon').on('click', function() {
        $('.burger').toggleClass('fa-bars');
        $('.burger').toggleClass('fa-times');
        $('.for-business__nav-burger-dropped').slideToggle(300, function() {
            if ($(this).css('display') == 'none') {
                $(this).removeAttr('style');
            }
        });
    });

    //маска для инпута
    $("#mask").mask("+7(999) 999-99-99");

    //якоря
    $('.for-business__nav-item a, .for-business__nav-burger-dropped-item a').on('click', function(e) {
        e.preventDefault();

        $('.burger').toggleClass('fa-bars');
        $('.burger').toggleClass('fa-times');
        $('.for-business__nav-burger-dropped').slideToggle(300, function() {
            if ($(this).css('display') == 'none') {
                $(this).removeAttr('style');
            }
        });

        var selector = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: selector.offset().top
        }, 500);
    });

});