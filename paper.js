class paper {
    constructor(x,y){
    var options={
    isStatic:false,
    restitution:0.3,
    density:0.5,
    friction:0
    }
    this.body=Bodies.circle(x,y,70,options)
    this.radius=70
    this.image=loadImage("paper.png");
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(RADIUS)
    fill("white")  
    image(this.image,15,11,this.radius,this.radius)
    pop()  
    }
    }

    