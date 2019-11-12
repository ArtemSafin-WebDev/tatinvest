import Fullpage from 'fullpage.js';
import aboutUsSlider from './aboutUsSlider';
import tabs from './tabs';
import projectsSlider from './projectsSlider';
import lastNewsSlider from './lastNewsSlider';
import sideMenu from './sideMenu';
import modals from './modals';

export default function() {
    let lastSection = false;
    let firstSection = false;
    let fullpageSlider = null;

    const pageNumber = document.querySelector('.js-page-number');

    const slideChangeHandler = (origin, destination, direction) => {
        // Make elements dark

        if (!!(destination.index % 2)) {
            document.body.classList.add('dark-elements');
        } else {
            document.body.classList.remove('dark-elements');
        }

        // Check if section is first or last

        if (destination.isLast) {
            lastSection = true;
            document.body.classList.add('last-section');
        } else if (destination.isFirst) {
            firstSection = true;
            document.body.classList.add('first-section');
        } else {
            lastSection = false;
            firstSection = false;
            document.body.classList.remove('first-section');
            document.body.classList.remove('last-section');
        }

        // Change page number

        const number = destination.index + 1;

        pageNumber.textContent = number.toString().length < 2 ? '0' + number : number;
    };

    fullpageSlider = new Fullpage('#fullpage', {
        responsiveWidth: 768,
        scrollOverflow: true,
        afterRender: function() {
            const arrow = document.querySelector('.js-fullpage-arrow');
            if (arrow) {
                arrow.addEventListener('click', function() {
                    if (lastSection) {
                        fullpageSlider.moveSectionUp();
                    } else {
                        fullpageSlider.moveSectionDown();
                    }
                });
            }

            // About us slider

            aboutUsSlider();

            // Tabs

            tabs();

            // Projects slider

            projectsSlider();

            // Last news

            lastNewsSlider();

            // Side menu

            sideMenu();

            // Modals 

            modals();

            // Rebuild to account new height

            fullpageSlider.reBuild();
        },
        afterLoad: slideChangeHandler,
        onLeave: slideChangeHandler
    });
}
