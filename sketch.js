function setup() {
  createCanvas(windowWidth,windowHeight);
  rect1= createSprite(300, 200, 50, 50);
  rect2= createSprite(450, 200, 100, 100);
 rect1.shapeColor="red"
 rect2.shapeColor= " blue"
 rect1.velocityX=3
 
 

}

function draw() {
  background(255,255,255);  
 //rect1.x=mouseX
 //rect1.y=mouseY
 //console.log(rect1.x-rect2.x)
 if(touch( rect1, rect2)){
 rect1.shapeColor="green"  
 rect1.x=300
 }else{
   rect1.shapeColor="red"
 }
 
  drawSprites();
}


