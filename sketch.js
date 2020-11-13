var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300,250,60,40);
  movingRect = createSprite(630,120,70,35);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  
}

function draw() {
  background("black");  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  console.log(movingRect.x - fixedRect.x);

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
     movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }


  drawSprites();
}