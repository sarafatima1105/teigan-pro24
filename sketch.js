const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var d1,d2,d3;
var p1;

function setup(){
  createCanvas(1400,700);
  engine = Engine.create();
  world = engine.world;

  var canvas = createCanvas(1200,400);
 
  d1 = new dustbin(1070,380,150,10);
  d2 = new dustbin(1000,360,10,50);
  d3 = new dustbin(1150,360,10,50);

  p1 =  new paper(150,10,50);

  g=new ground(600,390,1200,10);
}

function draw(){
 
  background(0,0,0);
  Engine.update(engine);

  g.display();
  d1.display();
  d2.display();
  d3.display();
  p1.display();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(p1.body,p1.body.position,{x:85,y:-85});
  
  }
}