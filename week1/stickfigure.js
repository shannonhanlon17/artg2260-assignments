/*ARTG2260: Programming Basics
Shannon Hanlon
shannonhanlon17@gmail.com
Assignment 2: Stick Figure*/
function setup() {
  createCanvas(640, 480);
  background(255);
  ellipse(75,75,100,100);
  line(75,125,75,220);
  strokeWeight(2);
  line(60,50,60,60);
  line(90,50,90,60);
  line(75,75,75,80);
  bezier(60,100,75,110,75,110,85,100);
  strokeWeight(1);
  line(75,200,10,100);
  line(75,200,140,100);
  ellipse(140,100,30,30);
  ellipse(15,100,30,30);
  line(75,220,105,290);
  line(75,220,55,290);
  ellipse(125,290,55,20);
  ellipse(30,290,55,20)
}

