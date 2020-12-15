$(function(){



    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px"
    });

    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000
    });
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
    
    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });
  


    var mixer =  mixitup('.products__inner-box');
    
});