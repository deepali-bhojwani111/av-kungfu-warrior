// Variables for Player 1
var Player1;
var Player1_win,Player1_win_still;
var Player1_LS_lose_still;
    // Left Side
    var Player1_LS_anim_norm;
    var Player1_LS_anim_move_right,Player1_LS_anim_move_left;
    var Player1_LS_anim_jump,Player1_LS_anim_crouch;
    var Player1_LS_anim_punch,Player1_LS_anim_kick;
    var Player2_LS_block_still;
    // Right Side
    var Player1_RS_anim_norm;
    var Player1_RS_anim_move_right,Player1_RS_anim_move_left;
    var Player1_RS_anim_jump,Player1_RS_anim_crouch;
    var Player1_RS_anim_punch,Player1_RS_anim_kick;
    var Player2_RS_block_still;

// Variables for Player 2
var Player2;
var Player2_win;
var Player2_LS_lose_still;
    // Left Side
    var Player2_LS_anim_norm;
    var Player2_LS_anim_move_right,Player2_LS_anim_move_left;
    var Player2_LS_anim_jump,Player2_LS_anim_crouch;
    var Player2_LS_anim_punch,Player2_LS_anim_kick;
    var Player2_LS_block_still;
    // Right Side
    var Player2_RS_anim_norm;
    var Player2_RS_anim_move_right,Player2_RS_anim_move_left;
    var Player2_RS_anim_jump,Player2_RS_anim_crouch;
    var Player2_RS_anim_punch,Player2_RS_anim_kick;
    var Player2_RS_block_still;

// Buttons for playing in mobile

var Lbtn1,Rbtn1,UPbtn1,DWbtn1;
var UImg1,RImg1,LImg1,DImg1;
var punch1,punchImg1;
var kick1,kickImg1;
var block1,blockImg1;

// Buttons for playing in mobile
var Lbtn2,Rbtn2,UPbtn2,DWbtn2;
var UImg2,RImg2,LImg2,DImg2;
var punch2,punchImg2;
var kick2,kickImg2;
var block2,blockImg2;

// Variable for Ground
var invisibleGround;

// Health
var health1;
var health2;
var healthBar1,healthBlock1;
var healthLevel1;
var healthBar2;
var healthLevel2,healthBlock2;

var bmode1 = 0;
var bmode2 = 0;

// Gamestates
var gameState;
var play;
var start;
var redWin;
var blueWin;

