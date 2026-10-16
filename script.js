let round = 1;



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
     let userChoice = prompt(`ROUND ${round}\nEnter a choice of "rock", "paper", or "scissors"`);

     return userChoice;
}


function playGame() {

     let humanScore = 0;
     let computerScore = 0;
     

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
          console.log(`ROUND ${round}\nUser Score: ${humanScore}\nComputer Score: ${computerScore}`);
     }

     for (round; round <= 5; round++) {
          let humanSelection = getHumanChoice();
          let computerSelection = getComputerChoice();
          playRound(humanSelection, computerSelection);
          displayResults(humanScore, computerScore, round);
     }

     if(humanScore > computerScore) {
          console.log("CONGRATULATIONS YOU ARE THE WINNER OF THE GAME")
     }
     else if (humanScore < computerScore) {
          console.log("Sorry. Looks like the computer won the game.");
     }
     else {
          console.log("The game ends in a tie. Nobody wins.")
     }
}

playGame();