var cookies = 0;
var cookiesPerClick = 1;

var powerups = {
    cursor: {
        cost: 10,
        amount: 1
    }
};

var cookieImg = document.getElementById('cookie');
var counterDisplay = document.getElementById('counter');

function createSparkle(x, y, amount) {
    var sparkle = document.createElement('div');
    sparkle.textContent = "+" + amount;
    sparkle.className = 'sparkle';
    sparkle.style.left = (x - 20) + "px";
    sparkle.style.top = (y - 20) + "px";
    document.body.appendChild(sparkle);
    setTimeout(function() {
        sparkle.remove();
    }, 800);
}
cookieImg.addEventListener('click', function(e) {
    cookies += cookiesPerClick;
    createSparkle(e.pageX, e.pageY, cookiesPerClick);
    updateCounter();
    clickCount++;
    updatePowerupButton('cursor');
});
cookieImg.addEventListener('dragstart', function(e) {
    e.preventDefault();
});
updatePowerupButton('cursor');

function updateCounter() {
    counterDisplay.textContent = "Cookies: " + cookies;
}

function updateDisplay() {
    document.getElementById("cookieCount").innerText = cookies;
}

function updatePowerupButton(type) {
    var button = document.getElementById("powerupbutton");
    var powerup = powerups[type];
    if (cookies >= powerup.cost) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function buyPowerup(type) {
    var powerup = powerups[type];
    if (cookies >= powerup.cost) {
        cookies -= powerup.cost;
        cookiesPerClick += powerup.amount;
        powerup.cost = Math.floor(powerup.cost * 1.3);
        document.getElementById(type + "Cost").textContent = powerup.cost;
        updateCounter();
    } 
    updatePowerupButton('cursor');
}

var clickCount = 0;
var cps = 0;
var lastTime = Date.now();

function updateCPS() {
    var currentTime = Date.now();
    var elapsedTime = (currentTime - lastTime) / 1000;
    cps = (clickCount / elapsedTime).toFixed(2);
    document.getElementById("cps").textContent = "CPS: " + cps;
}

setInterval(updateCPS, 100);