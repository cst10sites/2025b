let code = document.getElementById("code");
let output = document.getElementById("output");
let bar = document.getElementById("title")

let editingBody = false
let makingGreen = false

// init

// Load sound effects
let ding = new Audio('../assets/ding.opus')

// code highlighting with ace
let editor = ace.edit("code");
editor.setTheme("ace/theme/github_dark");
editor.session.setMode("ace/mode/html");
editor.setOption("wrapBehavioursEnabled", true);

// code updating
const blob = new Blob([editor.getValue()], { type: 'text/html' });
output.src = URL.createObjectURL(blob)
let oldOutput = output.contentDocument.body.innerText

if (document.title == "Sandbox") {
  downloadpage()
}

code.addEventListener("keyup", (e) => {
  const blob = new Blob([editor.getValue()], { type: 'text/html' });
  output.src = URL.createObjectURL(blob)
  
  if (output.contentDocument.body.innerText != oldOutput) {
    if (editingBody) {
      ding.play()
      document.getElementById("tutorial").style.backgroundColor = "#00aaff"
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#1e1e1e"
      }, 200);
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#00aaff"
      }, 400);
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#1e1e1e"
      }, 600);
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#00aaff"
      }, 800);
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#1e1e1e"
      }, 1000);
      document.getElementById("tutorial").innerText = "Next"
      setTimeout(() => {
        document.getElementById("tutorial").innerText = "Continue Tutorial"
      }, 15000);
      editingBody = false
    }
  }
  if (makingGreen) {
    if (window.getComputedStyle(output.contentDocument.body.querySelector("p")).getPropertyValue('background-color') == "rgb(0, 128, 0)") {
      ding.play()
      document.getElementById("tutorial").style.backgroundColor = "#00aaff"
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#1e1e1e"
      }, 200);
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#00aaff"
      }, 400);
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#1e1e1e"
      }, 600);
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#00aaff"
      }, 800);
      setTimeout(() => {
        document.getElementById("tutorial").style.backgroundColor = "#1e1e1e"
      }, 1000);
      document.getElementById("tutorial").innerText = "Next"
      setTimeout(() => {
        document.getElementById("tutorial").innerText = "Continue Tutorial"
      }, 15000);
      makingGreen = false
    }
  }
  if (document.title == "Sandbox") {
    downloadpage()
  }

  console.log(oldOutput, output.contentDocument.body.innerText)

  title.innerText = output.contentDocument.title

  oldOutput = output.contentDocument.body.innerText
});


// Dialog cycling
let dialogIndex = 1;
let char = 0;
let animatedText = []
let text = ""
let updateinterval;

function next() {
  if (dialogIndex > 1) {
    document.getElementById(`dialog${dialogIndex - 1}`).style.display = "none"
  }
  let item = document.getElementById(`dialog${dialogIndex}`)
  console.log(item.innerText)
  let itemtext = item.querySelector(".dialogtext")
  const itemtexttext = itemtext.innerText
  console.log(itemtexttext)
  item.style.display = "initial"
  dialogIndex++;
  char = 0
  animatedText = []
  text = ""
  clearInterval(updateinterval)
  updateinterval = setInterval(updateText, 50, itemtext, itemtexttext)
}

function dialogOpen() {
  document.getElementById("page-mask").style.display = "initial"
  dialog.showModal()
  if (!makingGreen && !editingBody) {
    next()
  }
}

function updateText(item, text) {
    if (char > text.length) {return}
    animatedText[char] = text.charAt(char)
    item.innerText = animatedText.join("")
    console.log(item.innerText)
    char++
}


function close() {
  document.getElementById("page-mask").style.display = "none"
  dialog.close()
}
close()
dialogOpen()

document.getElementById("dialog").addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    e.preventDefault()
  }
})

function editbody() {
  editingBody = true
  close()
}

