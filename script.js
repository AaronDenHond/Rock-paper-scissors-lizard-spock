//personal choice
let playerTarget = document.getElementById("playerChoice"); //extra divs to show under buttons instead of console logging
let computerTarget = document.getElementById("computerChoice"); //extra
let messageTarget = document.getElementById("message"); //extra 


document.getElementById("rock").addEventListener("click", function () {
    //let computerChoice = compFunc();
    compare("Rock", compFunc()); //compare("Rock, computerChoice");

});
document.getElementById("paper").addEventListener("click", function () {

    compare("Paper", compFunc());

});
document.getElementById("scissors").addEventListener("click", function () {

    compare("Scissors", compFunc());

});
document.getElementById("lizard").addEventListener("click", function () {

    compare("Lizard", compFunc());

});
document.getElementById("spock").addEventListener("click", function () {

    compare("Spock", compFunc());

});

//reset button

document.getElementById("reset").addEventListener("click", function () {
    let playerChoice = document.getElementById("Rock", "Paper", "Scissors", "Lizards", "Spock");
    reset(playerChoice, compFunc());
    
});


// Computer makes random choice (0-1)

function compFunc() {

    let computerChoice = Math.random();

    if (computerChoice < 0.2) {
        computerChoice = "Rock";
    } else if (computerChoice <= 0.4) {
        computerChoice = "Paper";
    }
    else if (computerChoice <= 0.6) {
        computerChoice = "Scissors";

    } else if (computerChoice <= 0.8) {
        computerChoice = "Lizard";

    }

    else {
        computerChoice = "Spock";
    }
    return computerChoice;
}



// game logic
//switch case rond player choice OF (OR?) computerchoice switch is al helft minder if elses om te checken
let compare = function (playerChoice, computerChoice) {
    playerTarget.innerHTML = "Player picked " + playerChoice;             // extra assigning a value to the new created divs 
    computerTarget.innerHTML = "Computer picked " + computerChoice; // extra


    switch (playerChoice) {
        case computerChoice:

            messageTarget.innerHTML = "ITS A TIE!!!!!!"

            break;

        case "Rock":
            if (computerChoice == "Scissors" || computerChoice == "Lizard") {
                messageTarget.innerHTML = "Player wins!!";

            }
            else {
                messageTarget.innerHTML = "Player loses :(";

            }
            break;


        case "Paper":
            if (computerChoice == "Rock" || computerChoice == "Spock") {
                messageTarget.innerHTML = "Player wins!!";

            }
            else {
                messageTarget.innerHTML = "Player loses :(";
            }
            break;


        case "Scissors":
            if (computerChoice == "Paper" || computerChoice == "Lizard") {
                messageTarget.innerHTML = "Player wins!!";

            }
            else {
                messageTarget.innerHTML = "Player loses :(";
            }
            break;


        case "Lizard":
            if (computerChoice == "Spock" || computerChoice == "Paper") {
                messageTarget.innerHTML = "Player wins!!";

            }
            else {
                messageTarget.innerHTML = "Player loses :(";
            }
            break;


        case "Spock":
            if (computerChoice == "Scissors" || computerChoice == "Rock") {
                messageTarget.innerHTML = "Player wins!!";

            }
            else {
                messageTarget.innerHTML = "Player loses :(";
            }
            break;
        case "Reset":
            messageTarget.innerHTML = "Game is reset";


    }

    /*if (playerChoice === computerChoice) {
        alert("The result is a tie! Try again.");
    }*/
}

//reset
document.getElementById("reset").addEventListener("click", function(){
document.getElementById("playerChoice").innerHTML = " ";
document.getElementById("computerChoice").innerHTML = " ";
document.getElementById("message").innerHTML = " ";

});

//reset button doesnt work