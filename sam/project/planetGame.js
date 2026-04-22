let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let height;
let width;

height = window.innerHeight;
width = window.innerWidth;

canvas.height = height;
canvas.width = width;
console.log("ha");


let player1pos = height/2 - height/10;
let player2pos = height/2 - height/10;

player1score = 0;
player2score = 0;
player1planets = [];
player2planets = [];

canmove = 1;

ctx.fillStyle = "white";

let player1upkey = 0;
let player1downkey = 0;
let player2upkey = 0;
let player2downkey = 0;

let ballx = width/2;
let bally = height/2;

let ballydir = 1;
let ballxdir = 1;
let ballspeed = 7;
let planetIndex = 0;
let offsetImg = 0;
let ballsize = 0;

let planetIndexTable = [
	["mercury", width/25],
	["venus", width/25],
	["earth", width/25],
	["mars", width/25],
	["jupiter", width/5],
	["saturn2", width/7],
	["uranus", width/10],
	["neptune", width/10],
]

const planetPics = []

for (let i = 0; i < 8; i++) {
	console.log(i);
	planetPics[i] = new Image();
	planetPics[i].src = "images/" + planetIndexTable[i][0] + ".png";
}

planetImageIndex = -1;

function setPlanetData(index){
	planetImageIndex++;
	ballsize = planetIndexTable[index][1];
	if (index != 5){
		imageBallsize = planetIndexTable[index][1];
		offsetImg = 0;
	} else {
		imageBallsize = planetIndexTable[index][1] * (1024/427);
		offsetImg = ballsize/10*7; //todo resize saturn to to fit right
	}
}

setPlanetData(0);

window.addEventListener("keydown", function(event) {
	if (event.key == "w") {
		player1upkey = 1;
	}
	if (event.key == "s") {
		player1downkey = 1;
	}
	if (event.key == "ArrowUp") {
		player2upkey = 1;
	}
	if (event.key == "ArrowDown") {
		player2downkey = 1;
	}
})
window.addEventListener("keyup", function(event) {
	if (event.key == "w") {
		player1upkey = 0;
	}
	if (event.key == "s") {
		player1downkey = 0;
	}
	if (event.key == "ArrowUp") {
		player2upkey = 0;
	}
	if (event.key == "ArrowDown") {
		player2downkey = 0;
	}
})
function input() {
	if (player1upkey) {
		if (player1pos > 0){
			player1pos -= 10;
		}
	}
	if (player1downkey) {
		if ((player1pos + height/5) < height){
			player1pos += 10;
		}
	}
	if (player2upkey) {
		if (player2pos > 0){
			player2pos -= 10;
		}
	}
	if (player2downkey) {
		if ((player2pos + height/5) < height){
			player2pos += 10;
		}
	}
}

function score() {
		player1pos = height/2 - height/10;
		player2pos = height/2 - height/10;
		canmove = 0;

		bally = 2*height;
		setPlanetData(++planetIndex);

		if (planetIndex != 8) {

		//console.log("score")
		setTimeout(function() {
			ballydir *= -1;
			ballspeed += 0.2;
			ballx = width/2;
			bally = height/2;
	
			canmove = 1;
			//console.log("score done")
		}, 1000);
		}
}

function ballmove() {
	ballx += ballspeed * ballxdir;
	bally += ballspeed * ballydir;

	if ((bally + ballsize) > height){
		ballydir = -1;
	}
	if (bally < 0) {
		ballydir = 1;
	}
	if ( (ballx + ballsize > (width/20)*19 - width/50) && (ballx + ballsize < (width/20)*19) && (bally + ballsize > player2pos) && (bally < player2pos + height/5) ) {
		ballxdir = -1; //something here is broken
		console.log("Oh no");
	}
	if ( (ballx < width/20 + width/50) && (ballx > width/20) && (bally + ballsize > player1pos) && (bally < player1pos + height/5) ) {
		ballxdir = 1;
		console.log("hello there my youn")
	}

	//todo: add top and bototm collision to the ball

	if ( (bally + ballsize > player1pos) && (ballx < width/20) && (ballx + ballsize > width/20 - width/50) ){
		ballydir = -1;
	}
	if ( (bally + ballsize > player2pos) && (ballx < width/20*19) && (ballx + ballsize > width/20*19 + width/50) ){
		ballydir = -1;
	}

	if ( (bally > player1pos) && (ballx < width/20) && (ballx + ballsize > width/20 - width/50) ){
		ballydir = 1;
	}

	if ( (bally > player2pos) && (ballx < width/20*19) && (ballx + ballsize > width/20*19 + width/50) ){
		ballydir = 1;
	}

	if ( ballx + ballsize < 0) {
		player1score++;
		player2planets.push(planetIndex);
		score();
	}

	if ( ballx - ballsize > width) {
		player2score++;
		player1planets.push(planetIndex);
		score();
	}
}

function drawScore() {

	let spacing = 0;

	for (let i = 0;i < player1planets.length;i++){
		if (player1planets[i] != 5) {
			ctx.drawImage(planetPics[ player1planets[i] ], width*0.4 - spacing*width/20, height/20, width/30, width/30);
			spacing++;
		}
		else {
			spacing++;
			ctx.drawImage(planetPics[ player1planets[i] ], width*0.4 - spacing*width/20, height/20, width/30 * (1024/427), width/30);
			spacing ++;
		}
	}
	spacing = 0;
	for (let i = 0;i < player2planets.length;i++){
		if (player2planets[i] != 5) {
			ctx.drawImage(planetPics[ player2planets[i] ], width*0.6 + spacing*width/20, height/20, -width/30, width/30);
			spacing++;
		}
		else {
			spacing++;
			ctx.drawImage(planetPics[ player2planets[i] ], width*0.6 + spacing*width/20, height/20, -width/30 * (1024/427), width/30);
			spacing++;
		}
	}
}

function loop(){
	//console.log(`w: ${player1upkey}, s: ${player1downkey}`);
	if (canmove){
		input();
		ballmove();
	}

	ctx.clearRect(0, 0, width, height);
	drawScore();
	ctx.fillRect(width/20, player1pos, width/50, height/5);
	ctx.fillRect(width/20*19, player2pos, -width/50, height/5);

	//ctx.fillRect(ballx, bally, width/50, width/50);
	ctx.drawImage(planetPics[planetImageIndex], ballx - offsetImg, bally, imageBallsize, ballsize);

	/*let textyMan = `${player2score}  ${player1score}`;
	ctx.font = "100px Arial";
	ctx.fillText(textyMan, width/2 - (ctx.measureText(textyMan).width)/2, height/10 + 10);*/
}

setInterval(loop, 10);