'use strict'

const game = () => {
    let pScore = 0;
    let cScore = 0; 

    let playRound = () => {
        const options = document.querySelectorAll('.choices button');
        const playerSelection = document.querySelector('.player-selection');
        const computerSelection = document.querySelector('.computer-selection');

        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach((option) => {
            option.addEventListener('click', function() {
                const randomSelection = Math.floor(Math.random() * computerOptions.length);
                const computerChoice = computerOptions[randomSelection];
                
                // Call compareChoices here
                compareChoices(this.textContent, computerChoice);

                // Function update images
                playerSelection.src = `./images/${this.textContent}1.png`;
                computerSelection.src = `./images/${computerChoice}1.png`;

            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareChoices = (playerChoice, computerChoice) => {
        const info = document.querySelector('.info');

        if (playerChoice === computerChoice) {
            info.textContent = `It's a tie!`;
            return;        
        } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
            info.textContent = `You win!`;
            pScore++;
            updateScore();
            checkWinner();
            return;        
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            info.textContent = `You lose!`;
            cScore++;
            updateScore();
            checkWinner();
            return;
        } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
            info.textContent = `You lose!`;
            cScore++;
            updateScore();
            checkWinner();
            return;
        } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
            info.textContent = `You win!`;
            pScore++;
            updateScore();
            checkWinner();
            return;
        } else if (playerChoice === 'paper' && computerChoice === 'rock') {
            info.textContent = `You win!`;
            pScore++;
            updateScore();
            checkWinner();
            return;
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            info.textContent = `You lose!`;
            cScore++;
            updateScore();
            checkWinner();
            return;
        }
    };

    const checkWinner = () => {
        if (pScore === 5 || cScore === 5) {
            const endGame = confirm(`Game over! You scored ${pScore}, and the computer scored ${cScore}!
            Refresh to play again!`);
            if (endGame) {
                location.reload();
            } else {
                location.reload();
            }
        } 
    };
    
    // Call all the functions
    playRound();
};

game();