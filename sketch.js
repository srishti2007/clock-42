var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(600,600); 
    
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    //Translation and rotation 
    translate(300,300)
    rotate(-90)

   
    hr = hour();
    mn = minute();
    sc = second();
    

    //seconds
    scAngle = map(sc, 0, 60, 0, 360);
    stroke(255,100,150);
    noFill();
    strokeWeight(8);
    arc(0,0,400,400,0,scAngle);
    push();
    rotate(scAngle); 
    stroke(255,100,150);
    strokeWeight(7);
    line(0,0,150,0);
    pop()

    //minutes
    mnAngle = map(mn,0,60,0,360);
    stroke(150, 100, 255);
    arc(0,0,450,450,0,mnAngle);
    push();
    rotate(mnAngle);
    stroke(150, 100, 255);
    strokeWeight(7);
    line(0,0,120,0);
    pop()

    //hours
    hrAngle = map(hr % 12,0,12,0,360)
    stroke(150, 255, 100);
    arc(0,0,500,500,0,hrAngle);
    push();
    rotate(hrAngle);
    stroke(150, 255, 100);
    strokeWeight(7);
    line(0,0,100,0);
    pop(); 
    fill("white");
    ellipse(0, 0, 20, 20);  
}