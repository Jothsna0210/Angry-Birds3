class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.img1 = loadImage('sprites/sling1.png');
        this.img2 = loadImage('sprites/sling2.png');
        this.img3 = loadImage('sprites/sling3.png');
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(pointA.x<220){
                stroke(51,23,8)
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.img3,pointA.x-20,pointA.y,10,20);
            }
            else{
                stroke(51,23,8)
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.img3,pointA.x+25,pointA.y-10,10,20);
            }
        }
        image(this.img1,230,40);
        image(this.img2,200,40);
    }
    
}