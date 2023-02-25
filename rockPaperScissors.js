function rockPaperScissors(playerTurn) {

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if (playerTurn === "r" || playerTurn === "rock") {
        playerTurn = rock;
        console.log("\x1b[93mYou choose Rock\x1b[0m");
    } else if (playerTurn === "p" || playerTurn === "paper") {
        playerTurn = paper;
        console.log("\x1b[93mYou choose Paper\x1b[0m");
    } else if (playerTurn === "s" || playerTurn === "scissors") {
        playerTurn = scissors;
        console.log("\x1b[93mYou choose Scissors\x1b[0m");
    } else {
        console.log("\x1b[100mInvalid Input. Try Again...\x1b[0m");
    }
    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerTurn = "";
    switch (computerRandomNumber) {
        case 1:
            computerTurn = rock;
            break;
        case 2:
            computerTurn = paper;
            break;
        case 3:
            computerTurn = scissors;
            break;
    }
    console.log(`\x1b[37mThe computer chooses ${computerTurn}\x1b[0m`);

    if (playerTurn === computerTurn) {
        console.log("\x1b[35mThis game was a draw!\x1b[0m");
    } else if (playerTurn === rock) {
        if (computerTurn === paper) {
            console.log("\x1b[31mYou lose!\x1b[0m");
        } else {
            console.log("\x1b[32mYou win!\x1b[0m");
        }
    } else if (playerTurn === paper) {
        if (computerTurn === scissors) {
            console.log("\x1b[31mYou lose!\x1b[0m");
        } else {
            console.log("\x1b[32mYou win!\x1b[0m");
        }
    } else if (playerTurn === scissors) {
        if (computerTurn === rock) {
            console.log("\x1b[31mYou lose!\x1b[0m");
        } else {
            console.log("\x1b[32mYou win!\x1b[0m");
        }
    }
}
rockPaperScissors("p");
