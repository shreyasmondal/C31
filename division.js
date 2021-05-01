class Division{
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h)
        this.w = w
        this.h = h

        World.add(world, this.body)
    }

    display(){
        push()
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
        pop()       

        
    }
}