var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-18234656-1']);
_gaq.push(['_setDomainName', 'none']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

_gaq.push(['old._setAccount', 'UA-68540-5']);
_gaq.push(['old._setDomainName', 'none']);
_gaq.push(['old._setAllowLinker', true]);
_gaq.push(['old._trackPageview']);

window.google_analytics_uacct = 'UA-18234656-1';
window.google_analytics_domain_name = 'none';

var OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: null,
  });
});

function showHideMenu() {
  var links = document.getElementById("moreLinks");
  if (links.style.display == "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

function answer1() {
    alert("Hope you're having a great day!");
}


function answer2() {
  var correctAns = document.getElementById("option1").checked;

  if (correctAns == true) {
    alert("That's funny!");
  } else {
    alert("Hmmm. Good answer!");
  }
}

function answer3() {
  var choice1 = document.getElementById("choice1").checked; // HTML
  var choice2 = document.getElementById("choice2").checked; // CSS
  var choice3 = document.getElementById("choice3").checked; // Java
  var choice4 = document.getElementById("choice4").checked; // JS

  var correct = (choice1 == true && choice2 == true && choice3 == true && choice4 == true);

  if (correct == true) {
    alert("Great answer! I love your tastes!");
  } else {
    alert("Great answer!");
  }

}

function answer4() {
  var choice = document.getElementById("hyperlinkValue").value;

  var ch = choice.toLowerCase();

  if (ch == "a") {
    alert("Nice!");
  } else {
    alert("I see!");
  }

}