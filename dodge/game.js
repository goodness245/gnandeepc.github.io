var player;
var enemy;

function setup() {
    createCanvas(250,250);
    player = createSprite(width/2, height, 50, 50);
    enemy = createSprite(width/2, 0, 10, 30);
}

function draw() {
    if (enemy.overlap(player)) {
     gameOver();
  }
    
    background(0, 0, 100);
    
   if (keyDown(RIGHT_ARROW) && player.position.x < width - 25) {
    player.position.x = player.position.x +1;
   }
   
   if (keyDown(LEFT_ARROW) && player.position.x > 25) {
       player.position.x = player.position.x - 1;
   }
   
   enemy.position.y = enemy.position.y + 3;
   
   if (enemy.position.y > height) {
  enemy.position.y = 0;
  enemy.position.x = random(5, width-5);
}

   drawSprites();
}