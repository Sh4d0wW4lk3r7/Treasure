class Cannonball
{
constructor(x,y){
 this.r=15
 this.body= Matter.Bodies.circle(x,y,this.r,{isStatic:true}) 
Matter.World.add(world,this.body)
this.t=[]
} 
display(){
push()  
imageMode(CENTER)
image(b,this.body.position.x,this.body.position.y,this.r*2,this.r*2)  
pop()
// circle(this.body.position.x,this.body.position.y,this.r*2)
if(this.body.velocity.x>0 && this.body.position.x>300){
this.t.push([this.body.position.x,this.body.position.y])    
}
for (var i=0; i<this.t.length;i++)
image(b,this.t[i][0],this.t[i][1],5,5)  
}  
shoot (){
    var a,v
    a=cannon.angle -40
    a=a*(3.14/180)
    v=p5.Vector.fromAngle(a)
    v.mult(0.5)
    Matter.Body.setStatic(this.body,false) 
    Matter.Body.setVelocity(this.body,{
    x:v.x*(180/3.14),y:v.y*(180/3.14)
    } )
    } 
} 