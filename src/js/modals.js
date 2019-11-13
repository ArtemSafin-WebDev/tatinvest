

export default function() {
    const modalLinks = Array.from(document.querySelectorAll('.js-modal-open'));
    const modalCloseLinks = Array.from(document.querySelectorAll('.js-modal-close'));
    const modals = Array.from(document.querySelectorAll('.js-modal'));

    modalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const hash = link.hash; 
            if (hash) {
                const modal = document.querySelector(hash);    
                if (modal) {
                    modal.classList.add('shown');
                }
            }
        })
    });

    modalCloseLinks.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.js-modal');

            if (modal) {
                modal.classList.remove('shown');
            }
        })
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (this === event.target) {
                modal.classList.remove('shown');
            }
        })
        
    })
}