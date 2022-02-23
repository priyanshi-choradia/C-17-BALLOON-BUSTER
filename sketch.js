var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_Balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  var select_balloon =Math.round(random(1,4));
  console.log(select_balloon)
  
  if(frameCount%80==0){
    if (select_balloon==1){
    redballoon();
  } else if(select_balloon==2){
  greenballoon();
  }else if(select_balloon==3){
  blueballoon();
  }  else {
  pinkballoon();
  }   
  }
  
  drawSprites();
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}
function redballoon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10);
 red.addImage(red_balloonImage) ;
  red.velocityX=4;
red.lifetime=150;
red.scale=0.1;
}
function greenballoon(){
  var green=createSprite(0,Math.round(random(20,370)),10,10);
 green.addImage(green_balloonImage) ;
  green.velocityX=4;
green.lifetime=150;
green.scale=0.1;
}
function blueballoon(){
  
  var blue = createSprite(0,Math.round(random(20,370)),10,10);
 blue.addImage(blue_balloonImage) ;
 blue.velocityX=3;
 blue.lifetime=150;
 blue.scale=0.1;
}
function pinkballoon(){
  var pink = createSprite(0,Math.round(random(20,370)),10,10);
 pink.addImage(pink_balloonImage) ;
 pink.velocityX=3;
 pink.lifetime=150;
 pink.scale=1.25;
}
