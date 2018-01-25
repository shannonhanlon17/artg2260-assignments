/*ARTG2260: Programming Basics
Shannon Hanlon
shannonhanlon17@gmail.com
Assignment 2: Landscape*/
function setup() {
  createCanvas(640, 480);
  background(255)
  noStroke( );

  fill('rgba(30,132,30,0.75)');
  rect(0,300,600,100);

  fill('rgba(153,204,255,0.80)');
  rect(0,0,600,300);

  fill(139,69,19);
  triangle(70, 200, 250, 300, 0, 300);

  fill(139,69,19);
  triangle(120, 200, 250, 300, 0, 300);

  fill(139,69,19);
  triangle(250, 200, 400, 300, 100, 300);

  fill(139,69,19);
  triangle(400, 200, 600, 300, 100, 300);

  fill(255,255,255);
  strokeWeight(1);
  stroke(139,69,19);
  triangle(400, 200, 440, 220, 340, 220);

  fill(255,255,255);
  strokeWeight(1);
  stroke(139,69,19);
  triangle(250, 200, 220, 220, 280, 220);

  fill(255,255,255);
  strokeWeight(1);
  stroke(139,69,19);
  triangle(120, 200, 95, 220, 145, 220);

  fill(255,255,255);
  strokeWeight(1);
  stroke(139,69,19);
  triangle(70, 200, 57, 220, 105, 220);

  fill(240,199,54);
  strokeWeight(15);
  stroke('rgba(240,175,34, 0.50)');
  ellipse(75,75,100,100);

  fill(81,117,194);
  strokeWeight(5);
  stroke('rgba(187,154,82, 0.50)');
  ellipse(150,340,300,85);

  fill(255,255,255);
  noStroke( );
  ellipse(350,75,90,50);

  fill(255,255,255);
  noStroke( );
  ellipse(330,75,50,70);

  fill(255,255,255);
  noStroke( );
  ellipse(310,90,30,30);

  fill(255,255,255);
  noStroke( );
  ellipse(310,70,30,30);

  fill(255,255,255);
  noStroke( );
  ellipse(360,55,30,30);

  fill(255,255,255);
  noStroke( );
  ellipse(357,93,30,30);
}