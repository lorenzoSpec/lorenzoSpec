function pageLoaded(){
  const LOADINGDIV = document.getElementById('loading');
  LOADINGDIV.setAttribute('class', 'animateLoaded');
}

window.addEventListener('load', pageLoaded);