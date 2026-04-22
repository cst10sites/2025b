var planet = window.location.hash.substring(1);

document.getElementById("title").innerHTML = planet;
document.getElementById("image").src = "images/" + planet + ".png";
document.getElementById("image").alt = planet
document.getElementById("pageName").innerHTML = "Guide to the Planets | " + planet[0].toUpperCase() + planet.substring(1);


//Descriptions

var description = document.getElementById("description");
var radiusMetric = document.getElementById("radius");
var radiusEarths = document.getElementById("radiusEarths");
var volumeMetric = document.getElementById("volume");
var volumeEarths = document.getElementById("volumeEarths");
var day = document.getElementById("day");
var year = document.getElementById("year");

switch(planet) {
	case "mercury":
		description.innerHTML = "Murcury is the closest planet to the sun.";
		radiusMetric.innerHTML = "2439.7 km";
		radiusEarths.innerHTML = "0.3829 Earths";
		volumeMetric.innerHTML = "6.083×10<sup>10</sup> km<sup>3</sup>";
		volumeEarths.innerHTML = "0.056 Earths";
		day.innerHTML = "176 Earth Days";
		year.innerHTML = "87.97 Earth Days";

		break;

	case "venus":
		description.innerHTML = "Venus is the closest you can get to hell.";
		radiusMetric.innerHTML = "6051.8 km";
		radiusEarths.innerHTML = "0.9499 Earths";
		volumeMetric.innerHTML = "9.2843×10<sup>11</sup> km<sup>3</sup>";
		volumeEarths.innerHTML = "0.857 Earths";
		day.innerHTML = "116.75 earth days";
		year.innerHTML = "224.7 earth days";

		break;

	case "earth":
		description.innerHTML = "You already know all about this one.";
		radiusMetric.innerHTML = "6371 km";
		radiusEarths.innerHTML = "1 Earth";
		volumeMetric.innerHTML = "1.08321×10<sup>12</sup> km<sup>3</sup>";
		volumeEarths.innerHTML = "1 Earth";
		day.innerHTML = "24 hours";
		year.innerHTML = "365.25 earth days";

		break;

	case "mars":
		description.innerHTML = "I found Elon!";
		radiusMetric.innerHTML = "3389.5 km";
		radiusEarths.innerHTML = "0.533 Earth";
		volumeMetric.innerHTML = "1.63118×10<sup>11</sup> km<sup>3</sup>";
		volumeEarths.innerHTML = "0.151 Earths";
		day.innerHTML = "24 hours 39 minutes and 36 seconds";
		year.innerHTML = "686.98 earth days";

		break;

	case "jupiter":
		description.innerHTML = "The biggest planet.";
		radiusMetric.innerHTML = "69,911 km";
		radiusEarths.innerHTML = "10.973 Earths";
		volumeMetric.innerHTML = "1.4313×10<sup>15</sup> km<sup>3</sup>";
		volumeEarths.innerHTML = "1321 Earths";
		day.innerHTML = "9 hours 55 minutes 33 seconds";
		year.innerHTML = "4,332.59 earth days";

		break;

	case "saturn":
		description.innerHTML = "Sorry guys! See the ring? She's taken!";
		radiusMetric.innerHTML = "58,232 km";
		radiusEarths.innerHTML = "9.1402 Earths";
		volumeMetric.innerHTML = "8.2713×10<sup>14</sup> km<sup>3</sup>";
		volumeEarths.innerHTML = "763.59 Earths";
		day.innerHTML = "10 hours 39 minutes";
		year.innerHTML = "10,755.70 earth days";

		break;

	case "uranus":
		description.innerHTML = "Haha";
		radiusMetric.innerHTML = "25,362 km";
		radiusEarths.innerHTML = "3.981 Earths";
		volumeMetric.innerHTML = "6.833×10<sup>13</sup> km<sup>3</sup>";
		volumeEarths.innerHTML = "63.086 Earths";
		day.innerHTML = "17 hours 14 minutes 51 seconds";
		year.innerHTML = "30,688.5 earth days";

		break;

	case "neptune":
		description.innerHTML = "neptuenenenenne.";
		radiusMetric.innerHTML = "24,622 km";
		radiusEarths.innerHTML = "3.864 Earths";
		volumeMetric.innerHTML = "6.253×10<sup>13</sup> km<sup>3</sup>";
		volumeEarths.innerHTML = "57.74 Earths";
		day.innerHTML = "16 hours 6 minutes 36 seconds";
		year.innerHTML = "60,195 earth days";

		break;

	default:
		description.innerHTML = "None";
}