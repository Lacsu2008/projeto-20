var fundo,imgFundo;
var imgRato1,imgRato2,imgRato3,imgRatoSherlockHolmes,rato;
var imgGato1,imgGatoMovendo,imgGatoFeliz,gato;

function preload() {
    //load the images here
    imgFundo = loadImage("garden.png");
    imgGato1 = loadImage("cat1.png");
    imgGatoMovendo = loadAnimation("cat2.png","cat3.png");
    imgGatoFeliz = loadImage("cat4.png")
    imgRato1 = loadImage("mouse1.png");
    imgRato2 = loadAnimation("mouse2.png","mouse3.png");
    imgRatoSherlockHolmes = loadAnimation("mouse4.png")
    imgFundo = loadImage("garden.png");
   

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    gato = createSprite(870,600,50,50);  
    gato.addAnimation("imgGato" , imgGato1);
    gato.scale = 0.2
    gato.addAnimation("imgGatoFeliz" , imgGatoFeliz);
    gato.addAnimation("imgGatoMovendo" , imgGatoMovendo);

    rato = createSprite(130,600,20,20);
    rato.addAnimation("imgRato" , imgRato1); 
    rato.scale = 0.2 
    rato.addAnimation("imgRato2" , imgRato2);
    rato.addAnimation("imgRatoSherlockHolmes" , imgRatoSherlockHolmes);
   
}

function draw() {
    background(imgFundo);
    //Write condition here to evalute if tom and jerry collide
  if(gato.x - rato.x < (gato.width - rato.width)/2){
    gato.velocityX = 0;
    gato.changeAnimation("imgGatoFeliz");
    gato.x = 300
    gato.scale = 0.2
    
    rato.changeAnimation("imgRatoSherlockHolmes");
  }
   

    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
   rato.changeAnimation("imgRato2");
   rato.frameDelay = 25

   gato.velocityX = -5
   gato.changeAnimation("imgGatoMovendo");
}

}
