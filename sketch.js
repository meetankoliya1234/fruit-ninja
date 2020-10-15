  var PLAY=1;
  var END=0;;
  var gameState=1;

var fruitGroup,enemyGroup;

  var  enemy ,enemy1,enemy2,fruit1,fruit2,fruit3,fruit4,gameOver1,gameOver2 , knifeSword,sword,background;

var score=0;

 var      alien1Image,alien2Image,fruit1Image,fruit2Image,fruit3Image,fruit4Image,gameOver1Image,gameOver2Image,swordImage;

function preload(){
  
 enemy1Image=loadImage("alien1.png");
 enemy2Image=loadImage("alien2.png");
 fruit1Image=loadImage("fruit1.png");
 fruit2Image=loadImage("fruit2.png");
 fruit3Image=loadImage("fruit3.png");
 fruit4Image=loadImage("fruit4.png");
 gameoverImage=loadImage("gameover.png");
 swordImage=loadImage("sword.png");
  
 knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
 gameoverSound=loadSound("gameover.mp3");
}

function setup(){
  createCanvas(600,600);

 
  fruitGroup=createGroup();
  enemyGroup=createGroup();

  sword=createSprite(40,200,10,10)
  sword.addImage(swordImage);
  sword.scale=0.8;
 
}



function draw(){
background("pink");
  if(gameState===PLAY){
    
      fruits();
      enemies();
  
      sword.x=mouseX; 
      sword.y=mouseY;
     
    
    if(fruitGroup.isTouching(sword)){
       fruitGroup.destroyEach();
      score=score+1; 
      knifeSwooshSound.play();
       }
  else
    {
   
    
    if(enemyGroup.isTouching(sword)){
      
      gameState=END;
  
        fruitGroup.destroyEach();
        enemyGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        enemyGroup.setVelocityXEach(0);
    
   gameoverSound.play();
      
        sword.addImage(gameoverImage);
        sword.x=200;
        sword.y=200;
    
    }
    }
  }
  
    drawSprites();
  
  
  text("score:"+score,500,30);
  

}


function fruits(){
  
if(World.frameCount%80===0){
   f = Math.round(random(1,2));
   fruit=createSprite(400,200,20,20);
   if(f==1)
     {
     fruit.x=400;
     fruit.velocityX=-(7+(score/4));
     }else
       {
         if(f==2){
           fruit.x=0;
           fruit.velocityX=(7+(score/4));
         }
         
       }
 
  fruit.scale=0.2;
  
  var r=Math.round(random(1,4));
  if(r==1){
     fruit.addImage(fruit1Image);    
  }else if(r==2){
     fruit.addImage(fruit2Image);      
  }else if(r==3){
     fruit.addImage(fruit3Image);       
  }else{
     fruit.addImage(fruit4Image);  
  }

  fruit.y=Math.round(random(50,340));
  
  fruit.setLifetime=100;
  fruitGroup.add(fruit);
}
  
 
  
}

function enemies(){
  
 if(World.frameCount%200===0){
    enemy=createSprite(400,200,20,20);
   enemy.addAnimation("we",enemy1Image);
   enemy.y=Math.round(random(20,510));
   enemy.velocityX=-7;
   enemy.setLifetime=100;
   enemyGroup.add(enemy);
}
  
  
}
  




