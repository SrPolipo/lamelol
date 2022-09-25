function setup() {
  createCanvas(0.8*windowWidth, 0.8*windowHeight);
  background(40,42,53);
  textSize(width / 30);
  textAlign(CENTER, CENTER);
  noLoop();
}


class Planet{
  constructor(x,y,vx,vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.move = false;
  }
  new(){
    this.x = (this.x + this.vx)%windowWidth;
    this.y = (this.y + this.vy)%windowHeight;
  }
}




function draw() {
  background(40,42,53);
  if(frameCount === 1){
    fill("white")
    text("Toca em qualquer\nlugar no ecrã", width/2, height/2);
    return;
  }

  for(let i = 0; i<planetarray.length; i++){
    planetarray[i].vx += (xM/(planetarray.length) - planetarray[i].x)/300;
    planetarray[i].vy += (yM/(planetarray.length) - planetarray[i].y)/300;}
  for(let i = 0; i< planetarray.length; i++){
    planetarray[i].new();
    strokeWeight(4);
    stroke(255);
    fill(122,122,122);
    circle((planetarray[i].x + windowWidth)%windowWidth, (planetarray[i].y+windowHeight)%windowHeight, 40);
  }
}


const planetarray = [];
var xM = 0;
var yM = 0;
function mouseClicked() {
  planetarray.push(new Planet(mouseX,mouseY,0,0));
  xM = 0;
  yM = 0;
  for(let i = 0; i<planetarray.length; i++){
    xM+= planetarray[i].x;
    yM+= planetarray[i].y;}
  loop();
  return false;
}
