var a = 50; 
var b = 80;
var c = b - a;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(0,255,140);
  fill(random(155,200),100,100);
  noStroke();
  c = a * random (1,5)
  ellipse(mouseX,mouseY,c,c); 
}