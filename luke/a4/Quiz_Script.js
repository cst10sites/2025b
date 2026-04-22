document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let question1Answer = document.getElementById('question1').value.toLowerCase().trim();
    let question2Answer = document.querySelector('input[name="question2"]:checked');

    let resultText = '';


    if (question1Answer === 'cascading style sheets') {
        resultText += 'question 1: correct<br>';
    } else {
        resultText += 'question 1: incorrect, try again.<br>';
    }

    if (question2Answer && question2Answer.value === 'css') {
        resultText += 'question 2: correct<br>';
    } else {
        resultText += 'question 2: incorrect, try again.<br>';
    }

    document.getElementById('result').innerHTML = resultText;
});