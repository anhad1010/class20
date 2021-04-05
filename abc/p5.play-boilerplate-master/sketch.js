var movingR
var fixedR

function setup() {
  createCanvas(800,400);
  movingR=createSprite(400, 200, 50, 50);
movingR.shapeColor="yellow";
fixedR=createSprite(500,150,50,50);
fixedR.shapeColor="cyan";

}

function draw() {
  background(255,255,255);  
  movingR.x=mouseX;
  movingR.y=mouseY;

  if(movingR.x-fixedR.x<movingR.width/2+fixedR.width/2
    &&fixedR.x-movingR.x<movingR.width/2+fixedR.width/2
    &&movingR.x-fixedR.x<movingR.height/2+fixedR.height/2
    &&fixedR.x-movingR.x<movingR.height/2+fixedR.height/2){
    fixedR.shapeColor="red"
  }
  else
  {
    fixedR.shapeColor="cyan";
  }
  drawSprites();

}