
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function() {
    const openBtn = document.querySelector('.js-burger-open');
    const closeBtn = document.querySelector('.js-burger-close');
    const wrapper = document.querySelector('.js-burger-wrapper');
    const watchMore = document.querySelector('.js-watch-more');


    openBtn.addEventListener('click', function(event) {
        event.preventDefault();

        document.body.classList.add('burger-menu-open');

        disableBodyScroll(wrapper);
    })
    watchMore.addEventListener('click', function(event) {
        event.preventDefault();

        document.body.classList.add('burger-menu-open');

        disableBodyScroll(wrapper);
    })
    closeBtn.addEventListener('click', function(event) {
        event.preventDefault();

        document.body.classList.remove('burger-menu-open');

        enableBodyScroll(wrapper);
    })
}