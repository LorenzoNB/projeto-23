
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1= 60;

var angle2= 60;

var angle3= 60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Crie os Corpos aqui.
	var plane_options={
		isStatic: true
	}

	var rotator_options={
		isStatic: true 
	}
	
	var blocks_options={
		isStatic: true
	}
	
	var particle_options={
		restitution:0.4,
		friction:0.02
	}


	rotator1= Bodies.rectangle(350,200,150,20,rotator_options);
	World.add(world,rotator1);

	
	rotator2= Bodies.rectangle(350,200,150,20,rotator_options);
	World.add(world,rotator2);
	
	rotator3= Bodies.rectangle(350,200,150,20,rotator_options);
	World.add(world,rotator3);
	
	plane= Bodies.rectangle(400,695,800,10,plane_options);
	World.add(world,plane);
	
	block1= Bodies.rectangle(135,450,150,20,blocks_options);
	World.add(world,block1);
	
	block2= Bodies.rectangle(600,450,150,20,blocks_options);
	World.add(world,block2);
	
	particle1= Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);
	
	particle2= Bodies.circle(290,10,10,particle_options);
	World.add(world,particle2);
	
	particle3= Bodies.circle(310,10,10,particle_options);
	World.add(world,particle3);
	
	
	particle4= Bodies.circle(340,10,10,particle_options);
	World.add(world,particle4);

	particle5= Bodies.circle(370,10,10,particle_options);
	World.add(world,particle5);

	fill("brown");
	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");
  Engine.update(engine);
  //plane//
  rect(plane.position.x,plane.position.y,800,10);
	//block1//
   rect(block1.position.x,block1.position.y,150,20);
   //block2//
   rect(block2.position.x,block2.position.y,150,20);
	//particle1
	ellipse(particle1.position.x,particle1.position.y,10,10);
	//particle2
	ellipse(particle2.position.x,particle2.position.y,10,10);

	//particle3
	ellipse(particle3.position.x,particle3.position.y,10,10);

	//particle4
	ellipse(particle4.position.x,particle4.position.y,10,10);

	//particle5
	ellipse(particle5.position.x,particle5.position.y,10,10);


Matter.Body.rotate(rotator1,angle1)
push();
translate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle1 +=30;

Matter.Body.rotate(rotator2,angle2)
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2 +=9;

Matter.Body.rotate(rotator3,angle3)
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(0,0,150,20);
pop();
angle3 +=15;











}



