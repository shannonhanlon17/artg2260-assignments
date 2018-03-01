let numParticles = 200;
let particles = [];

function setup() {
  createCanvas(300,300);
  for(let i = 0; i < numParticles; i++){
    particles[i] = new Particle(0, height, random(-2,2), random(-2,2), 20.0);
  }
  noStroke();

}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255, 10);
  for (p of particles){
   p.move();
   p.display();
   p.regenerate();
  }
}

class Particle { 
  
  constructor(_x, _y, _xVel, _yVel, r) {
    this.x = _x;
    this.y = _y;
    this.xVel = _xVel;
    this.yVel = _yVel;
    this.r = random(50);
    this.gravity = 0.01;
  }
  
  move() {
    this.yVel += this.gravity;
    this.y += this.yVel;
    this.x += this.xVel;
  }
  
  display() {
    fill(random(200, 10, 20));
    rect(this.x, this.y, this.r, this.r+20);
  }

  regenerate() {
    if (this.y > height+this.r) {
      this.x = mouseX;
      this.y = mouseY;
      this.xVel = random(-1.0, 1.0);
      this.yVel = random(-3.0, -2.0);
    }
  }
}