var NUM_CIRCLES = 12;
var circleDiameter;

function setup() { 
    createCanvas(480, 600);
    circleDiameter = width/NUM_CIRCLES;
}
function draw() {
    var y = 0;
    while (y <= height) {
        
    var x = 0;
    while(x <= width) {
        ellipse(x, 0, circleDiameter, circleDiameter);
        x = x + circleDiameter;
    }
    
    y = y + circleDiameter;
    }
}
    ellipse(0, height/2, circleDiameter, circleDiameter);
    ellipse(circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(2*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(3*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(4*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(5*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(6*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(7*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(8*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(9*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(10*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(11*circleDiameter, height/2, circleDiameter, circleDiameter);
    ellipse(12*circleDiameter, height/2, circleDiameter, circleDiameter);
