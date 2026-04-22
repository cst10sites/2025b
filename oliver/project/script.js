			//menu
			function showHideMenu1() {
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

			function showHideMenu2() {
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

			function showHideMenu3() {
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
	

	//Slideshows

	//slideshow1

	var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Show slides
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

//Slideshow2
var slideIndex = 0;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Show slides
function showSlides2(n) {
  var slides = document.getElementsByClassName("mySlides2");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

//Slideshow3
var slideIndex = 0;
showSlides3(slideIndex);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex += n);
}

// Show slides
function showSlides3(n) {
  var slides = document.getElementsByClassName("mySlides3");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}


