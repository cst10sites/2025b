var nClicks = 0; 
var resetWatch = 0;
var startTime = new Date();

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
document.getElementById("root").innerHTML = CPS.toPrecision(3);
nClicks ++;
}

}
function resetGame() {
nClicks = 0;
startTime = new Date();
document.getElementById("root").innerHTML = " "
}
