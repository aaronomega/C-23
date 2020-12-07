var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var targetleft ,targetdown,targetright;
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
	createCanvas(700, 600);
	rectMode(CENTER);
	groundSprite=createSprite(width/2, height-35, width,10,{isStatic:true});
	groundSprite.shapeColor=color(255); 
    
	targetleft=createSprite(350,height-65,5,40,{isStatic:true});
	targetright=createSprite(420,height-65, 5,40,{isStatic:true});
	targetdown=createSprite(385,height-45,70,10,{isStatic:true});
	
	packageSprite=createSprite(width/2, 90, 10,10,{isStatic:true});
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true} );

	engine = Engine.create();
	world = engine.world;
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	 targetleft=Bodies.rectangle(350,height-65,5,40,{isStatic:true});
	 targetright=Bodies.rectangle(420,height-65, 5,40,{isStatic:true});
	 targetdown=Bodies.rectangle(385,height-45,70,10,{isStatic:true});	
	 packageBody = Bodies.circle(width/2 , 210 , 5 , {isStatic:true} );


	 

	 
	 World.add(world, packageBody);
	 World.add(world, helicopterSprite);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
// 
 
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

 packageIMG.x=packageBody.position.x ;
  packageIMG.y=packageBody.position.y;
  drawSprites();

  
	
		

}
function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  helicopterSprite.x=helicopterSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packageBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  
	}
  }
