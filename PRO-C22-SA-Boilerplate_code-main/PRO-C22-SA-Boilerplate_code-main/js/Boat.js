class Boat{
constructor(x,y,wi,h,bp,ba) {
this.width=wi
this.height=h
this.bp=bp
this.body=Matter.Bodies.rectangle(x,y+10,140,160)
Matter.World.add(world,this.body)
this.aa=ba
this.speed=0.05

} 
display ()  {
    console.log(13,this.aa.length)
    // rectMode(CENTER)
    // rect(this.body.position.x,this.body.position.y+10,140,160)  
    var i 
    i=floor(this.speed%this.aa.length)   
    push()
    translate(this.body.position.x,this.body.position.y-10)  
    imageMode(CENTER)
    image(this.aa[i],0,this.bp,this.width,this.height)  
    pop() 
    
}
d (i){ 
this.aa=b4
this.speed=0.05 
this.width=200
this.height=200 
Matter.Body.setVelocity(this.body,{x:0,y:0})  
setTimeout(()=>{
    Matter.World.remove(world,b1[i].body)
    delete b1[i]  
},10000)    
  
}
sp (){
this.speed+=0.05    
}
}