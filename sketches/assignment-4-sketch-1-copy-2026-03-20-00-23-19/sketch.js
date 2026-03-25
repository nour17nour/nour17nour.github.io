// Sketch 2: Flying Butterflies
// Click to release butterflies that fly around

let butterflies = [];

// Class: Butterfly
class Butterfly {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(30, 50);

    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);

    // Color
    this.r = random(50, 255);
    this.g = random(100, 255);
    this.b = random(150, 255);
  }

  // Drawing the butterfly
  display() {
    fill(this.r, this.g, this.b);
    stroke(0);
    strokeWeight(1);

    // LEFT wing - simple ellipse
    ellipse(this.x - this.size / 3, this.y, this.size * 0.8, this.size * 0.6);

    // RIGHT wing - simple ellipse
    ellipse(this.x + this.size / 3, this.y, this.size * 0.8, this.size * 0.6);

    // Body in center
    fill(50);
    noStroke();
    ellipse(this.x, this.y, 8, this.size * 0.5);
  }

  // Moving around
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Bounce off edges
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(200, 230, 255); // Light blue sky

  for (let i = 0; i < butterflies.length; i++) {
    butterflies[i].update();
    butterflies[i].display();
  }

  fill(0);
  textSize(16);
  text("Click to add butterflies:) Press C to clear", 10, 20);
  text("Butterflies: " + butterflies.length, 10, 40);
}

function mousePressed() {
  let b = new Butterfly(mouseX, mouseY);
  butterflies.push(b);
}

function keyPressed() {
  if (key === "c" || key === "C") {
    butterflies = [];
  }
}
