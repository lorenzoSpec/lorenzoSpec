function appearDisappearanceNav(){
  const screenH = window.innerHeight;
  const screenTwoFive = screenH * 0.25;
  const screenEight = screenH * 0.80; 
  const heroSect = document.getElementById('head-section');
  const heroSectTop = heroSect.getBoundingClientRect().top;
  const proSection = document.getElementById('project');
  const proSectTop = proSection.getBoundingClientRect().top;
  const footSect = document.getElementById('footer');
  const footSectTop = footSect.getBoundingClientRect().top;
  const footSectBot = footSect.getBoundingClientRect().bottom;
  const LABOUT = document.getElementById('l-about');
  const LPROJECT = document.getElementById('l-project');
  const LCONTACT = document.getElementById('l-contact');

  alignNav(screenH, heroSectTop, screenTwoFive);
  highlightWhereUser(screenH, screenTwoFive, screenEight, heroSectTop, proSectTop, footSectBot, LABOUT, LPROJECT, LCONTACT);
}

function alignNav(screenH, hsTop, stFive){
  let beNeg = stFive * -1;
  const navEl = document.getElementById('sticking-bar');
  backgroundNav(navEl, hsTop, beNeg);
}

function backgroundNav(navEl, hsTop, beNeg){
  if(hsTop > beNeg){
    navEl.style.backgroundColor = '';
  } else {
    navEl.style.backgroundColor = '#171D20';
  }
}

function highlightWhereUser(screenH ,screenTwoFive, screenEight, heroSectTop, proSectTop, footSectBot, LABOUT, LPROJECT, LCONTACT){
  let hsTopNeg = screenEight * -1;
  let cieldFootBot = Math.round(footSectBot);

  if(heroSectTop >= hsTopNeg){
    LABOUT.style.opacity = '0.5';
    LPROJECT.style.opacity = '1';
    LCONTACT.style.opacity = '1';
  } else if (screenH === cieldFootBot){
    LABOUT.style.opacity = '1';
    LPROJECT.style.opacity = '1';
    LCONTACT.style.opacity = '0.5';
  } else {
    LABOUT.style.opacity = '1';
    LPROJECT.style.opacity = '0.5';
    LCONTACT.style.opacity = '1';
  }

  console.log(screenH, cieldFootBot);
}

window.addEventListener('scroll', appearDisappearanceNav);

export { appearDisappearanceNav };