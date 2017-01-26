$(document).ready(function () {
    $('.teams__images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.teams__text'
    });
    $('.teams__text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.teams__images',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        dotsClass: 'teams-dots',
    });
});
