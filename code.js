//console.log(playGame())

let humanChoice = "";
let i = 0; //counts how many games played
let computerScore = 0
let humanScore = 0

function rock_clicked()
{
    humanChoice = "rock";
    playGame();
}

function paper_clicked()
{
    humanChoice = "paper";
    playGame();
}

function scissors_clicked()
{
    humanChoice = "scissors";
    playGame();
}

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
    return humanChoice;
}



function playGame() {
    
    const introDiv = document.getElementById("intro");
    
    if (i == 0)
        {
            const winnerDiv = document.getElementById("winner");
            winnerDiv.textContent = "";
        }

    //for (i = 0; i < 5; i++)
    //{
        introDiv.textContent = `Round ${i+ 1}/5 CurrentScore Human:${humanScore} Computer:${computerScore}`;
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        let result = playRound(humanChoice, computerChoice)
        if (result == 1)
            humanScore++
        else if (result == 2)
            computerScore++
        i++;
    //}
    if (i == 5)
    {
        const winnerDiv = document.getElementById("winner");
        winnerDiv.textContent = `Final result: Human:${humanScore} Computer:${computerScore}`;
        i = 0;
        humanScore = 0;
        computerScore = 0;
    }
    //console.log(`Final result: Human:${humanScore} Computer:${computerScore}`)

    // returns 1 when human wins, 2 when computer wins, 0 when tie
    function playRound(humanChoice, computerChoice) {
        const lastResultDiv = document.getElementById("lastResult");
        if (humanChoice == computerChoice) {
            lastResultDiv.textContent = `Tie! You both chose ${humanChoice.toUpperCase()}`;
            return 0;
        }
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                lastResultDiv.textContent = "You lose! Paper beats Rock.";
                return 2;
            }
            else if (computerChoice == "scissors") {
                lastResultDiv.textContent = "You win! Rock beats Scissors.";
                return 1;
            }
        }
        else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                lastResultDiv.textContent = "You lose! Scissors beats Paper.";
                return 2;
            }
            else if (computerChoice == "rock") {
                lastResultDiv.textContent = "You win! Paper beats Rock.";
                return 1;
            }
        }
        else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                lastResultDiv.textContent = "You lose! Rock beats Scissors.";
                return 2;
            }
            else if (computerChoice == "paper") {
                lastResultDiv.textContent = "You win! Scissors beats Paper.";
                return 1;
            }
        }
    }

}