const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon,cb,c,b,cannonball,bo,b1,a,aa,ab,ac,b4,b5,b6
var ba=[]
// [-20,-40,-60,-80,-100]
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  cb= loadImage("./assets/cannonBase.png")
  c= loadImage("./assets/canon.png")
  b=loadImage("./assets/cannonball.png")
  bo=loadImage("./assets/boat.png")
  ab=loadImage("./assets/boat/boat.png")
  ac=loadJSON("./assets/boat/boat.json")
  b5=loadImage("./assets/boat/broken_boat.png")
  b6=loadJSON("./assets/boat/broken_boat.json")
  
}

function setup() {
a=[]  
aa=[]
for (var i=0;i<ac.frames.length;i++){ 
aa.push(ab.get(ac.frames[i].position.x,ac.frames[i].position.y,ac.frames[i].position.w,ac.frames[i].position.h))  
}
b4=[]
for (var i=0;i<b6.frames.length;i++){ 
b4.push(ab.get(b6.frames[i].position.x,b6.frames[i].position.y,b6.frames[i].position.w,b6.frames[i].position.h))  
}
for (var i=-21;i>-101;i--){
a.push(i)
}
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  b1=[]
  angle=20
  cannon=new Cannon(185,140,200,200,angle)
  var options = {
    isStatic: true
  }
angleMode(DEGREES)  
// cannonball=new Cannonball(cannon.x,cannon.y)
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 140, 310, options);
  World.add(world, tower);
// boat= new Boat (1000,500,200,200)
}

function draw() {
  background(0)
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);
//   Matter.Body.setVelocity(boat.body,{x:-1,y:0})
// boat.display()
  display()
  rect(ground.position.x, ground.position.y, width * 2, 1);
  text(mouseX+","+mouseY,mouseX,mouseY)
  cannon.display()
  // cannonball.display()
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 150, 310);
  pop();
  // rectMode(CENTER)
  // rect(tower.position.x, tower.position.y, 140, 310);
  // if(keyDown("down")){
  // // cannonball.shoot()  
  // }
 for(var i=0;i<ba.length;i++){
show(ba[i],i) 
co(i) 
 }   
}
 function show (ball,i) {
if (ball){
ball.display()  
}
 }
 function keyPressed(){
if (keyCode==40){
var c=new Cannonball(cannon.x,cannon.y)
  ba.push(c)
}  
 }
 function keyReleased(){
if (keyCode==40){if (ba[ba.length-1])
ba[ba.length-1].shoot()  
}  
 }
 function display (){
if (b1.length>0) { 
if  (b1 [b1.length-1]==undefined || b1[b1.length-1].body.position.x<width-300){   
p=random(a)  
boat= new Boat (width+40,500,200,200,p,aa)
b1.push(boat)}
for (var i =0;i<b1.length;i++){
if(b1[i]){
b1[i].display() 
b1[i].sp ()
Matter.Body.setVelocity(b1[i].body,{x:-2,y:0})
}  
}  
}else{boat= new Boat (width,500,200,200,0,aa)
b1.push(boat)
} 

 }
 function co (id){
  for (var i =0;i<b1.length;i++){
 if(ba[id]!=undefined && b1[i]!=undefined) {
cd=Matter.SAT.collides(ba[id].body,b1[i].body) 
 if(cd.collided){
Matter.World.remove(world,ba[id].body)
delete ba[id]
b1[i].d  (i)
 }
 }
  
  
  
  
  
  
  }     
 }