$(function () {



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
    $('.slider__inner').slick();

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__box').toggleClass('active');
    });

    $('.product-one__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });



    var mixer = mixitup('.products__inner-box');

});