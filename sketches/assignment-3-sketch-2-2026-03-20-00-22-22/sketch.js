// Filling Heart Grid
// Click to fill hearts


let gridSize = 8; // 8x8 grid of hearts
let cellSize;
let hearts = []; // ARRAY stores if heart is filled 

function setup() {
  createCanvas(600, 650);
  cellSize = 600 / gridSize;

  
  for (let i = 0; i < gridSize; i++) {
    hearts[i] = [];
    for (let j = 0; j < gridSize; j++) {
      hearts[i][j] = false; 
    }
  }
}

function draw() {
  background(255, 192, 203); // Pink background

  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = i * cellSize + cellSize / 2;
      let y = j * cellSize + cellSize / 2;


      drawHeart(x, y, hearts[i][j]);
    }
  }


  fill(255);
  rect(0, 600, 600, 50);
  fill(220, 20, 60);
  textSize(20);
  textAlign(CENTER);
  text("Hearts filled: " + countHearts() + " ", 300, 625);
}


function drawHeart(x, y, filled) {
  push();
  translate(x, y);

  
  if (filled) {
    fill(220, 20, 60); // Red - filled
  } else {
    fill(255, 255, 255); // White - empty
  }

  stroke(220, 20, 60);
  strokeWeight(3);

 
  beginShape();
  vertex(0, 10);
  bezierVertex(-15, -5, -15, -15, 0, -10);
  bezierVertex(15, -15, 15, -5, 0, 10);
  endShape(CLOSE);

  pop();
}


function countHearts() {
  let count = 0;
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (hearts[i][j] === true) {
        count++;
      }
    }
  }
  return count;
}

// Click to fill/unfill hearts
function mouseClicked() {
  if (mouseY < 600) {
    let i = floor(mouseX / cellSize);
    let j = floor(mouseY / cellSize);

    // Toggle heart on/off
    if (i >= 0 && i < gridSize && j >= 0 && j < gridSize) {
      hearts[i][j] = !hearts[i][j];
    }
  }
}

// Press R to reset
function keyPressed() {
  if (key === "r" || key === "R") {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        hearts[i][j] = false;
      }
    }
  }

  // Press F to fill all
  if (key === "f" || key === "F") {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        hearts[i][j] = true;
      }
    }
  }
}
