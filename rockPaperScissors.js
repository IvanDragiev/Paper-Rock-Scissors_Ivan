const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

if (playerTurn === "r" || playerTurn === "rock") {
    playerTurn = rock;
} else if (playerTurn === "p" || playerTurn === "paper") {
    playerTurn = paper;
} else if (playerTurn === "s" || playerTurn === "scissors") {
    playerTurn = scissors;
} else {
    console.log("Invalid Input. Try Again...");
}