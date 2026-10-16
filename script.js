function getComputerChoice() {
     let randomNum = Math.floor(Math.random() * 3)
     console.log(randomNum); //USED FOR TESTING

     switch (randomNum) {
          case 0 : console.log("rock");
          return "rock";

          case 1 : console.log("paper");
          return "paper";

          case 2 : console.log("scissors");
          return "scissors";
     }
}

function getHumanChoice() {
     let userChoice = prompt('Enter a choice of "rock", "paper", or "scissors"');

     return userChoice;
}

function playRound(humanChoice, computerChoice) {
     //USER WINS
     if (humanChoice === "rock" && computerChoice === "scissors" ||
          humanChoice === "paper" && computerChoice === "rock" ||
          humanChoice === "scissors" && computerChoice === "paper") {
               humanScore++;
               console.log("Way to go! You won this round.");
          }
     //COMPUTER WINS
     else if (humanChoice === "rock" && computerChoice === "paper" ||
          humanChoice === "paper" && computerChoice === "scissors" ||
          humanChoice === "scissors" && computerChoice === "rock") {
               computerScore++;
               console.log("Sorry. Computer wins this round.");
          }
     else {
          console.log("It's a tie. No winner this round.");
     }
     
}

function displayResults(humanScore, computerScore) {
     console.log(`User Score: ${humanScore}\nComputer Score: ${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)