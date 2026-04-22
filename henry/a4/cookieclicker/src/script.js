// Clicker logic

// save cookies to storage
if (!localStorage.getItem("cookies")) {
    localStorage.setItem("cookies", 0)
}
// load
let initcookies = localStorage.getItem("cookies")
let cookies = JSON.parse(initcookies)
let date;
let olddate = new Date();
let cps = 0;
let ephemeralcookies = 0
document.getElementById("clicks").innerHTML = "Clicks:<br>" + cookies

// Handle clicks
const clicker = document.getElementById("clicker")

clicker.addEventListener("mousedown", function() {
    clicker.style.scale = 0.9
})

clicker.addEventListener("mouseup", function() {
    cookies += 1
    if (ephemeralcookies == 0) {
        olddate = new Date()
        ephemeralcookies += 1
        setInterval(updatethings, 100)
    } else {
        date = new Date()
        // CPS
        ephemeralcookies += 1
        cps = ephemeralcookies / ((date - olddate) / 1000)
        document.getElementById("cps").innerHTML = "CPS:<br>" + cps.toFixed(1)
    }
    
    document.getElementById("clicks").innerHTML = "Clicks:<br>" + cookies
    localStorage.cookies = JSON.stringify(cookies);
    clicker.style.scale = 1


})


// Resize sections of page
const grab = document.getElementById("seperator")
let grabMode = false
let mousepos = [0,0]

grab.addEventListener("mousedown", function() {
    grabMode = true
    document.body.style.userSelect = "none"
});
document.addEventListener("mouseup", function() {
    grabMode = false
    document.body.style.userSelect = "auto"
});

document.addEventListener('mousemove', function(event) {
    mousepos = [event.clientX, event.clientY]
    if (grabMode) {
        const left = document.getElementById("left")
        const right = document.getElementById("right")
        if (event.clientX / window.screen.width * 100 > 35 && event.clientX / window.screen.width * 100 < 100-35) {
            left.style.width = event.clientX / window.screen.width * 100 + "%"
            right.style.width = (100 - event.clientX / window.screen.width * 100) + "%"
        }
    }
});


function updatethings() {
    date = new Date()
    cps = ephemeralcookies / ((date - olddate) / 1000)
    document.getElementById("cps").innerHTML = "CPS:<br>" + cps.toFixed(1)
}