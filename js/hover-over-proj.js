const PROJECTDIV = document.querySelectorAll('.project-div-indv');

function projectdivAddEvents(){
  PROJECTDIV.forEach( x => {
    x.addEventListener('mouseover', function(){addClass(x)});
    x.addEventListener('click', function(){addClass(x)});
  });
}

function addClass(el){
  let div = el.children[1];
  let alink = el.children[1].children[0];
  let ptext = el.children[1].children[1];

  div.classList.add('show-blur');
  alink.style.fontSize = '16px';
  ptext.style.fontSize = '13px';

  console.log(div.classList.add('show-blur'));
}

export { projectdivAddEvents };