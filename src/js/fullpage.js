import Fullpage from 'fullpage.js';
import aboutUsSlider from './aboutUsSlider';
import tabs from './tabs';
import projectsSlider from './projectsSlider';
import lastNewsSlider from './lastNewsSlider';
import sideMenu from './sideMenu';
import modals from './modals';
import burgerMenu from './burgerMenu';
import smoothScrolling from './smoothScrolling';
import allProjectsSlider from './allProjectsSlider';
import projectItemSlider from './projectItemSlider';

export default function() {
    let lastSection = false;
    let firstSection = false;
    let fullpageSlider = null;
    let darkThemeRemovable = true;

    const pageNumber = document.querySelector('.js-page-number');

    if (document.body.classList.contains('dark-elements')) {
        darkThemeRemovable = false;
    }

    const slideChangeHandler = (origin, destination, direction) => {
        // Make elements dark


        if (darkThemeRemovable) {
            if (!!(destination.index % 2)) {
                document.body.classList.add('dark-elements');
            } else {
                document.body.classList.remove('dark-elements');
            }
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


        if (destination.isLast && destination.isFirst) {
            document.body.classList.add('single-section');
        }

        // Change page number

        const number = destination.index + 1;

        pageNumber.textContent = number.toString().length < 2 ? '0' + number : number;
    };

    fullpageSlider = new Fullpage('#fullpage', {
        responsiveWidth: 769,
        scrollOverflow: true,
        lockAnchors: true,
        scrollOverflowOptions: {
            disableMouse: true,
            disablePointer: true,
            disableTouch: false
        },
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

            // Burger menu

            burgerMenu();

            // Smooth scrolling

            smoothScrolling();

            // All projects slider

            allProjectsSlider();

            // Project item slider

            projectItemSlider();

            // Rebuild to account new height

            fullpageSlider.reBuild();
        },
        afterLoad: slideChangeHandler,
        onLeave: slideChangeHandler
    });
}
