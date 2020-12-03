const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
    
  ground1 = new Ground(400,100,800,20)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground1.display();
  drawSprites();
}