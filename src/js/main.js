import polyfills from './polyfills';
import detectTouch from './detectTouch';
import fullpageSlider from './fullpage';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    fullpageSlider();
    
});
