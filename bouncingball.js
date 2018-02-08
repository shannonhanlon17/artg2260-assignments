var xPos;
var yPos;
var xDi = 30;
var yDi = 30;
var xSpeed = 1;
var ySpeed = 1;

function setup() {
	createCanvas(300,300);
	xPos = width/2;
	yPos = height/2;
	xSpeed = random(1,10);
	ySpeed = random(1,10);
}

function draw() {
	background(0);
	fill(255, 0, 255);
	ellipse(xPos, yPos, 30, 30);
	xPos += xSpeed;
	yPos += ySpeed;

	if (xPos+xDi/2 >= width || xPos-xDi/2 <= 0){
		xSpeed *= -1;
	}
	if (yPos+yDi/2 >=height || yPos-yDi/2 <= 0){
		ySpeed *= -1;
	}
}