class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
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

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
// static func is called using class name while normal func is called using object name
// .on func checks on databse values and function
// .set func is used to add new vlue to the databse whilw.update is used to update an existing value

  getCarsAtEnd(){
    database.ref('carsAtEnd').on("value",(data)=>{
      this.rank=data.val()
    })
  }
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd:rank
    })
  }
}
