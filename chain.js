class chain{
    constructor(bodya,bodyb){
        var options={
            bodyA:bodya,
            bodyB:bodyb,
            stiffness:1.1,
            length:5
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var posA=this.chain.bodyA.position
        var posB=this.chain.bodyB.position
        strokeWeight(4)
        line(posA.x,posA.y,posB.x,posB.y)
    }
}