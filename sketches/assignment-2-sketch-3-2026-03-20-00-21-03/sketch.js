function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(15, 5, 5);

  let spacing = 15;

  // Left vertical line
  for (let y = 100; y < 500; y += spacing) {
    let d = dist(mouseX, mouseY, 200, y);
    let size = map(d, 0, 300, 30, 8);
    let redVal = map(d, 0, 300, 255, 100);

    fill(redVal, 20, 10);
    noStroke();
    circle(200, y, size);
  }

  // Diagonal line
  for (let i = 0; i < 27; i++) {
    let x = 200 + i * 7;
    let y = 100 + i * 15;

    let d = dist(mouseX, mouseY, x, y);
    let size = map(d, 0, 300, 30, 8);
    let redVal = map(d, 0, 300, 255, 100);

    fill(redVal, 20, 10);
    circle(x, y, size);
  }

  // Right vertical line
  for (let y = 100; y < 500; y += spacing) {
    let d = dist(mouseX, mouseY, 400, y);
    let size = map(d, 0, 300, 30, 8);
    let redVal = map(d, 0, 300, 255, 100);

    fill(redVal, 20, 10);
    circle(400, y, size);
  }
}
