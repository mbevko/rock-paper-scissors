let outcome = document.querySelector(".outcome");
let duel = document.querySelector(".duel");
let input = document.querySelector(".user_choice");
let playerChoice = document.querySelector(".player_choice")
let playerImages = document.querySelectorAll(".player_choice img");
let computerImages = document.querySelectorAll(".computer_choice img");

const getComputerChoice = () => {
   let element = Math.floor(Math.random() * 3);
   switch(element){
     case 0:
     computerImages[0].style.display = "block";
     computerImages[1].style.display = "none";
     computerImages[2].style.display = "none";
     return 'rock';
     break;
     case 1:
     computerImages[1].style.display = "block";
     computerImages[0].style.display = "none";
     computerImages[2].style.display = "none";
     return 'paper'
     break;
     case 2:
     computerImages[2].style.display = "block";
     computerImages[1].style.display = "none";
     computerImages[0].style.display = "none";
     return 'scissors'
     break;
   }
};

const determineWinner = (userChoice, computerChoice) => {
  
  if(userChoice === computerChoice){
    outcome.style.color = "grey"
    return `Tie!`
  };

  if(userChoice === 'rock' && computerChoice === 'paper'){
    outcome.style.color = "red"
    return `You lose!`
  } else if (userChoice === 'rock' && computerChoice === 'scissors'){
    outcome.style.color = "white"
    return `You won!`
  };

  if(userChoice === 'paper' && computerChoice === 'scissors'){
    outcome.style.color = "red"
    return `You lose!`
  } else if ( userChoice === 'paper' && computerChoice === 'rock'){
    outcome.style.color = "white"
    return `You won!`
  };

  if(userChoice === 'scissors' && computerChoice === 'rock'){
    outcome.style.color = "red"
    return `You lose!`
  } else if (userChoice === 'scissors' && computerChoice === 'paper'){
    outcome.style.color = "white"
    return `You won!`
  }
};

function playGame() {
  let userChoice = input.value;
  let computerChoice = getComputerChoice();
  outcome.innerHTML = `${determineWinner(userChoice,computerChoice)}`
  
  if(input.value === 'rock'){
  playerImages[0].style.display = "block";
  playerImages[1].style.display = "none";
  playerImages[2].style.display = "none";
} else if(input.value === 'paper'){
  playerImages[1].style.display = "block";
  playerImages[0].style.display = "none";
  playerImages[2].style.display = "none";
} else if(input.value === 'scissors'){
  playerImages[2].style.display = "block";
  playerImages[0].style.display = "none";
  playerImages[1].style.display = "none";
} 
  
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
};

duel.addEventListener('click', () => {
  playGame();
});
