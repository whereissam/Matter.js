function Box(x,y,w,h){
    var options = {
        friction: 0.8,
        restitution: 0.4
    }
    this.body = Bodies.rectangle(x,y,w,h, options)
    this.body.friction = 0
    this.w = w
    this.h = h
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
            rect(0,0,this.w, this.h)
        pop();
    }
}