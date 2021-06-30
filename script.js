'use strict'

        game();

        // a function where computer selects rock, paper or scissors based on generating random numbers between 1 and 3, 
        // numbers correspond to variables, returns the value

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function chosing() {
            const rock = "rock";
            const paper = "paper";
            const scissors = "scissors";

            let randomNumber = getRandomInt(1, 3);

            switch (randomNumber) {
                case 1 :
                    return rock;
                    break;
                case 2:
                    return paper;
                    break;
                case 3:
                    return scissors;
                    break;
            }
        }    
        // a single round of rock paper scissors (rps)
        function playRound() {
            let playerChoice = prompt("Chose rock, paper or scissors").toLowerCase();
            let computerChoice = chosing();

            const win = `You win, ${playerChoice} beats ${computerChoice}!`;
            const lose = `You lose, ${computerChoice} beats ${playerChoice}!`;
            const tie = `It's a tie: ${playerChoice} vs. ${computerChoice}! `;

            if (playerChoice == 'rock' && computerChoice == 'scissors') {
                return win;    
            } else if (playerChoice == 'rock' && computerChoice == 'rock') {
                return tie;
            } else if (playerChoice == 'rock' && computerChoice == 'paper') {
                return lose;
            } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
                return lose;
            } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
                return win;
            } else if (playerChoice == 'scissors' && computerChoice == 'scissors') {
                return tie;
            } else if (playerChoice == 'paper' && computerChoice == 'rock') {
                return win;
            } else if (playerChoice == "paper" && computerChoice == 'paper') {
                return tie;
            } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
                return lose;
            }
        }
        // plays a game of rps five times
        function game() {
            let playerScore = 0;             
            let computerScore = 0;
            
            for (let i = 0; i < 5; i++) {
                
                let oneRound = playRound();
                
                console.log(oneRound);
                
                if (oneRound.indexOf('win') !== -1) {
                    playerScore++;
                } else if (oneRound.indexOf('lose') !== -1) {
                    computerScore++;
                } 
            }
            
            let finalScore;
            
            if (playerScore > computerScore) {
                finalScore = `Congratulations, you've won! You scored ${playerScore}, and computer scored ${computerScore}!`;
            } else if (playerScore < computerScore) {
                finalScore = `You've lost! You scored ${playerScore}, and computer scored ${computerScore}.`;
            } else if (playerScore == computerScore) {
                finalScore = `The game is tied! You scored ${playerScore}, and computer scored ${computerScore}.`;
            }          
            console.log(finalScore);
        }