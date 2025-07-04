/*dropdown in navigation*/
function dropDownMenu() {
  document.getElementById('droplist').classList.toggle('show');
}

document.getElementById('dropbutton').addEventListener('click', 
  function() {
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !expanded);
  document.getElementById('section1').hidden = expanded;
})

function changeDropIcon() {
  var toggleButton = document.getElementById('dropbutton');
  if (toggleButton.innerHTML === "ΤΕΣΤ +") {
    toggleButton.innerHTML = "ΤΕΣΤ -";
  } else {
    toggleButton.innerHTML = "ΤΕΣΤ +";
  }
}

/*img resize in guide*/

var langImg = document.getElementById('guideimglang');
document.getElementById('imgbuttonlang').addEventListener('click', 
  function(){
  langImg.classList.toggle('guideimgsbig');
  if (document.getElementById('guideimglang').getAttribute('class') === 'guideimgbig') {
     document.getElementById('guideimglang').setAttribute('aria-expanded') = 'true';
  }
});
var headsImg = document.getElementById('guideimgheads');
document.getElementById('imgbuttonheads').addEventListener('click', 
  function(){
  headsImg.classList.toggle('guideimgsbig');
  if (document.getElementById('guideimgheads').getAttribute('class') === 'guideimgbig') {
     document.getElementById('guideimgheads').setAttribute('aria-expanded') = 'true';
  }
});
var alttImg = document.getElementById('guideimgaltt');
document.getElementById('imgbuttonaltt').addEventListener('click', 
  function(){
  alttImg.classList.toggle('guideimgsbig');
  if (document.getElementById('guideimgaltt').getAttribute('class') === 'guideimgbig') {
     document.getElementById('guideimgaltt').setAttribute('aria-expanded') = 'true';
  }
});
var linksgImg = document.getElementById('guideimglinksg');
document.getElementById('imgbuttonlinksg').addEventListener('click', 
  function(){
  linksgImg.classList.toggle('guideimgsbig');
  if (document.getElementById('guideimglinksg').getAttribute('class') === 'guideimgbig') {
     document.getElementById('guideimglinksg').setAttribute('aria-expanded') = 'true';
  }
});



