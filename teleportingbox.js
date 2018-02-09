let b;

function setup() {
	createCanvas(100,100);
	b = new Box();
}

function draw() {
	background(255,0,0);
	b.display();
	b.move();
	b.teleport();
}

class Box {
	constructor(){
		this.x = 25;
		this.y = 0;
		this.wide = 30;
		this.tall = 30;
		this.xSpeed = 0;
		this.ySpeed = 1;
		this.color = random();
	}
	display() {
		fill(this.color);
		rect(this.x, this.y, this.wide, this.tall);
	}
	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}
	teleport() {
		if (this.y + this.tall >= height){
			this.y = 0;
			this.tall = 30;
			this.color = random(255);
		}
	}
}