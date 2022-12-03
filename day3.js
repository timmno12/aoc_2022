export function partOneCode(input) {
  let splitInput = input.split(/\r?\n/);
  let userScore = 0;

  let outcomeScore = {
    "win": 6,
    "draw": 3,
    "lose": 0
  }
  let attackScore = {
    "rock": 1,
    "paper": 2,
    "scissors": 3
  };

  let addToScore = (attackvariant) => {
    userScore += attackScore[attackvariant];
  }

  //A = Stone; B = Paper; C = Scissors
  //X = Stone; Y = Paper; Z = Scissors


  for (let i = 0; i < splitInput.length; i++) {
    if(splitInput[i][0] === "A"){
      if(splitInput[i][2] === "Y"){
        userScore += outcomeScore.win;
        addToScore("paper")
      } else if(splitInput[i][2] === "X"){
        userScore += outcomeScore.draw;
        addToScore("rock")
      } else if(splitInput[i][2] === "Z"){
        userScore += outcomeScore.lose;
        addToScore("scissors")
      }
    } else if(splitInput[i][0] === "B"){
      if(splitInput[i][2] === 'X'){
        userScore += outcomeScore.lose;
        addToScore("rock")
      } else if(splitInput[i][2] === "Y"){
        userScore += outcomeScore.draw;
        addToScore("paper")
      } else if(splitInput[i][2] === "Z"){
        userScore += outcomeScore.win;
        addToScore("scissors")
      }
    } else if(splitInput[i][0] === "C"){
      if(splitInput[i][2] === 'X'){
        userScore += outcomeScore.win;
        addToScore("rock")
      } else if(splitInput[i][2] === "Y"){
        userScore += outcomeScore.lose;
        addToScore("paper")
      } else if(splitInput[i][2] === "Z"){
        userScore += outcomeScore.draw;
        addToScore("scissors")
      }
    }
  }

  return userScore;
}

export function partTwoCode(input) {
  let splitInput = input.split(/\r?\n/);

  let outcomeScore = {
    "win": 6,
    "draw": 3,
    "lose": 0
  }
  let attackScore = {
    "rock": 1,
    "paper": 2,
    "scissors": 3
  };

  let addToScore = (attackvariant) => {
    userScore += attackScore[attackvariant];
  }

  //A = Stone; B = Paper; C = Scissors
  //X = lose; Y = draw; Z = win

  let userScore = 0;
  for (let i = 0; i < splitInput.length; i++) {
    if(splitInput[i][2] === "X"){
      userScore += outcomeScore.lose;
      if(splitInput[i][0] === "A"){
        addToScore("scissors")
      } else if(splitInput[i][0] === "B"){
        addToScore("rock")
      } else if(splitInput[i][0] === "C"){
        addToScore("paper")
      }
    } else if(splitInput[i][2] === "Y"){
      userScore += outcomeScore.draw;
      if(splitInput[i][0] === "A"){
        addToScore("rock")
      } else if(splitInput[i][0] === "B"){
        addToScore("paper")
      } else if(splitInput[i][0] === "C"){
        addToScore("scissors")
      }
    } else if(splitInput[i][2] === "Z"){
      userScore += outcomeScore.win;
      if(splitInput[i][0] === "A"){
        addToScore("paper")
      } else if(splitInput[i][0] === "B"){
        addToScore("scissors")
      } else if(splitInput[i][0] === "C"){
        addToScore("rock")
      }
    }

    }
  return userScore;
}

export function inputParse(originalInput) {
  const currentInput = originalInput;
  let parsedInput = currentInput;
   /**
   * Add input logic here
   */

  return {
    inputToPrint: currentInput, // *optional - inputToPrint will be printed if available
    parsedInputToPrint: parsedInput, // *optional - parsedInputToPrint will be printed if available
    parsedInput, // input data for partOneCode and partTwoCode
  };
}
