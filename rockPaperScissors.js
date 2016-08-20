var userChoice = prompt('Do you choose rock, paper or scissors?');
var computerChoice = Math.random();

if (computerChoice <= 0.33) {
  computerChoice = 'rock';
} else if (computerChoice >= 0.34 && computerChoice <= 0.66) {
  computerChoice = 'paper';
} else {
  computerChoice = 'scissors';
}

function compare (personChoice, robotChoice) {
  if (personChoice === 'bomb') {
    console.log('Bomb always wins!');
  }
  else if (personChoice === robotChoice) {
    console.log('The result is a tie!');
  }
  else if (personChoice === 'rock') {
  	if (robotChoice === 'scissors') {
    	console.log('Rock wins!');
  	} else if (robotChoice === 'paper') {
    	console.log('Paper wins!');
  	}
  }
	else if (personChoice === 'paper') {
  	if (robotChoice === 'rock') {
    	console.log('Paper wins!');
  	} else if (robotChoice === 'scissors') {
    	console.log('Scissors wins!');
    }
  }
  else if (personChoice === 'scissors') {
  	if (robotChoice === 'rock') {
    	console.log('Rock wins!');
  	} else if (robotChoice === 'paper') {
    	console.log('Scissors wins!');
    }
  }
}

compare(userChoice, computerChoice);
