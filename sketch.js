const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var C;
var B1,B1img,B1image,B1group
var OB;

function preload(){
  bg=loadImage("Images/bg.jpg");
  OB=loadImage("Images/bird.png")
  B1image=loadImage("Images/bird2.png")
}

function setup() {
  createCanvas(1600,755);
  engine = Engine.create();
  world = engine.world;
  C=new Cloud(200,height/2,10,10)
  B1group=new Group();
}

function draw() {
  background(bg); 
  C.display();
  BCloud();
 if(C.bounceOff(B1group))
 console.log(Atharva);
  drawSprites();
}

function BCloud(){
  if (frameCount%100===0){
   // imageMode(CENTER)
  //  image(OB,1600,height/2,100,100)
  B1=createSprite(1600,height/2,100,100)
  var r=(Math.round(random(1,2)));
  console.log(r);
  switch(r){
    
  case 1:
      B1.addImage(OB);
      B1.scale=0.07
    break;
    
  case 2:
    B1.addImage(B1image);
    B1.scale=0.3
  break;
}
//B1.addImage(B1img)
B1group.add(B1)
B1.velocityX=-5
  }
}

//function isTouching(){
 // console.log(B1.x);
  //console.log(C.body.position.x);
 // console.log(B1.width);
  //console.log(C.width)
 // if (B1.x-C.body.postion.x<B1.width/2+C.width/2 && C.body.position.x-B1.x<B1.width/2+C.width/2){
  //  B1.destroy();
 // }
//}