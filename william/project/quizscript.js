var questionnum = 0;
var questions = ['' , 
				 '<label><strong>Who designed the P1™?</strong></label><br><input id="option2" type="radio" value="lightning" name="ex2"><label for="option2">Lightning McQueen</label><br><input id="correctAnwser" type="radio" value="frank" name="ex2"><label for="correctAnwser">Frank Stephenson</label><br><input id="option3" type="radio" value="enzo" name="ex2"><label for="option3">Enzo Ferrari</label><br><button onclick="resetWindow()">Reset</button><br></form><button onclick="try1()">Submit</button>' ,
				 '<label><strong>What does DRS stand for?</strong></label><br><input id="option2" type="radio" value="donut" name="ex2"><label for="option2">Donut Rotary Synthesis</label><br><input id="correctAnwser" type="radio" value="drag" name="ex2"><label for="correctAnwser">Drag Reduction System</label><br><input id="option3" type="radio" value="enzo" name="ex2"><label for="option3">Daytona Racing Simulator</label><br><button onclick="resetWindow()">Reset</button><br></form><button onclick="try1()">Submit</button>',
				 '<label><strong>What track did the P1™ set a sub 7 minute lap time?</strong></label><br><input id="option2" type="radio" value="donut" name="ex2"><label for="option2">Silverstone Raceway</label><br><input id="correctAnwser" type="radio" value="drag" name="ex2"><label for="correctAnwser">Nürburgring Nordschleife</label><br><input id="option3" type="radio" value="enzo" name="ex2"><label for="option3">Le Mans</label><br><button onclick="resetWindow()">Reset</button><br></form><button onclick="try1()">Submit</button>'
				]

function try1() {
	var correctAns = document.getElementById("correctAnwser").checked;
	if (correctAns == true) {
		document.getElementById("result").innerHTML = "<strong>Correct!</strong>";
		questionnum += 1;
		if (questionnum > 3) {
			document.getElementById("quiz").innerHTML = "<h1>You Win!</h1>";
		} else {
			document.getElementById("quiz").innerHTML = questions[questionnum];
		}
	} else {
		document.getElementById("result").innerHTML = "<strong>Try Again!</strong>";
	}	
}

function resetWindow() {
	window.location.replace('');
}