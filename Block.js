class Block
{
    constructor(x,y,width,height)
    {
        

        
        
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.2,
            density:1.2
    
    }


this.visibillity = 225
this.x=x;
this.y=y;
this.width = width;
this.height = height;
this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)

World.add(world, this.body);



}
display(){

if(this.body.speed <4){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
}else{
World.remove(world, this.body);
push();
this.visibillity = this.visibillity -5;
pop();

}

    


    push()
    
   
    strokeWeight(3);
    fill("palegreen")
   
  
    
    }


}
