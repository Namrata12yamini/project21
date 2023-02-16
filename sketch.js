var rocketImg, rocketImg;
var enemy1Img, enemy1, enemy2Img, enemy2, enemy3Img, enemy3, enemy4Img, enemy4;
var spaceImg, space, invisibleBlockGroup;
var gameState = "play"
var enemysGroup,invisibleBlockGroup;

function preload(){
 rocketImg = loadImage("rocket.jpg")
 enemy1Img = loadImage ("enemy1.png")
 enemy2Img = loadImage ("enemy2.png")
 enemy3Img= loadImage ("enemy3.png")
 enemy4Img = loadImage ("enemy4.png")
 spaceImg = loadImage ("background.jpg")

}

function setup() {
 createCanvas(600,600)
 space = createSprite(300,300)
 space.addImage("background",spaceImg);
 space.velocityY = 1;

 enemysGroup = new Group();
 invisibleBlockGroup = new Group();
 
 rocket = createSprite(200,200,50,50);
 rocket.scale = 0.1;
 rocket.addImage("rocket.jpg",rocketImg)

 

 
}

function draw() {
 background(255);
 if(space.y > 400) {
    space.y=300
 }
  if (gameState === "play") {

if(keyDown("left_arrow")){
    rocket.x = rocket.x - 3;
}
if(keyDown("right_arrow")){
    rocket.x = rocket.x + 3
}
if(keyDown("space")){
    rocket.velocityY = -10
}
rocket.velocityY = rocket.velocityY+0.8  
spawnEnemys();
 }
 if(enemysGroup.isTouching(rocket)){
  rocket.velocityY = 0;
}
if(enemysGroup.isTouching(rocket) || rocket.y > 600){
  rocket.destroy();
  gameState = "end"
}
 
 drawSprites();
 if (gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over", 230,250)
}
}
function spawnEnemys() {
 if (frameCount % 240 === 0) {
    var enemy1 = createSprite(200,-50);
    enemy1.scale = 0.1
    var enemy2 = createSprite(200,10);
    enemy2.scale = 0.1
    var enemy3 = createSprite(200,-20);
    enemy3.scale = 0.1
    var enemy4 = createSprite(200,40);
    enemy4.scale = 0.1
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = enemy.width;
    invisibleBlock.height = 2;
    // add the random function
    //
    enemy1.addImage(enemy1Img);
    enemy2.addImage(enemy2Img);
    enemy3.addImage(enemy3Img);
    enemy4.addImage(enemy4Img);

    enemy1.velocityY = 1
    enemy2.velocityY = 1
    enemy3.velocityY = 1
    enemy4.velocityY = 1


    enemy1.addImage(enemy1Img);
    enemy2.addImage(enemy2Img);
    enemy3.addImage(enemy3Img);
    enemy4.addImage(enemy4Img);

    enemy1.velocityY = 1;
    enemy2.velocityY = 1;
    enemy3.velocityY = 1;
    enemy4.velocityY = 1;

enemy1.lifetime = 200;
enemy2.lifetime = 200;
enemy3.lifetime = 200;
enemy4.lifetime = 200;



    
}
}
