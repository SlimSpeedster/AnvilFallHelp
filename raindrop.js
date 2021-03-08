class raindrop{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	

	display(){
		var rainPos=this.body.position;	
		push()
		translate(rainPos.x, rainPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill("blue");
		imageMode(CENTER);
		ellipseMode(CENTER);
//		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 
            var pos = [this.body.position.x, this.body.position.y];
            this.trajectory.push(pos);       
          
    var MaxDrops = 100;
        for(var i=0; i<MaxDrops; i=i+1){

            
 
}
}
}