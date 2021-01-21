function Circle(x,y,r){
    var options = {
        friction: 0.8,
        restitution: 0.4
    }
    this.body = Bodies.circle(x,y,r, options)
    this.body.friction = 0
    this.r = r
    World.add(world, this.body)

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
            translate(pos.x, pos.y)
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(1);
            stroke(255);
            fill(random(255),random(255),random(255));
            ellipse(0,0,this.r*2)
        pop();
    }
}