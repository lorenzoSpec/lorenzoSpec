import { animateAbout } from './animation.js';

/* caching the DOM */
let LOGO = document.querySelectorAll('.to-reload');

/* when page is loaded  */
function pageLoaded(){
  const LOADINGDIV = document.getElementById('loading');
  LOADINGDIV.setAttribute('class', 'animateLoaded');

  logoCliked();
  animateAbout();
}

/* add event listeners for all logos  */
function logoCliked(){
  LOGO.forEach( x => {
    x.addEventListener('click', reloadThePage);
  });
}

/* when particular logo is clicked reload the page */
function reloadThePage(){
  location.reload();
}

/* before leaving the page clear the evnts listeners */
function clearThePage(){
  LOGO.forEach( x => {
    x.removeEventListener('click', reloadThePage);
  });
}

window.addEventListener('load', pageLoaded);
window.addEventListener('beforeunload', clearThePage);