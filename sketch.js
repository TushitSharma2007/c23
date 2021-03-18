var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftSide,bottomSide,rightSide;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	var options = {
		isStatic:true
	}

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/8, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(helicopterSprite.x , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	 leftSide = createSprite(325,600,10,100,{restitution:1});
	 leftSide.shapeColor = "red";
	 World.add(world, leftSide);

	 bottomSide = createSprite(370,655,100,10);
	 bottomSide.shapeColor = "red";

	 rightSide = createSprite(415,600,10,100);
	 rightSide.shapeColor = "red";

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine); 
  rectMode(CENTER);
  background(0);
  packageSprite.x= helicopterSprite.position.x 
  packageSprite.y= packageBody.position.y
  packageSprite.collide(leftSide);
  packageSprite.collide(bottomSide);
  packageSprite.collide(rightSide);
  fill(255);
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
  }

  if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x+5;
  }

  if(keyCode === LEFT_ARROW){
	  helicopterSprite.x = helicopterSprite.x-5;
  }
}