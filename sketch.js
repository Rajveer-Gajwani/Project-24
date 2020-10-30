
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin_img,dustbin;

function preload(){
	dustbin_img = loadImage("dustbingreen.png");
}


function setup() {
	createCanvas(800,500);


	engine = Engine.create();
	world = engine.world;


	
line1 = new Box(600,400,200,20);
line2 = new Box(500,350,20,100);
line3 = new Box(700,350,20,100);

ball1 = new Ball(150,100);

ground = new Ground(400,410,800,20);



	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  Engine.update(engine);

ground.display();

line1.display();
line2.display();
line3.display();

ball1.display();

keyGoDown();

  drawSprites();
 
}

function keyGoDown() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:-40})
	}
}

