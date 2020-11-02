//Create variables here
var dog, happyDog;
var dogImg, happyDogImg;
var foodS, foodStock;
var database;

function preload(){
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
	
}

function setup() {
  createCanvas(800, 800);
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  dog = createSprite(400,400,10,10);
  dog.addImage(dogImg);
}


function draw() {  
  background(46,139,87);
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  textSize(20);
  text("Food remainig : "+foodS,400,15);
  text("NOTE:PressUP_ARROW Key To Feed The Dog",10,95);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}


