const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else if (userInput === 'bomb') {  // secret cheat code
        return userInput;
    } else {
        console.log('Error: Please enter a valid choice');
    }
}

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins';
        } else {
            return 'User wins';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins';
        } else {
            return 'User wins';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins';
        } else {
            return 'User wins';
        }
    } else if (userChoice === 'bomb') {
        return 'User wins';
    }
}

console.log(determineWinner('rock', 'rock'));
console.log(determineWinner('rock', 'paper'));
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('scissors', 'scissors'));
console.log(determineWinner('scissors', 'rock'));
console.log(determineWinner('scissors', 'paper'));

const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log('User choice: ' + userChoice);
    console.log('Computer choice: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));

    userChoice = getUserChoice('bomb');
    computerChoice = getComputerChoice();
    console.log('User choice: ' + userChoice);
    console.log('Computer choice: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
