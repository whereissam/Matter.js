var Engine = Matter.Engine,
      // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var box1;
var World;
var boxes = [];
var circles = [];
var ground;
var boundaries = [];

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
//   Engine.run(engine);
  boundaries.push(new Boundary(100, height, width, 50 , 0.5))
  boundaries.push(new Boundary(300, height/2, width, 50 , -0.3))
  boundaries.push(new Boundary(100, height, width, 50 , -0.3))
//   World.add(world, ground)
  
}
 
function mousePressed(){ // move
  circles.push(new Circle(mouseX, mouseY , random(10,20)))
}

function draw() {
  background(51);
  Engine.update(engine); 
  // update speed so that will not out of control (the boundaty part)
//   for(var i = 0; i<boxes.length; i++){
//     boxes[i].show()
//   }
  for(var i = 0; i<circles.length; i++){
    circles[i].show()
  }
  for(var i = 0; i<boundaries.length; i++){
    boundaries[i].show()
  }
}
