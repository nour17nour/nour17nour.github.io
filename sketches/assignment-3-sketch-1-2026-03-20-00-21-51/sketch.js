// Heart Grid
// Click on the grid to toggle hearts on and off

let cols = 10;
let rows = 10;
let cellSize;

let active = [];       // stores 0 or 1
let size = [];         // stores current heart size
let randomScale = [];  // stores final scale

function setup() {
  createCanvas(500, 500);
  cellSize = width / cols;
  makeGrid();
}

function draw() {
  background(60, 0, 10); // dark red
  drawGrid();
}

function makeGrid() {
  for (let r = 0; r < rows; r++) {
    active[r] = [];
    size[r] = [];
    randomScale[r] = [];

    for (let c = 0; c < cols; c++) {
      active[r][c] = 0;
      size[r][c] = 0;
      randomScale[r][c] = random(0.4, 0.8);
    }
  }
}

function drawGrid() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

      let x = c * cellSize + cellSize / 2;
      let y = r * cellSize + cellSize / 2;

      if (active[r][c] === 1) {

        let targetSize = cellSize * randomScale[r][c];
        size[r][c] = lerp(size[r][c], targetSize, 0.1);

        drawHeart(x, y, size[r][c]);
      }
    }
  }
}

function drawHeart(x, y, s) {
  push();
  translate(x, y);
  fill(255, 100, 150);
  noStroke();

  beginShape();
  vertex(0, s / 2);
  bezierVertex(s / 2, 0, s, s / 2, 0, s);
  bezierVertex(-s, s / 2, -s / 2, 0, 0, s / 2);
  endShape(CLOSE);

  pop();
}

function mousePressed() {
  let c = floor(mouseX / cellSize);
  let r = floor(mouseY / cellSize);

  if (r >= 0 && r < rows && c >= 0 && c < cols) {
    active[r][c] = 1 - active[r][c];
    size[r][c] = 0;
  }
}
