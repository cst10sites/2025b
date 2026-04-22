var nClicks = 0;
var startTime = new Date();
var count = (function (){
	var counter = 0;
	return function () {return counter +=1;}

})();	

// basic version of Cookie Clicker code
function updateCPS() {
	if (nClicks == 0) {
		nClicks++
		startTime = new Date();
		

	}
	else {
		let timeNow = new Date();
		let timeElapsed = (timeNow - startTime) / 1000;
		let CPS = nClicks / timeElapsed;
		let toPrecision = Number.prototype.toPrecision()
		document.getElementById("root").innerHTML = "Your CPS is " + CPS.toFixed(3);	
		nClicks ++;
	}

}


function resetWatch() {
	location.reload();
}



function displayCount(){
document.getElementById("display").innerHTML = "You Clicked " + count();	
}

   


setInterval(updateTime, 100);

function updateTime() {

	if(nClicks > 0) {
	let timeNow = new Date();	
	var timeElapsed = (timeNow - startTime) / 1000;
	document.getElementById("times").innerHTML = timeElapsed
	}

}