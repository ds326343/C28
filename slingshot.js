class slingshot{
constructor(BodyA,pointb){
    var options={
        bodyA:BodyA, 
        pointB:pointb,
        stiffness:0.04,
        length:10
    }
    this.pointB = pointb;
    this.slingshot=Constraint.create(options);
    World.add(world,this.slingshot);
}
fly(){
    this.slingshot.bodyA=null;
}
display(){
if(this.slingshot.bodyA){


var pointA=this.slingshot.bodyA.position 
var pointB=this.pointB
strokeWeight(5)
line(pointA.x,pointA.y,pointB.x,pointB.y,);
}
} }