class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }
  display(){
if(keyDown("right") && this.angle<70){
  
this.angle+=1  
}    
if(keyDown("left")&& this.angle>-30){
  this.angle-=1  
  }    
push()   
 imageMode(CENTER) 
translate(this.x,this.y) 
 rotate(this.angle)
 image(c,0,0,this.width,this.height)  
//  rectMode(CENTER)
//  rect(0,0,this.width,this.height) 
 pop()
 push()
 imageMode(CENTER)
 image(cb,165,145,250,150) 
 pop()
 
 
   
  }

}
