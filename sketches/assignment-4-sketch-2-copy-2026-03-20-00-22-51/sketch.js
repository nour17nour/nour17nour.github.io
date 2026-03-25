// Sketch 3: Fireworks
// Click to create fireworks

let sparks = [];

class Spark {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // Simple random speeds (explodes outward)
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-8, -2);

    // Size and color
    this.size = random(4, 10);
    this.r = random(150, 255);
    this.g = random(100, 255);
    this.b = random(50, 255);

    // Life (fades out over time)
    this.life = 255;
  }

  // Drawing the spark
  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.life);
    circle(this.x, this.y, this.size);
  }

  // Moving and fading
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    
    this.ySpeed += 0.2;

    // Fade out
    this.life -= 5;
  }
}

function setup() {
  createCanvas(600, 600);
  background(10, 10, 30); // Dark night sky

  // audio
  getAudioContext().resume();
}

function draw() {
  // Fade effect (trails)
  background(10, 10, 30, 40);

  for (let i = 0; i < sparks.length; i++) {
    sparks[i].update();
    sparks[i].display();

    // Remove if faded out
    if (sparks[i].life <= 0) {
      sparks.splice(i, 1);
      i--;
    }
  }

  fill(255, 200);
  textSize(16);
  text("Click anywhere for fireworks:)", 10, 20);
}

// Firework sound
function playFireworkSound() {
  let osc = new p5.Oscillator("sawtooth");
  osc.amp(0.3);
  osc.freq(100);
  osc.start();

  
  osc.freq(2000, 0.05);

  
  osc.amp(0, 0.3);
  setTimeout(() => osc.stop(), 400);
}

function mousePressed() {
  
  for (let i = 0; i < 25; i++) {
    let s = new Spark(mouseX, mouseY);
    sparks.push(s);
  }

  // Play sound
  playFireworkSound();

}
