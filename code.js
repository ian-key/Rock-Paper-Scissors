var choices = ['Rock', 'Paper', 'Scissors'];

var userInput = 2;

/* 
var userInput = prompt('Please enter your play, 1: Rock, 2: Paper: 3: Scissors');

while (userInput < 1 && userInput > 3) {
  userInput = prompt('Please enter your play, 1: Rock, 2: Paper: 3: Scissors');
}
*/

var userSelection = choices[userInput - 1]

var computerSelection = choices[Math.floor(Math.random() * (2 - 0 + 1) + 0)]

var compare = function (choice1, choice2) {
  choice1 = choices.indexOf(choice1);
  choice2 = choices.indexOf(choice2);
  if (choice1 == choice2) {
    return "Tie!";
  }
  if (choice1 == choices.length - 1 && choice2 == 0) {
    return "Computer wins!";
  }
  if (choice2 == choices.length - 1 && choice1 == 0) {
    return "You win!";
  }
  if (choice1 > choice2) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

console.log(compare(userSelection,computerSelection))