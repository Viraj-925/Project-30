class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visiblty=255

    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle
      if(this.body.speed<3){      
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill("black");
      rect(0,0, this.width, this.height);
      pop()
      }
      else
      {
        World.remove(world,this.body)
        push()
        this.visiblty=this.visiblty-5
        pop()
      }
    }
  }
