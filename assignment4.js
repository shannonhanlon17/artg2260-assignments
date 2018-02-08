/*ARTG2260: Programming Basics
Shannon Hanlon
shannonhanlon17@gmail.com
Assignment 3.0: Animate Form*/
var n = 60;
var xPos;
var yPos;
var xDi = 25;
var yDi =25;
var ySpeed = 1;
var y;

/*First Canvas*/
function setup() {
	createCanvas(400,400);
	background(255);
	xPox = width/2;
	yPos = height/2;
	ySpeed = random(1,20);
}

function draw() {
	fill(255);
	tint(255,127);
	stroke(66,244,194);
	strokeWeight(3);
	var x2 = map(mouseX, 0, width, 0, 400, true);
	ellipse(x2, yPos, 40 + random(yPos/2), 40 + random(x2/3));
	yPos += ySpeed;

	if (yPos+yDi/2 >=height || yPos-yDi/2 <= 0) {
		ySpeed *= -1;
	}
}