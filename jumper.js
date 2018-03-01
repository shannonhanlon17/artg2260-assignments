let platform = [];
let player;
let gameState = 0;    // this is the value we'll toggle to change the game states

function setup(){
 createCanvas(500,500);

 framerate = 20;
}

function draw(){
  background(255);
  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
  }
  player = new Player();
}

function startScreen(){
  background(111, 178, 237);
  text("Click to Begin", 10, 30);
  platform = [];
  for (let i = 0; i < 5; i++){
  	let x = 10 + 20*i;
  	let rate = 0.5 + 0.5*i;
  	platform[i] = new Platform(x, random(400), rate);
  }
}

function update(){
  background(111, 178, 237);
  for (let i = 0; i < platform.length; i++){
  	platform[i].move();
  	platform[i].display();
  	platform[i].regenerate();
  	/*platform[i].check();*/
  	player.move();
  	player.display();
  }	
  text("Playing", 10, 30);
}

function gameOver(){
  background(111, 178, 237);	
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

class Platform {
	constructor(_x, _y, _r) {
		this.x = _x;
		this.y = _y;
		this.r = _r;
		this.h = 20;
		this.w = 60;
	}
	move() {
		this.x += this.r;
		if (((this.x > (width - this.w/2)) || (this.x < this.w/2))){
			this.r = random(6);
		}
	}
	display() {
		rect(this.x, this.y, this.w, this.h);
	}
	regenerate() {
		if (this.x > width+this.r) {
			this.x = 0;
			this.h = 20;
			this.w = 60;
		}
	}
	/*check() {
    if (abs(this.x - mouseX) < this.w && abs(this.y-mouseY < this.h)){
      gameState = 2;
    } 
  }*/
}
class Player {
	constructor(_x, _y, r) {
		this.x = _x;
		this.y = _y;
		/*this.xVel = _xVel;
		this.yVel = _yVel;
		this.r = _r;*/
		this.diameter = 30;
		this.gravity = 0.1;
	}
	move() {
		this.yVel += this.gravity;
		this.y += this.yVel;
		this.x += this.xVel;
	}
	display() {
		ellipse(this.x, this.y, this.diameter, this.diameter)
	}
}