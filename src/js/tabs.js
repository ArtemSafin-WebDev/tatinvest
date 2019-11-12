export default function() {
    const tabs = Array.from(document.querySelectorAll('.js-tabs'));

    tabs.forEach(item => {
        const tabButtons = Array.from(item.querySelectorAll('.js-tabs-btn'));
        const tabItems = Array.from(item.querySelectorAll('.js-tabs-item'));
        let activeTabIndex;

        if (!tabButtons.legth === 0 || tabItems.length === 0) {
            console.log('Отсутвуют кнопки или табы');
            return;
        } else if (tabButtons.length !== tabItems.length) {
            console.log('Количество элементов управления не равно количеству табов');
            return;
        }

        activeTabIndex = tabButtons.findIndex(element => {
            return element.classList.contains('active');
        });
        if (activeTabIndex === -1) {
            activeTabIndex = 0;
        }

        setActiveTab(activeTabIndex);

        function setActiveTab(nextIndex, previousIndex) {
            if (arguments.length >= 2) {
                tabButtons[previousIndex].classList.remove('active');
                tabItems[previousIndex].classList.remove('active');
            }
            tabButtons[nextIndex].classList.add('active');
            tabItems[nextIndex].classList.add('active');
            activeTabIndex = nextIndex;
        }

        tabButtons.forEach((button, index) => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                if (index === activeTabIndex) {
                    return;
                }
                setActiveTab(index, activeTabIndex);
            });
        });
    });
}
