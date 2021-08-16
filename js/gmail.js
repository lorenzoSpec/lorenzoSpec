const MYGMAIL =  document.getElementById('my-gmail');

function copyToClipboard(text){
  navigator.clipboard.writeText(text);
}

MYGMAIL.addEventListener('click', function(){copyToClipboard('john.erwin.lorenzo.2002@gmail.com')});