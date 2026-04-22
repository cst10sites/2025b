function example2() {
	var correctAns = document.getElementById("option1").checked;
	// this answer will either be true or false

	if (correctAns == true) {
		alert("Correct!")
	}
	else {
		alert("Try again");
	}
}
function example4() {
	var choice = document.getElementById("question2").value;
	if (choice  == "2") {
		document.getElementById("htmlDisplay").innerHTML = alert("Correct!");
	}
	else {
		document.getElementById("htmlDisplay").innerHTML = alert("Try again");
	}
}
function example3() {
	var choice1 = document.getElementById("choice1").checked; // HTML
	var choice2 = document.getElementById("choice2").checked; // CSS
	var choice3 = document.getElementById("choice3").checked; // Java
	var choice4 = document.getElementById("choice4").checked; // JS

	// Note: All except for Java is correct

	var correct = (choice1 == true && choice2 == false && choice3 == true && choice4 == true);

	if (correct == true) {
		alert("Correct!");
	}
	else {
		alert("Try again");
	}
	}