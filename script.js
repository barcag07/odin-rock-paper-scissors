function getComputerChoice() {
     let randomNum = Math.floor(Math.random() * 3)
     console.log(randomNum);

     switch (randomNum) {
          case 0 : return "Rock";

          case 1 : return "Paper";

          case 2 : return "Scissors";
     }
}

function getHumanChoice() {
     let userChoice = prompt('Enter a choice of "Rock", "Paper", or "Scissors"');

     return userChoice;
}