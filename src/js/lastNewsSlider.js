import Swiper from 'swiper';


export default function() {
    const sliders = Array.from(document.querySelectorAll('.js-last-news-slider'));

    sliders.forEach(slider => {
        const container = slider.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            loop: true,
            navigation: {
                nextEl: slider.querySelector('.last-news__slider-arrow-btn--next'),
                prevEl: slider.querySelector('.last-news__slider-arrow-btn--prev')
            }
        })
    })
}