import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);



const swiperHero = new Swiper('.main-banner-slider', {
    slidesPerView: 1,
    allowTouchMove: false,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
});




