const papier = 'papier'
const kamien = 'kamień'
const nozyce = 'nożyce'

function getMoveName(argMoveId) {
    if (argMoveId === '1') {
        return kamien;
    } else if (argMoveId === '2') {
        return papier;
    } else if (argMoveId === '3') {
        return nozyce
    } 

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}


function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove === kamien && argPlayerMove === papier || argComputerMove === papier && argPlayerMove === nozyce || argComputerMove === nozyce && argPlayerMove === kamien) {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
    } else if (argPlayerMove === 'nieznany ruch') {
        printMessage('Musisz wybrać numer 1, 2 lub 3');
    } else printMessage('Ty przegrywasz!');
}


let randomNumber = '' + Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

// if (randomNumber === 1) {
//     computerMove = kamien;
// } else if (randomNumber === 2) {
//     computerMove = papier;
// } else computerMove = nozyce;

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

// if (playerInput === '1') {
//     playerMove = kamien;
// } else if (playerInput === '2') {
//     playerMove = papier;
// } else if (playerInput === '3') {
//     playerMove = nozyce;
// };

printMessage('Twój ruch to: ' + playerMove);
displayResult(computerMove, playerMove);


