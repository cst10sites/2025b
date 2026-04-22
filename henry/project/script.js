function start() {
    window.location.href = "guide/one.html";
}


let startButton = document.getElementById("start");
startButton.addEventListener("animationend", () => {
    startButton.style.padding = "16px 24px 16px 24px";
    startButton.style.transform = "rotate(39deg)";

    // Start Generating particles
    for (let i = 0; i < 100; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.translate = `${startButton.translate}`
    }
})

startButton.addEventListener("mouseleave", () => {
    startButton.style.transition = "all 0.3s ease-in-out"; // allow transitions
    startButton.style.padding = "8px 12px 8px 12px";
    startButton.style.transform = "rotate(0deg)";
})

startButton.addEventListener("animationstart", () => {
    startButton.style.transition = "none"; // disable transitions for animation
})

startButton.addEventListener("animationcancel", () => {
    startButton.style.transition = "all 0.3s ease-in-out"; // allow transition for cancel
})
