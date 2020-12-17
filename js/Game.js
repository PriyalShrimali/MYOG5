class Game {
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      
  async start(){
    if(gameState === 0){
      console.log("HELLO");
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      circle1 = createSprite(displayWidth-100,displayHeight-200,width,height);
      circle1.addImage("c",circle);
      playerA = createSprite(350,450,50,50);
      playerA.addImage("p1",outsiders);
      playerB = createSprite(650,600,50,50);
      playerB.addImage("p2",outsiders);
      playerC = createSprite(950,450,50,50);
      playerC.addImage("p3",outsiders);
      playerD = createSprite(475,250,50,50);
      playerD.addImage("p4",outsiders);
      playerE = createSprite(825,250,50,50);
      playerE.addImage("p5",outsiders);
      playerF = createSprite(600,415,50,50);
      playerF.addImage("p6",insiders);
      playerG = createSprite(700,415,50,50);
      playerG.addImage("p7",insiders);
      array = [playerA,playerB,playerC,playerD,playerE,playerF,playerG];
      width = 300;
      height = 500;
    }
}
play(){
  form.hide();

  Player.getPlayerInfo();

  if(allPlayers!==undefined){
    background(backgroundImg);
    var index = 0;
    var x;
    var y;
    for(var plr in allPlayers){
      index = index+1;
      x = allPlayers[plr].x;
      y = allPlayers[plr].y;

      array[index -1].x = x;
      array[index -1].y = y;
    }
  }

  if(frameCount%400===0){
    width = width-50;
    height = height-50;
  }
  
   drawSprites();
}
}