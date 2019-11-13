export default function() {
    const sliders = Array.from(document.querySelectorAll('.js-about-us-slider'));

    sliders.forEach(slider => {
        const slides = Array.from(slider.querySelector('.about-us__slides').children);
        const links = Array.from(slider.querySelector('.about-us__navigation-links').children);
        const bars = Array.from(slider.querySelectorAll('.about-us__navigation-bar-inner'));

        let timer = null;
        let activeIndex = 0;
        const autoplayInterval = 5000;
        let autoplay = true;

        function handleLinkClick(index) {
            links.forEach(link => link.classList.remove('active'));
            slides.forEach(slide => slide.classList.remove('active'));

            if (index >= slides.length) {
                activeIndex = 0;
            } else {
                activeIndex = index;
            }

            links[activeIndex].classList.add('active');
            slides[activeIndex].classList.add('active');

            bars.forEach((bar, barIndex) => {
                bar.style.cssText = '';
            });

            if (autoplay && bars[activeIndex]) {
                setTimeout(function() {
                    bars[activeIndex].style.transform = 'scaleX(1)';
                    bars[activeIndex].style.transitionDuration = `${5000 / 1000}s`;
                }, 200);
            }

            if (timer) {
                clearTimeout(timer);
                timer = null;
                if (autoplay) {
                    timer = setTimeout(() => {
                        handleLinkClick(activeIndex + 1);
                    }, autoplayInterval);
                }
            } else {
                if (autoplay) {
                    timer = setTimeout(() => {
                        handleLinkClick(activeIndex + 1);
                    }, autoplayInterval);
                }
            }
        }

        links.forEach((link, index) => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                autoplay = false;
                handleLinkClick(index);
            });
        });

        slider.addEventListener('click', function() {
            clearTimeout(timer);
            bars.forEach((bar, barIndex) => {
                bar.style.cssText = '';
            });
            autoplay = false;
        })

        slider.addEventListener('tabchange', function() {
            console.log('Tabchange happened, disabling autoplay');
            clearTimeout(timer);
            bars.forEach((bar, barIndex) => {
                bar.style.cssText = '';
            });
            autoplay = false;
        })

        handleLinkClick(activeIndex);
    });
}
