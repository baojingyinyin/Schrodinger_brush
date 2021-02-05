// flow and response (s3.2)

let brush;

function setup() {
  createCanvas(600, 400);
  strokeWeight(4);
  background(255);
  noStroke();
  brush = color(255, 0, 100, 50);
}


function mouseDragged() {
   fill(brush);
  ellipse(mouseX, mouseY, 15, 15);

}
function mouseReleased(){
  if(random(2)>1){
    brush = color(255, 0, 100, 50);
  }else{
    brush = color(0, 255, 230, 50);
  }
  
}
