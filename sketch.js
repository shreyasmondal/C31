const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 793, 480, 15)

  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Division(k, height - divisionHeight/2,10,divisionHeight))
  }  
}

function draw() {
  background("black");
  Engine.update(engine)
  //creating objects
  

  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 75))
  }

  for(var j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j, 175))
  }

  for(var j = 40; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 275))
  }

  for(var j = 15; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j, 375))
  }


  //displaying objects
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display()
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for(var i = 40; i<plinkos.length; i++){
    plinkos[i].display()
  }


  
  ground.display()
}

