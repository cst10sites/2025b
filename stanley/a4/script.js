var clicks = 0;

var cps = 0; 

var startTime = new Date().getTime();

function startStopwatch() {
    if (clicks == 0) {
        startTime = new Date().getTime(); 
    }

    var currentTime = new Date().getTime(); 
    var elapsedTime = (currentTime - startTime) / 1000; 
    
    cps = clicks / elapsedTime;
    document.getElementById("cpsDisplay").innerHTML = cps.toFixed(2); 
    clicks = clicks + 1
    document.getElementById("clicks").innerHTML = clicks
}

setInterval(updateTime, 100);

function updateTime() {
    if (clicks > 0) {
        var currentTime = new Date().getTime();
        var elapsedTime = (currentTime - startTime) / 1000; 
        document.getElementById("timeDisplay").innerHTML = elapsedTime.toFixed(2); 
    }
}