function openImgPreset() {
  editor.setValue(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>${output.contentDocument.title}</title>
  </head>
  <body>
    <p>
      ${output.contentDocument.body.innerText}
    </p>
    <img>
  </body>
</html>`, 1)
  const blob = new Blob([editor.getValue()], { type: 'text/html' });
  output.src = URL.createObjectURL(blob)
  next()
}

function openImgPreset2() {
  editor.setValue(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>${output.contentDocument.title}</title>
  </head>
  <body>
    <p>
      ${output.contentDocument.body.innerText}
    </p>
    <img alt="" src="https://static.vecteezy.com/system/resources/previews/001/416/705/original/html5-emblem-orange-shield-and-white-text-vector.jpg" width=100px height=100px>
  </body>
</html>`, 1)
  const blob = new Blob([editor.getValue()], { type: 'text/html' });
  output.src = URL.createObjectURL(blob)
  next()
}

function editimg() {
  close()
}

function finale() {
  close()
  document.getElementById("tutorial").remove()
  let newbutton = document.createElement("button")
  newbutton.innerText = "Next Lesson"
  newbutton.onclick = function() { lesson2(); }
  newbutton.id = "tutorial"
  document.body.insertBefore(newbutton, document.getElementById("afterbtn"))
}

function finale2() {
  close()
  document.getElementById("tutorial").remove()
  let newbutton = document.createElement("button")
  newbutton.innerText = "Next Lesson"
  newbutton.onclick = function() { lesson3(); }
  newbutton.id = "tutorial"
  document.body.insertBefore(newbutton, document.getElementById("afterbtn"))
}

function finale3() {
  location.href = "sandbox.html"
}

function lesson2() {
  location.href = "two.html"
}

function lesson3() {
  location.href = "three.html"
}

function css() {
  editor.setValue(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>${output.contentDocument.title}</title>
  </head>
  <body>
    <p>
      Frog Analysis
    </p>
    <p>
      I really like frogs, and enjoy talking about them.
      If you want to enjoy frogs with me,
      check out <a href="https://en.wikipedia.org/Frog">this</a>.
    </p>
    <img alt="Frog." src="https://pngimg.com/uploads/frog/frog_PNG35716.png" width=100px height=100px>


    <style>
    body {
      background-color: black;
      color: white;
      font-family: monospace;
    }
    </style>
  </body>
</html>`, 1)
  const blob = new Blob([editor.getValue()], { type: 'text/html' });
  output.src = URL.createObjectURL(blob)
  next()
}

function styletag() {
  editor.setValue(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>${output.contentDocument.title}</title>
  </head>
  <body>
    <p>
      Frog Analysis
    </p>
    <p>
      I really like frogs, and enjoy talking about them.
      If you want to enjoy frogs with me,
      check out <a href="https://en.wikipedia.org/Frog">this</a>.
    </p>
    <img alt="Frog." src="https://pngimg.com/uploads/frog/frog_PNG35716.png" width=100px height=100px>


    <style></style>
  </body>
</html>`, 1)
  const blob = new Blob([editor.getValue()], { type: 'text/html' });
  output.src = URL.createObjectURL(blob)

  next()
}


function makegreen() {
  close()
  makingGreen = true
}


function showcase() {
  close()
  output.style.position = "absolute"
  output.style.width = "100%"
  output.style.height = "100%"
  output.style.top = "0"
  output.style.left = "0"
  document.getElementById("scroll").style.display = "none"
  document.getElementById("workspace").remove()
  let backbtn = document.createElement("button")
  backbtn.style.position = "absolute"
  backbtn.style.bottom = "5%"
  backbtn.innerText = "Return"
  backbtn.style.margin = "auto"
  backbtn.style.width = "100px"
  backbtn.style.left = "0"
  backbtn.style.right = "0"
  backbtn.onclick = function () { dialogOpen() }
  document.body.appendChild(backbtn)
  downloadpage()
}


function downloadpage() {
  const blob = new Blob([editor.getValue()], { type: 'text/html' })
  const downloadUrl = URL.createObjectURL(blob)

  document.getElementById("download").href = downloadUrl
}
