/*ARTG2260: Programming Basics
Shannon Hanlon
shannonhanlon17@gmail.com
Exercise 2: Nested Iteration*/
function setup() {
	createCanvas(400, 400);
	background(255);
	for (var y = 0; y < 400; y += 60){
		for (var x = 0; x < 400; x += 60){
			if (x % y)
			fill(30,30,133,(x+y) * .25);
			triangle(x, y, x + 120, y + 60, x + 60, y + 120);
			fill(240,84,84, (x+y) * .25);
			triangle(x, y, x - 120, y - 60, x - 60, y - 120);
		}
	}
}