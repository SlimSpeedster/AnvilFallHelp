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
		this.r=r;
        this.image=loadImage("images/anvil.jpg");
		this.body=Matter.Bodies.circle(this.x, this.y, this.r, options)
		Matter.World.add(world, this.body);
	}

	

	
 
        updateY(){
           if(this.body.position.y>height){
            //setTimeout(null, 3);
            Matter.Body.setPosition(this.body,{x:random(0,600), y:random(0,250)})

           }

           
        }

        displayDrop(){
            //push();
            fill("red");
            imageMode(CENTER);
            image(this.image, 0,0,this.r, this.r)
            //pop();
            //ellipseMode(CENTER);
            //ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
        }


    }


