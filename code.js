console.log(playGame())

function getComputerChoice() {
    let rnd = Math.random() * 3
    if (rnd < 1)
        return "rock";
    else if (rnd < 2)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    let userInput = "";
    while (userInput.toLowerCase() != "rock" && userInput.toLowerCase() != "paper"
        && userInput.toLowerCase() != "scissors") {
        userInput = prompt("Your choice (enter rock, paper or scissors):")
    }
    return userInput.toLowerCase();
}



function playGame() {
    let computerScore = 0
    let humanScore = 0

    for (i = 0; i < 5; i++)
    {
        console.log(`Round ${i+ 1}/5 CurrentScore Human:${humanScore} Computer:${computerScore}`)
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        let result = playRound(humanChoice, computerChoice)
        if (result == 1)
            humanScore++
        else if (result == 2)
            computerScore++
    }
    console.log(`Final result: Human:${humanScore} Computer:${computerScore}`)

    // returns 1 when human wins, 2 when computer wins, 0 when tie
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log(`Tie! You both chose ${humanChoice.toUpperCase()}`)
            return 0;
        }
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.")
                return 2;
            }
            else if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors.")
                return 1;
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper.")
                return 2;
            }
            else if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock.")
                return 1;
            }
        }
        else if (humanChoice == "scisssors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors.")
                return 2;
            }
            else if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper.")
                return 1;
            }
        }
    }

}