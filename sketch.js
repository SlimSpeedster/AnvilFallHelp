var rain=[];
var MaxDrops = 10;
var gameState = "READY";

var engine, world;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(600, 800)
    
    engine = Matter.Engine.create();
    engine.world.gravity.y = 0.5;
    world = engine.world;

    if(frameCount %20===0){
        for(var i=0; i<MaxDrops; i++){

            rain.push(new raindrop(random(0,600), random(0,100),7))

        }

    }
}

function draw(){
    background("white");

    Matter.Engine.update(engine);

if(gameState === "GO"){
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
}


//function keyPressed(){
//    if(keyCode === 32){
//       gameState = "GO";
//    }
//}