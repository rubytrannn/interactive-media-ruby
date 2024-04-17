let gap = 40;
let cirNum = 10;
let cirSize = 20;
let angle = 50;


function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(degrees);
}

function mouseDragged() {
  fill("pink");
  circle(mouseX, mouseY , 50);
}

function draw(){
  background("black");
  frameRate(1);
  
  for (var k =0; k <25; k++){ 
    
    var r = map(sin(frameCount/2), -2, 2, 100, 200);
    var g = map(k, 0, 50, 80, 200);
    var b = map(cos(frameCount/2), -2, 2, 100, 200);
    
    stroke(r,g,b);
    rotate(frameCount/2);
  

  //main graph
  push();
  translate(width/2,height/2);
  rotate(angle);
  angle = angle +1; 
  noFill();
  strokeWeight(1);
  
  for(let i=0; i<cirNum; i++){
    for (let y=0; y<10; y++){
      rotateX(random(0,360)); 
      arc(cirSize+gap*i*2, cirSize+gap*i/2,cirSize+gap*i, cirSize+gap*i,angle*i,360-i);
    }

  }
  pop(); 
}
}