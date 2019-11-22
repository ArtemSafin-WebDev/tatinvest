import Swiper from 'swiper';

export default function() {
    const projectsSliders = Array.from(document.querySelectorAll('.js-all-projects-slider'));
    const sliderArrow = document.querySelector('.js-slider-arrow');

    projectsSliders.forEach(slider => {
        const container = slider.querySelector('.swiper-container');
        const fractionContainer = slider.querySelector('.js-projects-all-slider-pagination-fraction');
        let total = null;
        let current = null;
        let arrowReversed = false;

        const swiperInstance = new Swiper(container, {
            watchOverflow: true,
            pagination: {
                el: slider.querySelector('.js-projects-all-slider-pagination'),
                type: 'progressbar',
            },
            init: false
        })

        swiperInstance.on('init', function() {
            const totalNumber = swiperInstance.slides.length;
            const currentNumber = swiperInstance.realIndex + 1;

            fractionContainer.innerHTML = `
                <span class="current">${currentNumber}</span>
                    /
                <span class="total">${totalNumber}</span>
            `;

            current = fractionContainer.querySelector('.current');
            total = fractionContainer.querySelector('.total');
        })


        swiperInstance.on('slideChange', function() {
            const totalNumber = swiperInstance.slides.length;
            const currentNumber = swiperInstance.realIndex + 1;

            current.textContent = currentNumber;
            total.textContent = totalNumber;

            if (currentNumber === totalNumber) {
                arrowReversed = true;
                sliderArrow.classList.add('reversed');
            } else {
                arrowReversed = false;
                sliderArrow.classList.remove('reversed');
            }
        })

        swiperInstance.init();


        if (sliderArrow) {
            sliderArrow.style.display = 'block';
            sliderArrow.addEventListener('click', function(event) {
                event.preventDefault();
                if (!arrowReversed) {
                    swiperInstance.slideNext();
                    console.log('Sliding next')
                } else {
                    swiperInstance.slidePrev();
                    console.log('Sliding prev')
                }
            })
        }
    })
    
}
