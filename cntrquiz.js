//alt quiz

document.forms['cntrQuiz'].onsubmit = function submitAnswers(){
	var total = 2;
	var score = 0;
	var q1 = document.forms['cntrQuiz']['q1'].value;
	var q2 = document.forms['cntrQuiz']['q2'].value;
    
	for(a = 1; a <= total;a++){
		if(eval('q'+a) === null || eval('q'+a) === ''){
			alert('Ξεχάσατε κάποιο Χρώμα');
			return false;
		}
        if(q1a.checked && q2b.checked){
			alert('Μεγάλη Αντίθεση (WCAG Compliance AA)');
            return false;
		} else if (q1b.checked && q2b.checked) {
            alert('Πολύ Μικρή Αντίθεση (WCAG Compliance FAIL)');
            return false;
        } else if (q1a.checked && q2a.checked) {
            alert('Μεσαία Αντίθεση (WCAG Compliance A)');
            return false;
        } else if (q1b.checked && q2a.checked) {
            alert('Πολύ Μικρή Αντίθεση (WCAG Compliance FAIL)');
            return false;
        }
	}
	
}