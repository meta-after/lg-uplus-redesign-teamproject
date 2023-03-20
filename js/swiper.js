var MainSwiper = new Swiper('.main_swiper .swiper-container', {
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    spaceBetween: 0,
    slidesPerView: 3,
    loop : true,
    centeredSlides: true,
    slideToClickedSlide : true,
    nested: true,
    loopedSlides: 1,
});



var SubSwiper = new Swiper('.sub_swiper .swiper-container', {
    spaceBetween: 0,
    loop : true,
    slidesPerView: 1,
    centeredSlides: true,
    nested: true,
    loopedSlides: 1,
});


MainSwiper.controller.control = SubSwiper;
SubSwiper.controller.control = MainSwiper;