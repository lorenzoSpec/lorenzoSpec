const GREETINGS = document.querySelector('#text-div p');
const NAME = document.querySelector('#text-div h1');
const CONTACTME = document.querySelector('#text-div button');
const LOGOHERO = document.getElementById('je-logo');
const NAV = document.getElementById('nav-in-hero');
const CREATIVTEXT = document.getElementById('creative-bg');

function animateAbout(){
  GREETINGS.setAttribute('class', 'greetAnm');
  NAME.setAttribute('class', 'nameAnm');
  CONTACTME.setAttribute('class', 'contactmeAnm');
  LOGOHERO.classList.add('logoheroAnm');
  NAV.setAttribute('class', 'logoheroAnm');
  CREATIVTEXT.setAttribute('class', 'logoheroAnm');
}

export { animateAbout };