/*ARTG2260: Programming Basics
Shannon Hanlon
shannonhanlon17@gmail.com
Assignment 3.0: Animate Form*/
var n = 60;

/*First Canvas*/
function setup() {
	createCanvas(400,400);
	background(255);
}

function draw() {
	var x1 = map(mouseX, 0, width, 25, 75);
	fill(204,255,204);
	stroke(66,244,194);
	strokeWeight(4);
	var x2 = map(mouseX, 0, width, 0, 400, true);
	ellipse(x2, 75, 25, 25);
}