//img resize altquiz

var altImg1 = document.getElementById('altimg1');
document.getElementById('altimg1button').addEventListener('click', 
  function(){
  altImg1.classList.toggle('altimgbig');
  if (document.getElementById('altimg1').getAttribute('class') === 'altimgbig') {
     document.getElementById('altimg1');
  }
});

var altImg2 = document.getElementById('altimg2');
document.getElementById('altimg2button').addEventListener('click', 
  function(){
  altImg2.classList.toggle('altimgbig');
  if (document.getElementById('altimg2').getAttribute('class') === 'altimgbig') {
     document.getElementById('altimg2');
  }
});

var altImg3 = document.getElementById('altimg3');
document.getElementById('altimg3button').addEventListener('click', 
  function(){
  altImg3.classList.toggle('altimgbig');
  if (document.getElementById('altimg3').getAttribute('class') === 'altimgbig') {
     document.getElementById('altimg3');
  }
});


//alt quiz

document.forms['altQuiz'].onsubmit = function submitAnswers(){
	var total = 3;
	var score = 0;
	var q1 = document.forms['altQuiz']['q1'].value;
	var q2 = document.forms['altQuiz']['q2'].value;
	var q3 = document.forms['altQuiz']['q3'].value;
	var answers = ["b","c","c"];
	
	for(a = 1; a <= total;a++){
		if(eval('q'+a) === null || eval('q'+a) === ''){
			alert('Ξεχάσατε την Εικόνα '+ a);
	        var altresults = document.getElementById('altresults');
			altresults.innerHTML = 'Ξεχάσατε την Εικόνα '+ a
			return false;
		}
	}
	
	for(a = 1; a <= total;a++){
		if(eval('q'+a) === answers[a - 1]){
			score++;
		}
	}
	alert(''+score+' από '+total+' Σωστές Απαντήσεις');
	var altresults = document.getElementById('altresults');
	results.innerHTML = ''+score+' από '+total+' Σωστές Απαντήσεις';
	return false;
}


