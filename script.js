let canvas;

// Spring drawing constants for ball
let springHeight = 32,
    maxHeight = 250,
    minHeight = 20,
    move = false;

// Spring simulation constants
let M = 0.5,  // Mass
    K = 0.1,  // Spring constant
    D = 0.85, // Damping
    R = 250;  // Rest position

// Spring simulation variables
let ps = R,   // Position
    vs = 0.0, // Velocity
    as = 0,   // Acceleration
    f = 0;    // Force

function setup() {
  canvas = createCanvas(700, 400);
  canvas.parent('sketch1');
}

function draw() {
  background(255);
  updateSpring();
  drawSpring();
  noStroke();
}

function drawSpring() {
  // Set color and draw ball
  if (move) {
    fill(255,209,220);
  } else {
    fill(255,209,220);
  }
  ellipse(width/2, ps + springHeight,200,200 );
}

function updateSpring() {
  // Update the spring position
  if ( !move ) {
    f = -K * ( ps - R ); // f=-ky
    as = f / M;          // Set the acceleration, f=ma == a=f/m
    vs = D * (vs + as);  // Set the velocity
    ps = ps + vs;        // Updated position
  }
  if (abs(vs) < 0.1) {
    vs = 0.0;
  }

  // Set and constrain the position of ball
  if (move) {
    ps = mouseY;
    ps = constrain(ps, minHeight, maxHeight);
  }
}

function mousePressed() {
    move = true;
}
function mouseReleased() {
  move = false;
}
