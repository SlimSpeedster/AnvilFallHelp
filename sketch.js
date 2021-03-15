var rain=[];
var MaxDrops = 120;

var engine, world;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(600, 800)
    
    engine = Matter.Engine.create();
    world = engine.world;

    if(frameCount %20===0){
        for(var i=0; i<MaxDrops; i++){

            rain.push(new raindrop(random(0,600), random(0,100)))

        }

    }
}

function draw(){
    background("black");

    Matter.Engine.update(engine);

    for(var i=0; i<MaxDrops; i++){
        rain[i].displayDrop();
        rain[i].updateY();
    }

}   

/*function raining(){

    if(frameCount %20===0){
        for(var i=0; i<MaxDrops; i++){

            rain.push(new raindrop(random(0,600), random(0,700)))

        }

    }
    
}*/

