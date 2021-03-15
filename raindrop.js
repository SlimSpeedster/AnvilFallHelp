class raindrop{
	constructor(x,y,r)
	{
		var options={
            isStatic: false,
			restitution :0.1,
            friction :0.001
			}
		this.x=x;
		this.y=y;
		this.r=7;
		this.body=Matter.Bodies.circle(this.x, this.y, this.r, options)
		Matter.World.add(world, this.body);
	}

	

	
 
        updateY(){
           if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,600), y:random(0,600)})

           }

           
        }

        displayDrop(){
            fill("blue");
            ellipseMode(CENTER);
            ellipse(this.body.position.x, this.body.position.y, this.r, this.r);


        }


    }


