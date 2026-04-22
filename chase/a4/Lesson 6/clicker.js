var nClicks = 0;
var startTime = new Date();
var cookies = 0;
var toPrecision = Number.prototype.toPrecision();
var cookMultiplier = 1
var upgrade1amount = 0;
var autoclickers = 0;
var upgrade2amount = 0;
// basic version of Cookie Clicker code
function roundNum(x) {
	let newnum = x.toPrecision(3);
	return newnum;
}
function updateCPS() {
	cookies = cookies + cookMultiplier;
	document.getElementById("cookies").textContent = "Your amount of cookies: " + (cookies).toFixed(1);
	if (nClicks == 0) {
		nClicks++;
		startTime = new Date();
		// first click
		// 1. reset startTime
		// 2. increase nClicks by 1
	}
	else {
		var timeNow = new Date();
		let timeElapsed = (timeNow - startTime) / 1000;
		let CPS = nClicks / timeElapsed;
		document.getElementById("root").textContent = "Your CPS is " + String(roundNum(CPS));
		nClicks++;

		// subsequent clicks:
		// 1. create variable currentTime
		// 2. create variable timeElapsed and subtract start and currentTime
		// 3. calculate CPS = nClicks ÷ timeElapsed 
		//    BUT timeElapsed be measured in seconds (not milliseconds)
		// 4. display CPS using id
		// 5. increase nClicks by 1
	}

}
function upgrade() {
	if (cookies > 20) {
		cookMultiplier = cookMultiplier * 1.1
		upgrade1amount++;
		document.getElementById("upgrade1").textContent = "Upgrade number: " + upgrade1amount;
		cookies = cookies - 20;
		
	}
		
}
function updateTime() {
	var timeNow = new Date();
	let timeElapsed = (timeNow - startTime) / 1000;
	document.getElementById("time").innerHTML = "Time passed: " + timeElapsed.toFixed(1) + "s";
	document.getElementById("cookies").textContent = "Your amount of cookies: " + (cookies).toFixed(1);
}