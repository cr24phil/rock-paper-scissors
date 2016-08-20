// Rock, Paper, Scissors Project

// Start by asking the user which option they want to pick.
// Declare a variable called userChoice. Make the variable equal
// to the answer we get by asking the user: 'Do you choose rock,
// paper or scissors?' via a prompt().

var userChoice = prompt('Do you choose rock, paper or scissors?');

// Now we need the computer to make a choice randomly. Declare a
// variable called computerChoice and make it equal to Math.random().

var computerChoice = Math.random();

// We have computerChoice but it now equals a random number between 0 and 1.
// We need to translate this random number into a random choice of rock,
// paper, or scissors by utilizing an if/else if/else statement.

if (computerChoice < 0.33) {
  computerChoice = 'rock';
} else if (computerChoice < 0.66) {
  computerChoice = 'paper';
} else {
  computerChoice = 'scissors';
}

// Now comes the fun part! We need to create a function. It will take two
// parameters (ie. the two choices made) and then return the winning choice.

// Start by declaring a function called compare, that takes two
// parameters: personChoice and robotChoice.

// In a game like this, we must think about all the possible outcomes.
// Inside the function, we are going to write an if/else statement,
// with if/else statements inside of it. 

function compare (personChoice, robotChoice) {

  // Make this game better by adding a secret cheat code.
  // If a user types in 'bomb' as their choice, then make
  // sure they win, no matter what.

  if (personChoice === 'bomb') {
    console.log('Bomb always wins!');
  }
  
  // What if the userChoice equals the computerChoice?
  
  else if (personChoice === robotChoice) {
    console.log('The result is a tie!');
  }

  // What if the userChoice equals 'rocks'?

  else if (personChoice === 'rock') {
    if (robotChoice === 'scissors') {
      console.log('Rock wins!');
    } else if (robotChoice === 'paper') {
      console.log('Paper wins!');
    }
  }

  // What if the userChoice equals 'paper'?

  else if (personChoice === 'paper') {
    if (robotChoice === 'rock') {
      console.log('Paper wins!');
    } else if (robotChoice === 'scissors') {
      console.log('Scissors wins!');
    }
  }
  
  // What if the userChoice equals 'scissors'?

  else if (personChoice === 'scissors') {
    if (robotChoice === 'rock') {
      console.log('Rock wins!');
    } else if (robotChoice === 'paper') {
      console.log('Scissors wins!');
    }
  }
}

// Call the compare function on the last line with userChoice,
// and computerChoice as the parameters.

compare(userChoice, computerChoice);
