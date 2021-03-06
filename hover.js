
// A Class to describe a "doorbell" (really a button)
class Doorbell {
  constructor(x_, y_, r_) {
    // Location and size
    this.x = x_;
    this.y = y_;
    this.r = r_;
  }
  // Is a point inside the doorbell? (used for mouse rollover, etc.)
  contains(mx, my) {
    return dist(mx, my, this.x, this.y) < this.r;
  }

  // Show the doorbell (hardcoded colors, could be improved)
  display(mx, my) {
    if (this.contains(mx, my)) {
      fill(250,100,100);
    } else {
      fill(250,150,100);
    }
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

// A sound file object
let dingdong;

// A doorbell object (that will trigger the sound)
let doorbell;
let canvas;

function setup() {
  canvas = createCanvas(700, 400);
  canvas.parent('sketch2');
  dingdong = loadSound('assets/hoversound.wav');

  // Create a new doorbell
  doorbell = new Doorbell(width / 2, height / 2, 32);
}

function draw() {
  background(255);
  // Show the doorbell
  doorbell.display(mouseX, mouseY);
}

function mouseMoved() {
  // If the user clicks on the doorbell, play the sound!
  if (doorbell.contains(mouseX, mouseY)) {
    dingdong.play();
  }
}
