function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Something has gone terribly wrong";
            break;
    }
}

function getHumanChoice() {
    return prompt("Enter your choice");
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();
        switch(humanChoice) {
            case "ROCK":
                switch(computerChoice) {
                    case "ROCK":
                        console.log("Tie! Rock ties with Rock.");
                        break;
                    case "PAPER":
                        console.log("You lose! Rock loses to Paper.");
                        computerScore++;
                        break;
                    case "SCISSORS":
                        console.log("You win! Rock beats Scissors.");
                        humanScore++;
                        break;
                }
                break;
            case "PAPER":
                switch(computerChoice) {
                    case "ROCK":
                        console.log("You win! Paper beats rock.");
                        humanScore++;
                        break;
                    case "PAPER":
                        console.log("Tie! Paper ties with Paper.");
                        break;
                    case "SCISSORS":
                        console.log("You lose! Paper loses to Scissors.");
                        computerScore++;
                        break;
                }
                break;
            case "SCISSORS":
                switch(computerChoice) {
                    case "ROCK":
                        console.log("You lose! Scissors loses to Rock.");
                        computerScore++;
                        break;
                    case "PAPER":
                        console.log("You win! Scissors beats paper.");
                        humanScore++;
                        break;
                    case "SCISSORS":
                        console.log("You tie! Scissors ties with Scissors.");
                        break;
                }
                break;
            default: 
                console.log("User_entry is not valid");
                break;
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        console.log("Current Score. User: " + humanScore + " PC: " + computerScore);
    }
    const message = ""
    console.log((humanScore > computerScore) ? "You win!" : "You lose!");
}

playGame();