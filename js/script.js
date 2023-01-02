const papier = 'papier'
const kamien = 'kamień'
const nozyce = 'nożyce'

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber === 1) {
    computerMove = kamien;
} else if (randomNumber === 2) {
    computerMove = papier;
} else computerMove = nozyce;

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput === '1') {
    playerMove = kamien;
} else if (playerInput === '2') {
    playerMove = papier;
} else if (playerInput === '3') {
    playerMove = nozyce;
};

printMessage('Twój ruch to: ' + playerMove);

if (computerMove === kamien && playerMove === papier || computerMove === papier && playerMove === nozyce || computerMove === nozyce && playerMove === kamien) {
    printMessage('Ty wygrywasz!');
} else if (computerMove === playerMove) {
    printMessage('Remis!');
} else if (playerMove === 'nieznany ruch') {
    printMessage('Musisz wybrać numer 1, 2 lub 3');
} else printMessage('Ty przegrywasz!');

