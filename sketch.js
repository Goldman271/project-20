var  gardenImage
var tom, jerry
function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png")
    tomImage=loadImage("images/cat1.png")
    jerryImage=loadImage("images/mouse1.png")
    tomImage1=loadImage("images/cat2.png")
    jerryImage1=loadImage("images/mouse3.png")
    tomImage2=loadImage("images/cat4.png")
    jerryImage2=loadImage("images/mouse2.png")


    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(870, 600)
    tom.addImage(tomImage)
    tom.scale=0.2

    jerry = createSprite(270,600)
    jerry.addImage(jerryImage)
    jerry.scale=0.2
}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide
    background(gardenImage);
    
    if (keyDown(LEFT_ARROW)){
        tom.x=tom.x-10
        tom.addImage(tomImage1)
    }
    if (keyDown(RIGHT_ARROW)){
        jerry.x=jerry.x+10
        jerry.addImage(jerryImage1)
    }
    if (tom.isTouching(jerry)){
       tom.addImage(tomImage2)
       jerry.addImage(jerryImage2)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
