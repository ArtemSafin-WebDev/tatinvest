import jump from 'jump.js'

export default function() {
    const anchors = Array.from(document.querySelectorAll('.js-anchor'));
    console.log('Anchors', anchors);
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            console.log('Clicked')
            event.preventDefault();
            const hash = this.hash;
            const element = document.querySelector(hash);
            console.log('Element', element);
            if (element) {
                jump(element, {
                    // offset: -115
                })
            } 
        })
    })
}