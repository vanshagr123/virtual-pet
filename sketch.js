//Create variables here
var dog ,happydog ,foodS,foodStock,database;
function preload()
{dogImg=loadImage("images/dogImg.png")
HdogImg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  
    database=firebase.database()
    dog = createSprite(500,500,100,100);

    dog.addImage(dogImg)
    dog.scale=0.2
    foodStock=database.ref('Food')
foodStock.on("value",readstock)
}


function draw() {  
  background(46,137,86)

textSize(25)
fill ("white")
  stroke("black")
  strokeWeight(3)
  text("food remaining: "+foodS,170,200)

textSize(25)
fill ("white")
  stroke("black")
  strokeWeight(3)
text("NOTE:press UP_ARROW to feed dargo milk",200,50) 
  
if(keyWentDown(UP_ARROW)){
  writestock(foodS)
  dog.addImage(HdogImg)
}
  drawSprites();
  //add styles here

}
function readstock(data){
  foodS=data.val()   
 
 }
 
 
 
 
 function writestock(x){
  if(x<=0){
    x=0
  }   
  else{
    x=x-1
  }
  database.ref('/').update({
     Food:x
 })
 }
 



