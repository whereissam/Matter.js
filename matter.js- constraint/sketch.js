var Engine = Matter.Engine,
      // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine;
var World;
var particles = [];
var boundaries = [];
var ground

var mConstraint;
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world

  boundaries.push(new Boundary(200, height, width, 50,0))
  
  var pre = null
  for(var x = 200;x < 400;x +=20){
    
    var fixed = false;
    if(!pre){
      fixed = true
    }
    var p = new Particle(x,100,5,fixed)
    particles.push(p);  
    
    if(pre){
       var options = {
        bodyA: p.body,
        bodyB: pre.body,
        length: 20,
        stiffness: 0.4
  }
  var constraint = Constraint.create(options);
  World.add(world, constraint)
    }
    pre = p
  }
  var canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity(); 
  console.log(canvasmouse);
  var options = {
    mouse: canvasmouse
  }
  
  mConstraint = MouseConstraint.create(engine, options)
  World.add(world,mConstraint);
  console.log(mConstraint)
}

function draw() {
  background(51);
  Engine.update(engine); 
  
  for(var i = 0; i<boundaries.length; i++){
    boundaries[i].show()
  }
  for(var i = 0; i<particles.length; i++){
    particles[i].show()
  }
  if(mConstraint.body){
    var pos = mConstraint.body.position;
    var offset = mConstraint.constraint.pointB;
    var m = mConstraint.mouse.position;
    stroke(0,255,0)
    // fill(0,255,0);
    
    line(pos.x + offset.x, pos.y+offset.y, m.x,m.y)
}
}