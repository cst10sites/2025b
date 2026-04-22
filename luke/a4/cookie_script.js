    var clicks = 0;
var cps = 0;
var cookies = 0;
var clickStrength = 1;
var clickUpCost = 10;
var cpsUpCost = 50;
var startTime = new Date().getTime();

function cookieClicked() {
    cookies += clickStrength;
}

function buyCpsUp() {
    if (cookies >= cpsUpCost) {
        cookies -= cpsUpCost;
        cps += 0.1;
        cpsUpCost = cpsUpCost * 2.5;
        document.getElementById("clicksDisplay").innerHTML = cookies;
        alert("CPS increased.");
    }
}

function buyClickUp() {
    if (cookies >= clickUpCost) {
        cookies -= clickUpCost;
        clickStrength++;
        clickUpCost = clickUpCost * 2.5;
        document.getElementById("clicksDisplay").innerHTML = cookies;
         document.getElementById("upgradeCost").innerHTML = clickUpCost;
        alert("Click strength increased.");
    }
}

function startStopwatch() {
    if (cookies === 0) {
        startTime = new Date().getTime();
    }

    var currentTime = new Date().getTime();
    var elapsedTime = (currentTime - startTime) / 1000;
    cookies++;
    
    cps = Math.round(cookies / elapsedTime);

    document.getElementById("CPS").innerHTML = cps.toFixed(2);
    document.getElementById("clicksDisplay").innerHTML = cookies;
}

setInterval(updateTime, 100);

function updateTime() {
    if (cookies > 0) {
        var currentTime = new Date().getTime();
        var elapsedTime = (currentTime - startTime) / 1000;
        document.getElementById("timeDisplay").innerHTML = elapsedTime.toFixed(2);
    }

}

document.getElementById("startButtonDisplay").addEventListener("click", function() {
    startStopwatch();
});

document.getElementById("upgradeButton").addEventListener("click", function() {
    buyClickUp();
}); 