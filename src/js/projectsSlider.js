import Swiper from 'swiper';

export default function() {
    const projectsSliders = Array.from(document.querySelectorAll('.js-project-slider'));

    projectsSliders.forEach(slider => {
        const imagesContainer = slider.querySelector('.about-us__our-projects-images .swiper-container');
        const mainContainer = slider.querySelector('.about-us__our-projects-main-info .swiper-container');

        const mainSwiper = new Swiper(mainContainer, {
            effect: 'fade',
            watchOverflow: true,
            fadeEffect: {
                crossFade: true
            },
            autoHeight: true,
            navigation: {
                nextEl: slider.querySelector('.about-us__our-projects-main-slider-arrow--next'),
                prevEl: slider.querySelector('.about-us__our-projects-main-slider-arrow--prev')
            }
        });

        const imagesSwiper = new Swiper(imagesContainer, {
            effect: 'fade',
            watchOverflow: true,
            fadeEffect: {
                crossFade: true
            }
        })

        

        mainSwiper.controller.control = imagesSwiper;
        imagesSwiper.controller.control = mainSwiper;
    });
}
