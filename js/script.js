
let playerWin = 0;
let computerWin = 0;

function playGame(playerInput) {
    clearMessages();

    const papier = 'papier'
    const kamien = 'kamień'
    const nozyce = 'nożyce'

    function getMoveName(argMoveId) {
        if (argMoveId === 1) {
            return kamien;
        } else if (argMoveId === 2) {
            return papier;
        } else if (argMoveId === 3) {
            return nozyce
        }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove) {
        if (argComputerMove === kamien && argPlayerMove === papier || argComputerMove === papier && argPlayerMove === nozyce || argComputerMove === nozyce && argPlayerMove === kamien) {
            printMessage('Ty wygrywasz!');
            playerWin++;
        } else if (argComputerMove === argPlayerMove) {
            printMessage('Remis!');
        } else if (argPlayerMove === 'nieznany ruch') {
            printMessage('Musisz wybrać numer 1, 2 lub 3');
        } else {
            printMessage('Ty przegrywasz!');
            computerWin++;
        }

    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);

    setScore(playerWin, computerWin);

}



const buttonRock = document.getElementById('play-rock');
buttonRock.addEventListener('click', function () {
    playGame(1);
});

const buttonPaper = document.getElementById('play-paper');
buttonPaper.addEventListener('click', function () {
    playGame(2)
});

const buttonScissors = document.getElementById('play-scissors');
buttonScissors.addEventListener('click', function () {
    playGame(3)
})


function setScore(playerWin, computerWin) {
    document.getElementById('result').textContent = `player ${playerWin} : ${computerWin} computer`;
}


function playRandom(games) {
    for (let i = 0; i < games; i++) {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        playGame(randomNumber)
    }
}

playRandom();
