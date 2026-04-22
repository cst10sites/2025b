       
        var startTime;
        var timerRunning = false;
        var timerDisplay = document.getElementById("timer");
        var scrambleDisplay = document.getElementById("scramble");
        var timesList = document.getElementById("times");

        document.addEventListener("keyup", (event) => {
            if (event.code === "Space" && !timerRunning) {
                startTime = performance.now();
                timerRunning = true;
                updateTimer();
            } else if (timerRunning) {
                var elapsedTime = (performance.now() - startTime) / 1000;
                timerDisplay.textContent = `${elapsedTime.toFixed(2)}`;
                timerRunning = false;
                
                // Add the recorded time to the list
                var timeEntry = document.createElement("div");
                timeEntry.textContent = ` ${elapsedTime.toFixed(2)} `;
                timesList.prepend(timeEntry);

                // Generate a new scramble
                scrambleDisplay.textContent = generateScramble();
            }
        });

        function updateTimer() {
            if (timerRunning) {
                var elapsedTime = (performance.now() - startTime) / 1000;
                timerDisplay.textContent = `${elapsedTime.toFixed(2)}`;
                requestAnimationFrame(updateTimer);
            }
        }

        function generateScramble() {
            const moves = ["U", "D", "L", "R", "F", "B"];
            const modifiers = ["", "'", "2"];
            var scramble = [];
            var lastMove = "";

            for (var i = 20; i > 0; i--) {
                var move;
                do {
                    move = moves[Math.floor(Math.random() * moves.length)];
                } while (move === lastMove);

                lastMove = move;
                let modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                scramble.push(move + modifier);
            }

            return scramble.join(" ");
        }

        // scramble on page load
        scrambleDisplay.textContent = generateScramble();



    //menu
            function showHideMenu4() {
                var links = document.getElementById("moreLinks");
                var links2 = document.getElementById("moreLinks2");
                var links3 = document.getElementById("moreLinks3");
                if (links.style.display == "block") {
                    links.style.display = "none"; // hide
                } else {
                    links.style.display = "block"; // show
                }

                if (links2.style.display == "block") {
                    links2.style.display = "none";
                }

                if (links3.style.display == "block") {
                    links3.style.display = "none";
                }

            
            }

            function showHideMenu5() {
                var links2 = document.getElementById("moreLinks2");
                var links = document.getElementById("moreLinks");
                var links3 = document.getElementById("moreLinks3");
                if (links2.style.display == "block") {
                    links2.style.display = "none"; // hide
                } else {
                    links2.style.display = "block"; // show
                }

                if (links.style.display == "block") {
                    links.style.display = "none";
                }

                if (links3.style.display == "block") {
                    links3.style.display = "none";
                }
            }

            function showHideMenu6() {
                var links2 = document.getElementById("moreLinks2");
                var links = document.getElementById("moreLinks");
                var links3 = document.getElementById("moreLinks3");
                if (links3.style.display == "block") {
                    links3.style.display = "none"; // hide
                } else {
                    links3.style.display = "block"; // show
                }

                if (links.style.display == "block") {
                    links.style.display = "none";
                }

                if (links2.style.display == "block") {
                    links2.style.display = "none";
                }
            }
