
class Paper{
    constructor(x, y, r) {
        var options = {
            'restitution':0.6,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.width = r*2;
        this.height = r*2;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        fill("white")
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}