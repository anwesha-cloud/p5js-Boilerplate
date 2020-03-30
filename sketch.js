var movingRect,fixedRect,box1,box2;




function setup() {
  createCanvas(400,400);
  movingRect= createSprite(200, 200, 50, 50);
  movingRect.shapeColor="green"
  fixedRect=createSprite(100,200,50,50);
  fixedRect.shapeColor="green"
  box1=createSprite(300,300,50,50)
  box1.shapeColor="green"
  box2=createSprite(250,100,50,50)
  box2.shapeColor="green"
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background("white");  
movingRect.x=mouseX
movingRect.y=mouseY

bounceOff(movingRect,fixedRect)

  drawSprites();
}



