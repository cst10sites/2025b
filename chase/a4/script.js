function submitTest() {
    var answer1 = document.getElementById("option1").checked;
    if (document.getElementById("dropdown").value == "Java") {
        var answer2 = true;
    }
    var answer3 = null;
    var checkanswer4 = document.getElementById("choice4").checked;
    var checkanswer1 = document.getElementById("choice1").checked;
    var checkanswer2 = document.getElementById("choice2").checked;
    var checkanswer3 = document.getElementById("choice3").checked;
    if (checkanswer4 == true && checkanswer3 == false && checkanswer2 == false && checkanswer1 == false) {
        answer3 = true
    }
    if (answer1 == true && answer2 == true && answer3 == true) {
        alert("You passed the test! congrats!")
    } else {
        alert("You failed. How is this possible?")
    }
    
}
