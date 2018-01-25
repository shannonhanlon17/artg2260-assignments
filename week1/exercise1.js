/*ARTG2260: Programming Basics
Shannon Hanlon
shannonhanlon17@gmail.com
Assignment 2: Stick Figure*/
function setup() {
  createCanvas(640, 480);
  background(255);

  fill(250,25,255);
  ellipse(125,290,105,200);

  fill(50,255,255);
  strokeWeight(7);
  stroke('rgba(250,25,255, 0.5)');
  triangle(70, 200, 57, 220, 105, 220);

  fill(25,255,85);
  strokeWeight(7);
  stroke(89,80,19);
  rect(0,0,55,37);

  fill(150,275,20);
  noStroke( );
  quad(200, 20, 306, 20, 306, 360, 144, 360);
}