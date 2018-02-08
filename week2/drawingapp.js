/*ARTG2260: Programming Basics
Shannon Hanlon
shannonhanlon17@gmail.com
Assignment 2.1: Drawing App*/
var weight = 2;//button dimensions
var buttonWidth = 40;
var buttonHeight = 20;
var drawRect = true;
var drawing = [];

function setup() {
	var c = createCanvas(400, 400);
	background(212, 216, 215);
	stroke(20);
}

function draw (){
	fill (0,0,255);
	rect(20, 20, buttonWidth, buttonHeight);

	if (mouseIsPressed == true) {
		if (drawRect == true) {
			rect(mouseX, mouseY, weight, weight);
			} else {
				strokeWeight(weight);
				line (mouseX, mouseY, pmouseX, pmouseY);
		}
	}
}

function draw (){
	if (mouseIsPressed == true) {
		line(mouseX, mouseY, pmouseX, pmouseY);
	} 
	if (mouseX >= 10 && mouseX <=10+20 && mouseY >= 10 && mouseY <= 10+20)
	{
		isOverRectangle = true;
	} else {
		isOverRectangle = false;
	}
	rectMode(CORNER);
	stroke(0);
	strokeWeight(5);
	if(isOverRectangle == true)
	{
		fill(100);
		cursor(HAND);
	} else {
		fill(200);
		cursor(ARROW);
	}
	rect(10,10,20,20);
}	

function keyPressed() {
	if (key == 'b' || key == 'B') {
	  stroke(0, 0, 255);
	} else if (key == 's' || key == 'S'){ //for skin//
	  stroke(246, 202, 166);
	} else if (key == 'h' || key == 'H'){ //for hair//
	  stroke(250, 234, 188);
	} else if (key == 'e' || key == 'E'){ //for eyes and shirt//
	  stroke(12, 99, 69);
	} else if (key == 'w' || key == 'W'){ //white//
	  stroke(255);
	} else if (key == 't' || key == 'T'){ //thicker stroke//
	  strokeWeight(2);
	} else if (key == 'y' || key == 'Y'){ //thick stroke//
	  strokeWeight(8);  
	} else if (key == 'u' || key == 'U'){ //super thick stroke//
	  strokeWeight(14);   
	} else if (key == 'x' || key == 'X'){
	  background(212, 216, 215);
	} else if (key == 'q' || key == 'Q'){
	  saveCanvas(c,'myCanvas', 'jpg');  
	}
}

function onClick() {
	if(isOverRectangle == true) {
		saveCanvas(c,'myCanvas', 'jpg')
	}
}
