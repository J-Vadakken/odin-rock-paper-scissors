function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
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
        let ret_msg = "";
        switch(humanChoice) {
            case "ROCK":
                switch(computerChoice) {
                    case "ROCK":
                        ret_msg = "Tie! Rock ties with Rock.";
                        break;
                    case "PAPER":
                        ret_msg = "You lose! Rock loses to Paper.";
                        computerScore++;
                        break;
                    case "SCISSORS":
                        ret_msg = "You win! Rock beats Scissors.";
                        humanScore++;
                        break;
                }
                break;
            case "PAPER":
                switch(computerChoice) {
                    case "ROCK":
                        ret_msg = "You win! Paper beats rock.";
                        humanScore++;
                        break;
                    case "PAPER":
                        ret_msg = "Tie! Paper ties with Paper.";
                        break;
                    case "SCISSORS":
                        ret_msg = "You lose! Paper loses to Scissors.";
                        computerScore++;
                        break;
                }
                break;
            case "SCISSORS":
                switch(computerChoice) {
                    case "ROCK":
                        ret_msg = "You lose! Scissors loses to Rock.";
                        computerScore++;
                        break;
                    case "PAPER":
                        ret_msg = "You win! Scissors beats paper.";
                        humanScore++;
                        break;
                    case "SCISSORS":
                        ret_msg = "You tie! Scissors ties with Scissors.";
                        break;
                }
                break;
            default: 
                ret_msg = "User_entry is not valid";
                break;


        }
    return ret_msg;
    }

    let humanScore = 0;
    let computerScore = 0;

    let rockBtn = document.querySelector("#rock_btn");
    let paperBtn = document.querySelector("#paper_btn");
    let scissorBtn = document.querySelector("#scissor_btn");
    let display = document.querySelector("#results");
    let player_choice = document.createElement("p");
    let computer_choice = document.createElement("p");
    let round_result = document.createElement("p");
    let game_result = document.createElement("p");
    const gameState = {
        player_choice: "",
        comp_choice: "",
        result_msg: ""
    }

    rockBtn.addEventListener("click", () => {
        gameState.player_choice = "ROCK";
        updateDisp();
    });
    paperBtn.addEventListener("click", () => {
        gameState.player_choice = "PAPER";
        updateDisp();
    })
        ;
    scissorBtn.addEventListener("click", () => {
        gameState.player_choice = "SCISSORS";
        updateDisp();
    });

    function updateDisp() {
        if (checkWin()) return;
        gameState.comp_choice = getComputerChoice();
        player_choice.textContent = "Your Choice: " + gameState.player_choice;
        computer_choice.textContent = "Comp Choice: " + gameState.comp_choice;
        round_result.textContent = playRound(gameState.player_choice, gameState.comp_choice);
        game_result.textContent = "Current Score: Player: " + humanScore + ", Comp: " + computerScore;
        if (checkWin()) return;
    }

    function checkWin() {

        if (humanScore == 5) {
            game_result.textContent = "Player Wins!";
            return true;
        }
        if (computerScore == 5) {
            game_result.textContent = "Computer Wins!";
            return true;
        }
        return false;
    }
    

    // player_choice.textContent = text;
    display.appendChild(player_choice);
    display.appendChild(computer_choice);
    display.appendChild(round_result);
    display.appendChild(game_result)

}

playGame();