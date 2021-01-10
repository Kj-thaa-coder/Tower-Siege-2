const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint


var polygon
var rope
var stand
var block
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block11
var block12
var block13
var block14
// var block15

var floor



function preload()
{
	
}

function setup() {
	createCanvas(1440, 740);


    
    
    
    
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon = new Polygon(300,300,50)
	rope = new Rope(polygon.body,{x:300,y:300})
	stand = new Stand(909,500,300,20)
	block = new Block(800,464,50,50)
	block2 = new Block2(854,464,50,50)
	block3 = new Block(908,464,50,50)
	block4 = new Block2(962,464,50,50)
	block5 = new Block(1017,464,50,50)
	block6 = new Block2(827,404,50,50)
	block7 = new Block(882,404,50,50)
	block8 = new Block2(936,404,50,50)
	block9 = new Block(990,404,50,50)
	block10 = new Block(855,334,50,50)
	block11 = new Block2(909,334,50,50)
	block12 = new Block2(880,200,50,50)
	block13 = new Block(963,330,50,50)
	block14 = new Block(963,330,50,50)
	floor = new Stand(720,738,1440,30)
	// block15 = new Block(663,100,50,50)









	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  

polygon.display();
rope.display();
stand.display();
block.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
// block15.display();
// block16.display();
// block17.display();
// block18.display();
// block19.display();
// block20.display();
floor.display();

  
 
}



function mouseDragged(){
	// if(rope.attach(polygon.body)){
		Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
	// }
}
	
	
	function mouseReleased(){
	rope.fly()
	}

	function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(polygon.body, {x:300, y:300})
		rope.attach(polygon.body)
		block = new Block(800,464,50,50)
		block2 = new Block2(854,464,50,50)
		block3 = new Block(908,464,50,50)
		block4 = new Block2(962,464,50,50)
		block5 = new Block(1017,464,50,50)
		block6 = new Block2(827,404,50,50)
		block7 = new Block(882,404,50,50)
		block8 = new Block2(936,404,50,50)
		block9 = new Block(990,404,50,50)
		block10 = new Block(855,334,50,50)
		block11 = new Block2(909,334,50,50)
		block12 = new Block2(880,200,50,50)
		block13 = new Block(963,330,50,50)
		block14 = new Block(963,330,50,50)
		floor = new Stand(720,738,1440,30)
		}
	}