function preload() {

  // Background Image

  BG = loadImage("arena.jpg");

  // Player 1 Images for Left Side

  Player1_LS_anim_norm = loadAnimation("Images/Player1/Left/Norm/0.png","Images/Player1/Left/Norm/1.png",
  "Images/Player1/Left/Norm/2.png","Images/Player1/Left/Norm/3.png","Images/Player1/Left/Norm/4.png",
  "Images/Player1/Left/Norm/5.png","Images/Player1/Left/Norm/6.png","Images/Player1/Left/Norm/7.png",
  "Images/Player1/Left/Norm/8.png","Images/Player1/Left/Norm/9.png");

  Player1_LS_anim_move_right = loadAnimation("Images/Player1/Left/Move_right/0.png",
  "Images/Player1/Left/Move_right/1.png","Images/Player1/Left/Move_right/2.png",
  "Images/Player1/Left/Move_right/3.png","Images/Player1/Left/Move_right/4.png",
  "Images/Player1/Left/Move_right/5.png","Images/Player1/Left/Move_right/6.png",
  "Images/Player1/Left/Move_right/7.png","Images/Player1/Left/Move_right/8.png");

  Player1_LS_anim_move_left = loadAnimation("Images/Player1/Left/Move_left/0.png",
  "Images/Player1/Left/Move_left/1.png","Images/Player1/Left/Move_left/2.png",
  "Images/Player1/Left/Move_left/3.png","Images/Player1/Left/Move_left/4.png",
  "Images/Player1/Left/Move_left/5.png","Images/Player1/Left/Move_left/6.png",
  "Images/Player1/Left/Move_left/7.png","Images/Player1/Left/Move_left/8.png");

  Player1_LS_anim_jump = loadAnimation("Images/Player1/Left/Jump/0.png",
  "Images/Player1/Left/Jump/1.png","Images/Player1/Left/Jump/2.png","Images/Player1/Left/Jump/3.png",
  "Images/Player1/Left/Jump/4.png");

  Player1_LS_anim_punch = loadAnimation("Images/Player1/Left/Punch/0.png","Images/Player1/Left/Punch/1.png",
  "Images/Player1/Left/Punch/2.png","Images/Player1/Left/Punch/3.png","Images/Player1/Left/Punch/4.png");

  Player1_LS_anim_kick = loadAnimation("Images/Player1/Left/Kick/0.png","Images/Player1/Left/Kick/1.png",
  "Images/Player1/Left/Kick/2.png","Images/Player1/Left/Kick/3.png","Images/Player1/Left/Kick/4.png",
  "Images/Player1/Left/Kick/5.png");

  Player1_LS_anim_crouch = loadAnimation("Images/Player1/Left/Crouch/0.png","Images/Player1/Left/Crouch/1.png",
  "Images/Player1/Left/Crouch/2.png");

  Player1_LS_crouch_still = loadAnimation("Images/Player1/Left/Crouch/2.png");

  Player1_LS_block_still = loadAnimation("Images/Block/Player1/Left/2.png");

  Player1_LS_lose_still = loadAnimation("Images/Lose/Player1/Left/8.png");

  // Player 1 Images for Right Side

  Player1_RS_anim_norm = loadAnimation("Images/Player1/Right/Norm/0.png","Images/Player1/Right/Norm/1.png",
  "Images/Player1/Right/Norm/2.png","Images/Player1/Right/Norm/3.png","Images/Player1/Right/Norm/4.png",
  "Images/Player1/Right/Norm/5.png","Images/Player1/Right/Norm/6.png","Images/Player1/Right/Norm/7.png",
  "Images/Player1/Right/Norm/8.png");

  Player1_RS_anim_move_right = loadAnimation("Images/Player1/Right/Move_right/0.png",
  "Images/Player1/Right/Move_right/1.png","Images/Player1/Right/Move_right/2.png",
  "Images/Player1/Right/Move_right/3.png","Images/Player1/Right/Move_right/4.png",
  "Images/Player1/Right/Move_right/5.png","Images/Player1/Right/Move_right/6.png",
  "Images/Player1/Right/Move_right/7.png","Images/Player1/Right/Move_right/8.png");

  Player1_RS_anim_move_left = loadAnimation("Images/Player1/Right/Move_left/0.png",
  "Images/Player1/Right/Move_left/1.png","Images/Player1/Right/Move_left/2.png",
  "Images/Player1/Right/Move_left/2.png","Images/Player1/Right/Move_left/4.png",
  "Images/Player1/Right/Move_left/5.png","Images/Player1/Right/Move_left/6.png",
  "Images/Player1/Right/Move_left/7.png","Images/Player1/Right/Move_left/8.png");

  Player1_RS_anim_jump = loadAnimation("Images/Player1/Right/Jump/0.png",
  "Images/Player1/Right/Jump/1.png","Images/Player1/Right/Jump/2.png","Images/Player1/Right/Jump/3.png",
  "Images/Player1/Right/Jump/4.png");

  Player1_RS_anim_punch = loadAnimation("Images/Player1/Right/Punch/0.png","Images/Player1/Right/Punch/1.png",
  "Images/Player1/Right/Punch/2.png","Images/Player1/Right/Punch/3.png","Images/Player1/Right/Punch/4.png");

  Player1_RS_anim_kick = loadAnimation("Images/Player1/Right/Kick/0.png","Images/Player1/Right/Kick/1.png",
  "Images/Player1/Right/Kick/2.png","Images/Player1/Right/Kick/3.png","Images/Player1/Right/Kick/4.png",
  "Images/Player1/Right/Kick/5.png");

  Player1_RS_anim_crouch = loadAnimation("Images/Player1/Right/Crouch/0.png","Images/Player1/Right/Crouch/1.png",
  "Images/Player1/Right/Crouch/2.png");

  Player1_RS_crouch_still = loadAnimation("Images/Player1/Right/Crouch/2.png");

  Player1_RS_lose_still = loadAnimation("Images/Lose/Player1/Right/8.png");

  Player1_RS_block_still = loadAnimation("Images/Block/Player1/Right/2.png");

  Player1_win = loadAnimation("Images/Win/Player1/0.png","Images/Win/Player1/1.png","Images/Win/Player1/2.png",
  "Images/Win/Player1/3.png","Images/Win/Player1/4.png","Images/Win/Player1/5.png","Images/Win/Player1/6.png",
  "Images/Win/Player1/7.png","Images/Win/Player1/8.png","Images/Win/Player1/9.png");

  Player1_win_still = loadAnimation("Images/Win/Player1/9.png")

// player2 image left side








}
function setup() {
  createCanvas(windowWidth,windowHeight);

  frameRate(50);
  gameState = "play";

  // The Ground for making the player stand
  invisibleGround = createSprite(windowWidth/2,windowHeight-40,windowWidth+50,15);
  invisibleGround.visible = false;

  // Player 1
  Player1 = createSprite(400, windowHeight-40, 50, 50);
  Player1.addAnimation("win1",Player1_win);
  Player1.addAnimation("win1_still",Player1_win_still);
      // Left Side
      Player1.addAnimation("Normal_LS_1",Player1_LS_anim_norm);
      Player1.addAnimation("right_LS_1",Player1_LS_anim_move_right);
      Player1.addAnimation("left_LS_1",Player1_LS_anim_move_left);
      Player1.addAnimation("jump_LS_1",Player1_LS_anim_jump);
      Player1.addAnimation("punch_LS_1",Player1_LS_anim_punch);
      Player1.addAnimation("kick_LS_1",Player1_LS_anim_kick);
      Player1.addAnimation("crouch_LS_1",Player1_LS_anim_crouch);
      Player1.addAnimation("crouch_still_LS_1",Player1_LS_crouch_still);
      Player1.addAnimation("block_LS_still_1",Player1_LS_block_still);
      Player1.addAnimation("lose_LS_still_1",Player1_LS_lose_still);
      // Right Side
      Player1.addAnimation("Normal_RS_1",Player1_RS_anim_norm);
      Player1.addAnimation("right_RS_1",Player1_RS_anim_move_right);
      Player1.addAnimation("left_RS_1",Player1_RS_anim_move_left);
      Player1.addAnimation("jump_RS_1",Player1_RS_anim_jump);
      Player1.addAnimation("punch_RS_1",Player1_RS_anim_punch);
      Player1.addAnimation("kick_RS_1",Player1_RS_anim_kick);
      Player1.addAnimation("crouch_RS_1",Player1_RS_anim_crouch);
      Player1.addAnimation("crouch_still_RS_1",Player1_RS_crouch_still);
      Player1.addAnimation("block_RS_still_1",Player1_RS_block_still);
      Player1.addAnimation("lose_RS_still_1",Player1_RS_lose_still);
  Player1.scale = 2;

  // player2










    // Health

  healthBar1 = createSprite(175,100,300,25);
  healthBar1.shapeColor = "white";


  // buttons for player1
   // Buttons for player 1
   Lbtn1 = createSprite(50,windowHeight-150,50,50);
   Lbtn1.addImage(LImg1);
   Lbtn1.scale = 0.3;
 
   Rbtn1 = createSprite(150,windowHeight-150,50,50);
   Rbtn1.addImage(RImg1);
   Rbtn1.scale = 0.3;
 
   UPbtn1 = createSprite(100,windowHeight-200,50,50);
   UPbtn1.addImage(UImg1);
   UPbtn1.scale = 0.3;
 
   DWbtn1 = createSprite(100,windowHeight-100,50,50);
   DWbtn1.addImage(DImg1);
   DWbtn1.scale = 0.3;
 
   punch1 = createSprite(45,windowHeight-225,50,50);
   punch1.addImage(punchImg1);
 
   kick1 = createSprite(175,windowHeight-75,50,50);
   kick1.addImage(kickImg1);
 
   block1 = createSprite(55,windowHeight-50,50,50);
   block1.addImage(blockImg1);
   block1.scale = 0.3;


}




function draw(){
  drawSprites();
}