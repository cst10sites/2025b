function lightmode() {
				document.getElementById("stylesrc").href = "lightstyle.css";
				document.getElementById("mode").href = "javascript:darkmode();"
				document.getElementById("sunmoon").src = "moon.png"
			}
function darkmode() {
				document.getElementById("stylesrc").href = "style.css";
				document.getElementById("mode").href = "javascript:lightmode();"
				document.getElementById("sunmoon").src = "sun.png"
			}