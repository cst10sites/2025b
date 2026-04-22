var cookies = 0
var cps = 0
var clickStrength = 1
var clickUpCost = 10
var cpsUpCost = 50
var startTime = new Date().getTime()

function cookieClicked() {
    cookies += clickStrength
    updateDisplay()
}

function buyClickUp() {
    if (cookies >= clickUpCost) {
        cookies -= clickUpCost
        clickStrength++
        clickUpCost = Math.floor(clickUpCost * 2.5)
        document.getElementById("upgradeCost").innerHTML = clickUpCost
        updateDisplay()
    }
}

function buyCpsUp() {
    if (cookies >= cpsUpCost) {
        cookies -= cpsUpCost
        cps += 0.1
        cpsUpCost = Math.floor(cpsUpCost * 2.5)
        document.getElementById("cpsUpgradeCost").innerHTML = cpsUpCost
        updateDisplay()
    }
}
function updateDisplay() {
    document.getElementById("clicksDisplay").innerHTML = Math.floor(cookies)
    document.getElementById("CPS").innerHTML = cps.toFixed(2)
}

function updateTime() {
    if (cookies > 0) {
        var currentTime = new Date().getTime()
        var elapsedTime = (currentTime - startTime) / 1000
        document.getElementById("timeDisplay").innerHTML = elapsedTime.toFixed(2)
    }
}

function resetGame() {
    cookies = 0
    cps = 0
    clickStrength = 1
    clickUpCost = 10
    cpsUpCost = 50
    startTime = new Date().getTime()
    document.getElementById("upgradeCost").innerHTML = clickUpCost
    document.getElementById("cpsUpgradeCost").innerHTML = cpsUpCost
    document.getElementById("timeDisplay").innerHTML = "0.00"
    updateDisplay()
}

setInterval(function () {
    cookies += cps
    updateDisplay()
}, 1000)
setInterval(updateTime, 1000)
document.getElementById("startButtonDisplay").addEventListener("click", function () {
    if (cookies === 0) startTime = new Date().getTime()
    cookieClicked()
})
document.getElementById("upgradeButton").addEventListener("click", buyClickUp)
document.getElementById("cpsUpgradeButton").addEventListener("click", buyCpsUp)
document.getElementById("resetButton").addEventListener("click", resetGame)