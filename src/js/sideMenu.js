export default function() {
    const viewMore = document.querySelector('.js-menu-view-more');
    const burger = document.querySelector('.js-sidebar-menu');


    function handleMenuClick(event) {
        event.preventDefault();
        document.body.classList.toggle('side-menu-open');
    }

    burger.addEventListener('click', handleMenuClick);
    viewMore.addEventListener('click', handleMenuClick);
}