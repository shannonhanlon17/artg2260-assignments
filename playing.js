let gameState = 0;

let player;
let shrk = [];
let myScore;
let setSpeed = 0;

function setup() {
	framerate = 20;
	createCanvas(400,400);
	player = new Fish();
	shrk = new Shark();
}

function draw() {
	background(50);
	if (gameState == 0){
		startScreen();
	} else if (gameState == 1){
		update();
	} else if (gameState == 2){
		gameOver();
	}
}

function startScreen(){
	text("Click to Play", 165, 200);
	shrk = [];
	for (let i = 0; i < 5, i++){
		let x = 10 + 20*i;
		let rate = 0.5 + 0.5*i;
		shrk[i] = new Shark(x, 50, rate);
	}
}

function update(){
	for (let i = 0; i < shrk.length; i++){
		shrk[i].move();
		shrk[i].display();
	}
	text("Playing", 10, 30);
	player.display();
	player.move();
}

function gameOver(){
	text("Game Over, Click to Reset", 10, 30);
}

function mouseClicked(){
	if (gameState == 0){
		gameState = 1;
	} else if (gameState == 1){
		gameState = 2;
	} else if (gameState == 2){
		gameState = 0;
	}
}
class Shark {
	constructor(){
		this.x = 400,
		this.y = 100,
		this.width = 100;
		this.height = 10;
	}
	display(){
		rect(this.x, this.y, this.width, this.height);
	}
	move() {
		this.x += -1;
	}
}
class Fish {
	constructor(){
		this.x = 20;
		this.y = 200;
		this.diameter = 30;
	}
	display() {
		ellipse(this.x, this.y, this.diameter, this.diameter)
	}
	move() {
		if (keyCode == RIGHT_ARROW) {
			this.x += 1;
		} else if (keyCode == DOWN_ARROW) {
			this.y += 1;
		} else if (keyCode == LEFT_ARROW) {
			this.x += -1;
		} else if (keyCode == UP_ARROW) {
			this.y += -1;
		}
	}
}
function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		this.setSpeed(1.5, 0);
	}
	else if (keyCode == DOWN_ARROW) {
		this.setSpeed(1.5, 0);
	}
	else if (keyCode == LEFT_ARROW) {
		this.setSpeed(1.5, 0);
	}
	else if (keyCode == UP_ARROW) {
		this.setSpeed(1.5, 0);
	}
	else if (key == ' ') {
		this.setSpeed(0, 0);
	}
	return false;
}