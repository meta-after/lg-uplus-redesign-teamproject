var MainSwiper = new Swiper('.main_swiper .swiper-container', {
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    slidesPerView: 3,
    loop : true,
    centeredSlides: false,
    slideToClickedSlide : true,
});



var SubSwiper = new Swiper('.sub_swiper .swiper-container', {
    loop : true,
    slidesPerView: 1,
    centeredSlides: false,
});


MainSwiper.controller.control = SubSwiper;
SubSwiper.controller.control = MainSwiper;