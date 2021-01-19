//Create variables here
var dog,happydDog,database,foodStack,foodS;




function preload(){
  //load images here
  dogimg = loadImage("images/dogImg.png");
  dogimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  var canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  foodStack = database.ref('food');
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.2;
 
}


function draw() {  
background(59, 15, 80);
if(keyWentDown(UP_ARROW)){
  //writeStock(foodS);
  dog.addImage(dogimg2);
}





  drawSprites();
  fill(218,98,133);
  textSize(30);
  stroke(3);
  text("Press Up Arrow Key To Feed Doggo milk",100,100);
  
  
  

}
function readStack(data){
  foodS=data.val();
}
function writeStack(x){
database.ref('/').update({
  food:x
})
}


