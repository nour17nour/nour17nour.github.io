// Sketch 1: Luxury Portrait
// Webcam with dark red and gold color filter

let cam;

function setup() {
  createCanvas(640, 480);

  // Create webcam capture
  cam = createCapture(VIDEO);
  // Hide the default video element
  cam.hide();

  // Pixel manipulation
  pixelDensity(1);
}

function draw() {
  background(0);

  // Load pixels from camera
  cam.loadPixels();
  loadPixels();

  let index = 0;

  // Loop through every pixel
  for (let x = 0; x < cam.width; x++) {
    for (let y = 0; y < cam.height; y++) {
      // Get RGB values from camera
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      // Calculate brightness (average of RGB)
      let bright = (r + g + b) / 3;

      // Red
      pixels[index] = bright * 0.8;

      // Green
      pixels[index + 1] = bright * 0.4;

      // Blue
      pixels[index + 2] = 0;

      // Alpha (fully opaque)
      pixels[index + 3] = 255;

      // Move to next pixel (RGBA = 4 values)
      index += 4;
    }
  }

  cam.updatePixels();
  updatePixels();

  // Gold text
  fill(255, 215, 0);
  noStroke();
  textSize(14);
  text("Luxury Portrait Filter", 10, 20);
}
