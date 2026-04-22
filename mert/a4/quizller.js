

function question1(){
var correctAns = document.getElementById("correct").checked	

	if (correctAns == true){
		alert("Correct!")
	}

	else{
		alert("Wrong!")
	}

}



function question2(){
	var choice = document.getElementById("htmlTag").value


	choice = choice.toLowerCase();

	if(choice == "<h1>") {
		document.getElementById("tagDisplay").innerHTML = "Correct!!!";
	}

	else {
		document.getElementById("tagDisplay").innerHTML = "Incorrect! "+ choice +""
	}

}


function question3() {
	var choice1 = document.getElementById("choice1").checked; // head
	var choice2 = document.getElementById("choice2").checked; // body
	var choice3 = document.getElementById("choice3").checked; // doctype
	var choice4 = document.getElementById("choice4").checked; // script



	var correct = (choice1 == true && choice2 == true && choice3 == true && choice4 == false);

	if (correct == true) {
		alert("Correct");
	}
	else {
		alert("Incorrect");
	}

}

