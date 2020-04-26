class Sling{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        lenght:50 
    }
    this.pointB = pointB;
    this.sling= Constraint.create(options);
    World.add(world,this.sling);
}
fly(){
    this.sling.bodyA = null;
}

attach(ballbody){
    //birdbody is a variable that stores the bird's position;
    //console.log("bird's body"+birdbody);
    this.sling.bodyA = ballbody; 
}

display(){

   



    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(3);
    
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
}


}