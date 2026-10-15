function getComputerChoice() {
     let randomNum = Math.floor(Math.random() * 3)
     console.log(randomNum);

     switch (randomNum) {
          case 0 : console.log("Rock");
          break;

          case 1 : console.log("Paper");
          break;

          case 2 : console.log("Scissors");
          break;
     }
}