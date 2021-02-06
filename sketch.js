// flow and response (s3.2)

let brush;

let rNumber = ["1", "2"];
let thisNumber;

let eraser, brushButton;
let eraserMode = false;
let keepdraw;

function setup() {
  createCanvas(800, 500);
  strokeWeight(4);
  background(255);
  noStroke();
  brush = color(255, 0, 100, 50);

  eraser = createButton(String.fromCodePoint(0x26AA));
  eraser.position(59, 19);
  eraser.mousePressed(drawWhite);
  
  brushButton = createButton(String.fromCodePoint(0x1F58C));
  brushButton.position(19, 19);
  brushButton.mousePressed(drawColor);
}


function mouseDragged() {
  fill(brush);
  ellipse(mouseX, mouseY, 15, 15);
}

function mouseReleased() {
  if (eraserMode) {
    brush = color(255);
  } else if (random(rNumber) == 1) {
    brush = color(255, 0, 100, 50);
  } else {
    brush = color(0, 255, 230, 50);
  }
}

function drawWhite() {
  eraserMode = true;
}
function drawColor(){
  eraserMode = false;
}
