import Swiper from 'swiper';

export default function() {
    const projectItemSlider = Array.from(document.querySelectorAll('.js-project-item-slider'));

    projectItemSlider.forEach(slider => {
        const container = slider.querySelector('.swiper-container');
        const current = slider.querySelector('.project__slider-pagination-current');
        const total = slider.querySelector('.project__slider-pagination-total');
        const number = slider.querySelector('.js-project-item-slider-number');
        let swiperInstance = null;
        const options = {
            watchOverflow: true,
            pagination: {
                el: slider.querySelector('.js-project-item-progressbar'),
                type: 'progressbar'
            },
            navigation: {
                nextEl: slider.querySelector('.project__slider-arrow--next'),
                prevEl: slider.querySelector('.project__slider-arrow--prev')
            },
            autoHeight: true,
            on: {
                init: changeNumbers,
                slideChange: changeNumbers
            }
        };

        

        function changeNumbers() {
            
            const totalNumber = this.slides.length;
            const currentNumber = this.realIndex + 1;

            current.textContent = currentNumber.toString().length === 1 ? 0 + currentNumber.toString() : currentNumber;
            number.textContent = currentNumber.toString().length === 1 ? 0 + currentNumber.toString() : currentNumber;
            total.textContent = totalNumber.toString().length === 1 ? 0 + totalNumber.toString() : totalNumber;
        }


        function initializeSwiper(mq) {
            options.pagination.progressbarOpposite = mq.matches ? false : true;
            swiperInstance = new Swiper(container, options);
        }


        const widthChange = mq => {
            if (swiperInstance) {
                swiperInstance.destroy();
                swiperInstance = null;
                initializeSwiper(mq);
            } else {
                initializeSwiper(mq);
            }
        };

        if (matchMedia) {
            const mq = window.matchMedia(`(max-width: 768px)`);
            mq.addListener(widthChange);
            widthChange(mq);
        }
    });
}
