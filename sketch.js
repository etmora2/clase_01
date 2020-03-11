var a = 50; 
var c;
function setup() {
  createCanvas (windowWidth,windowHeight);
}

function draw() {
  //background(0,255,140);
  fill(random(155,200),100,100);
  noStroke();
  c = a * random (1,5)
  ellipse(mouseX,mouseY,c,c); 
}
