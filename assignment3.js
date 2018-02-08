/*ARTG2260: Programming Basics
Shannon Hanlon
shannonhanlon17@gmail.com
Assignment 3.0: Animate Form*/
var n = 60;

function setup() {
	createCanvas(400,400);
	background(255);
}

function draw() {
	fill(255);
	rect(0,0,width,height);
	var pX = 0;
	var pY = 0;

	for (var i=0; i<n; i++) {
		var x = (frameCount + random(-i,i))% 400;
		var y = i*40;
		stroke(66,244,194);
		strokeWeight(5);
		fill(204,255,204);
		ellipse(pX, pY + 10, x, y);
		fill(153,255,204);
		rect(pX, pY, x, y);
		pX = x;
		pY = y;
	}
}
