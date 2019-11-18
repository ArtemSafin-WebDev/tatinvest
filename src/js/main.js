import polyfills from './polyfills';
import detectTouch from './detectTouch';
import fullpageSlider from './fullpage';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    fullpageSlider();
    
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 200);
})
