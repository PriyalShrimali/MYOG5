class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.x = 0;
        this.y = 0;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }

      
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
 
      resetName(){
        var name1 = "players/player1";
        database.ref(name1).set({
          name:""
        })
        var name2 = "players/player2";
        database.ref(name2).set({
          name:""
        })
        var name3 = "players/player3";
        database.ref(name3).set({
          name:""
        })
        var name4 = "players/player4";
        database.ref(name4).set({
          name:""
        })
        var name5 = "players/player5";
        database.ref(name5).set({
          name:""
        })
        var name6 = "players/player6";
        database.ref(name6).set({
          name:""
        })
        var name7 = "players/player7";
        database.ref(name7).set({
          name:""
        })
      }
     
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          x:this.x,
          y:this.y
        });
      }
    
       static getPlayerInfo(){
         var playerInfoRef = database.ref('players');
         playerInfoRef.on("value",(data)=>{
           allPlayers = data.val();
         })
       }
}