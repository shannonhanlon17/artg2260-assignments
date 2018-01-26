/*ARTG2260: Programming Basics
Shannon Hanlon
shannonhanlon17@gmail.com
Exercise 2: Nested Iteration*/
function setup() {
	createCanvas(400, 400);
	background(255);
	for (var y = 0; y < 400; y += 10){
		for (var x = 0; x < 400; x += 10){
			fill((x+y) * 1.4);
			ellipse(x, y, 40, 10);        
		}
	}
}