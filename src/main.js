import Alpine from "alpinejs";
import Swiper, {Autoplay} from 'swiper';
import './css/main.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

window.Alpine = Alpine;
Alpine.start();
document.addEventListener('DOMContentLoaded', function (){
    const swiper = new Swiper(".aeneid-group-slider", {
        modules: [Autoplay],
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        breakpoints: {
            '1024': {
                slidesPerView: 5,
            },
        },
        autoplay: {
            delay: 5000,
        },
    });

    const sliderContent = new Swiper(".aeneid-content-slider", {
        modules: [Autoplay],
        centeredSlides: false,
        slidesPerView: 2,
        loop: true,
        spaceBetween: 16,
        breakpoints: {
            '1024': {
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
        // autoplay: {
        //     delay: 5000,
        // },
    });
})

