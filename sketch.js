var backgroundImg;
var ball;
var insiders;
var outsiders;
var playerA,playerB,playerC,playerD,playerE,playerF,playerG;
var gameState=0;
var playerCount;
var game;
var database;
var player;
var playerCount;
var form;
var allPlayers;
var array;
var width;
var height;
var circle1,circle;

function preload(){
backgroundImg = loadImage("/images/backGround.png");
ball = loadImage("/images/ball.png");
insiders = loadImage("/images/insiders.png");
outsiders = loadImage("/images/outsiders.png");  
circle = loadImage("/images/circle.png")
}
function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    console.log("testing");
  }
  function draw(){
    background(backgroundImg);
    if(playerCount===7){
      game.update(1);
    }
    if(gameState===1){
      clear();
      game.play();
    }
  }
  