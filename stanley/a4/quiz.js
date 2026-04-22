function question1() {
	var answer = document.getElementById("correct").checked;

	if (answer == true) {
		alert("Nice!");
	}
	else {
		alert("Try again!");
	}
}

function question2() {
	var a = document.getElementById("option4").checked;
	var monitor = document.getElementById("option5").checked;
	var encode = document.getElementById("option6").checked;
	var mark = document.getElementById("option7").checked;

	var correct = (a == true && mark == true);

	if (a && mark && !monitor && !encode) { 
		alert("Great job!");
	}
	else {
		alert("Better luck next time...");
	}
}

console.log("test")