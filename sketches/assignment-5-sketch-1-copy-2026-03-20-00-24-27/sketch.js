// Sketch 2: Building Lights
// Webcam converted to gold/red squares (like building windows)

let cam;

// Size of each window
let scale = 16;

function setup() {
  createCanvas(640, 480);

  // Create webcam capture at lower resolution
  cam = createCapture(VIDEO);
  cam.size(width / scale, height / scale);
  cam.hide();

  pixelDensity(1);
  rectMode(CENTER);
}

function draw() {
  // Black night sky
  background(0);

  cam.loadPixels();

  // Center the grid
  translate(scale / 2, scale / 2);

  let index = 0;

  // Loop through low res camera pixels
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      // Get RGB from camera
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      // Calculate brightness
      let bright = (r + g + b) / 3;

      if (bright > 100) {
        // Gold
        fill(255, 215, 0);
      } else if (bright > 50) {
        // Dark red
        fill(139, 0, 0);
      } else {
        // Very dark red
        fill(50, 0, 0);
      }

      // Draw square (size based on brightness)
      let size = scale * (bright / 255);
      rect(x * scale, y * scale, size, size);

      index += 4;
    }
  }

  cam.updatePixels();

  fill(255);
  textSize(12);
  text("Building Lights Effect", 10, 20);
}
