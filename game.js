let fish = [];
/*let monster = [];*/
let gameState = 0;
let score = 0;
let bg;
let y = 0;
/*let Shark = [];*/

/*function preload(){
  //fish//
  fish = loadImage('CartoonFish.jpg');
} */

function setup(){
  framerate = 10;
  bg = loadImage('backgroundImage.png');
  createCanvas(400,400);
}

function draw(){
  background(bg);

  stroke(226, 204, 0);
  line(0, y, width, y);

  y++
  if (y > height) {
    y = 0;  
  }

  if (gameState == 0){
    startScreen();
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
  }
}

function startScreen(){
  background(0,0,255);
  text("Click to Play", 10, 30);
  fish = [];
  for (let i = 0; i < 10; i++){ 
    let x = 20 + 20*i; 
    let rate = 1 + 0.5*i;
    fish[i] = new Fish(x, 50, rate);
   }
 /* monster = [];
  for (let m = 0; m < 10; m){
    let x = 20;
    let rate = 2;
    monster[m] = new Monster(x, 10, rate);
  }*/
}

function update(){
  background(0,0,255);
  for (let i = 0; i < fish.length; i++){   
    fish[i].move();           
    fish[i].display();         
    fish[i].check();
   /* monster[m].move();
    monster[m].display();*/        
  }
  score++;
  text("Playing", 10, 30);
  text("Score: " + score, 10, 90);
}

function gameOver(){
  background(0,0,255);
  text("Game Over", 10, 30);
  stroke(255,0,0);
  text("Score: " + score, 10, 90);
}

function mouseClicked(){
 if (gameState == 0){
   gameState = 1;
 } else if (gameState == 2){
   gameState = 0;
 }
}

/*class Shark {
  constructor(mouseX, mouseY, pmouseX, pmouseY);
  cursor(Shark);
} */
/*class Monster {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
    this.height = 30;
    this.width = 40;
  }

  move() {
    this.x += this.speed;
    if ((this.x > (width - this.width/2)) || (this.x < this.height/2)) {
      this.speed *= 2;
    }
  }

  display() {
    fill(0);
    rect(this.x, this.y, this.width, this.height);
  } 
}*/

class Fish {
  constructor(_x, _y, _speed) {
    this.x = _x;
    this.y = _y;
    this.speed = _speed;
    this.height = 20;
    this.width = 25;
  }

  move() {
    this.x += this.speed;
    if ((this.x > (width - this.width/2)) || (this.x < this.height/2)) {
      this.speed *= -1;
    }
    if ((this.y > (height - this.width/2)) || (this.y < this.height/2)) {
      this.speed *= +1;
    }
    this.y += this.speed;  
    if ((this.y > (height - this.width/2)) || (this.y < this.height/2)) {
      this.speed *= -1;
    }
    if ((this.x > (width - this.width/2)) || (this.x > this.height/2)) {
      this.speed *= +1;
    }  
  }

  display() {
    fill(255,0,0);
    rect(this.x, this.y, this.width, this.height);
  }

  /*display() {
     fish.display;
  }*/
  check() {
    if (abs(this.x - mouseX) < this.width && abs(this.y-mouseY < this.height)){
      gameState = 2;
    }
  }
}