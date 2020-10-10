var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 movingRect = createSprite(500, 130, 25, 25);
 fixedRect.shapeColor = "black"
 movingRect.shapeColor = "green"
}

function draw() {
  background('gold'); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x-fixedRect.x < movingRect.width /2+ fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width /2+ fixedRect.width/2
    && movingRect.y-fixedRect.y < movingRect.width /2+ fixedRect.width/2
    && fixedRect.y-movingRect.y < movingRect.width /2+ fixedRect.width/2)
  {
    fixedRect.shapeColor="purple"
    movingRect.shapeColor="violet"
  }
  else{
    movingRect.shapeColor="grey"
    fixedRect.shapeColor="brown"
  }
  drawSprites();
}