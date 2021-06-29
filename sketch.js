var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var s1,s2,track
var spaceship,spaceship1,spaceship2

function preload(){
  s1 = loadImage("images/1.png")
  s2 = loadImage("images/2.png")
  track = loadImage("images/3.jpg")

}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
   game.end()
  }
}
