// Create a version of the Beat That dice game, where players create the largest number they can by concatenating random dice roll digits.
/// Requirements:
/// 1. There are 2 players and players take turns.
/// 2. When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
/// 3. Player picks the order of the dice they want. Like 36 or 63.
/// 4. After both players have rolled and chosen the dice order, the player with the higher combined number wins.

// Create a helper function for dice roll
var diceRoll = function (input) {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var randomNum = randomInteger + 1;
  return randomNum;
};

// Create a helper function for the game play. Think about how to do it in a single player mode first.

// Create a helper function for Rule number 2. When player click Submit, game rolls 2 dice and returns the results of the dice rolls.
var firstRoll = "";
var secondRoll = "";

var rollTwoDices = function (input) {
  firstRoll = diceRoll();
  secondRoll = diceRoll();
  var myOutputValue = `First dice: ${firstRoll} and Second dice: ${secondRoll} <br><br> Choose the order of the dice by entering '1' or '2'`;
  return myOutputValue;
};

// Create a helper function for Rule number 3. Create a function to concatenate the two numbers in the order chosen by the user
// Input = 1 or 2

var chooseDiceOrder = function (input) {
  if (input == 1) {
    var biggestNum = "" + firstRoll + secondRoll;
    var myOutputValue = `You chose Dice 1 first. Your number is ${biggestNum}. <br><br> Click 'Submit' to roll again.`;
    return myOutputValue;
  }

  if (input == 2) {
    var biggestNum = "" + secondRoll + firstRoll;
    var myOutputValue = `You chose Dice 2 first. Your number is ${biggestNum}.<br><br> Click 'Submit' to roll again.`;
    return myOutputValue;
  }
};

var currentGameMode = "roll 2 dices";

var main = function (input) {
  var modeResult;

  if (currentGameMode == "roll 2 dices") {
    if (input != "") {
      modeResult = "Click the 'Submit' button to roll dice";
    } else {
      currentGameMode = "choose order of 2 dices";
      modeResult = rollTwoDices(input);
    }
  } else if (currentGameMode == "choose order of 2 dices") {
    if (!(input == 1 || input == 2)) {
      modeResult = `Invalid input. <br><br> First dice: ${firstRoll} and Second dice: ${secondRoll} <br><br> Choose the order of the dice by entering '1' or '2'`;
    } else {
      modeResult = chooseDiceOrder(input);
      currentGameMode = "roll 2 dices";
    }
  }
  return modeResult;
};
