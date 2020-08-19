class Ground {
    constructor(x,y,width,height){
       var ground_options = {
           isStatic:true,
       }
       this.bodies = Bodies.rectangle(200,375,400,50,ground_options);
       this.width=400;
       this.height=50;
       World.add(world, this.bodies);
    }
    display () {
       var pos = this.bodies.position;
       rectMode(CENTER);
       fill(56,78,98);
       rect(pos.x,pos.y, this.width, this.height)
    }
}