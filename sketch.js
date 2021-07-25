var ship, ship_moving,shipImage,edges;
var sea;
var seaImage;
function preload(){
  seaImage = loadImage("sea.png")
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1500,800);
  
  // creating ship
 
  
  sea=createSprite(200,200,200,400)
  sea.addImage("sea", seaImage)
  sea.velocityX=-15;
  sea.x=sea.width/2;
  //adding scale and position to ship
  ship = createSprite(350,400,30,30)
  ship.addAnimation("ship_moving",shipImage)
  ship.scale = 0.5;

}
edges = createEdgeSprites();

function draw(){
  //set background color 
  background("white");
  
  if(sea.x<0){
    sea.x=sea.width/2
  }

  drawSprites();

}