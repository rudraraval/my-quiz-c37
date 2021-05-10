class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
       console.log(gameState)
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()


    //write code to change the background color here
    background("pink");

    //write code to show a heading for showing the result of Quiz
    text("result:", 200,200);


    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      var contestantY= 280;
      fill("blue");
      text("NOTE: result is here", 200,250);
    

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var contestants in allContestants){
      var ans= "2";
      if(ans === allContestants[contestants]. answer){
        fill("green")
        
      }
      else fill("red")
      contestantY = contestantY+30
      text(allContestants[contestants]. name + ":" + allContestants[contestants].answer , 250, contestantY)
    }
  }
  }

}
