function answer1() {
	var answerTyped = document.getElementById("scriptlang").value;

	if (answerTyped == "Javascript") {
		alert("Correct!");
	} else {
		alert("Incorrect!");
	}
}


function answer2() {
	var correctAns = document.getElementById("option1").checked;

	if (correctAns == true) {
		alert("Correct!");
	} else {
		alert("Incorrect!");
	}
}

function answer3() {
	var choice1 = document.getElementById("choice1").checked; // HTML
	var choice2 = document.getElementById("choice2").checked; // CSS
	var choice3 = document.getElementById("choice3").checked; // Java
	var choice4 = document.getElementById("choice4").checked; // JS

	var correct = (choice1 == true && choice2 == true && choice3 == false && choice4 == false);

	if (correct == true) {
		alert("Correct!");
	} else {
		alert("Incorrect!");
	}

}

function answer4() {
	var choice = document.getElementById("hyperlinkValue").value;

	var ch = choice.toLowerCase();

	if (ch == "a href") {
		alert("Correct!");
	} else {
		alert("Incorrect, it is not " + choice + "!");
	}

}