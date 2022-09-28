function playRound(playerSelection, computerSelection) {
    // your code here!
    let pairSelection = {
        firstSelection: playerSelection,
        secondSelection: computerSelection
    }
    let result;
    pairSelection = JSON.parse(JSON.stringify(pairSelection));

    //decide the result based on two decisions
    if (pairSelection.firstSelection == pairSelection.secondSelection) {
        alert("we tied, please play for next round");
        result = "tie"
    } else {
        switch(pairSelection) {
            case {firstSelection:"rock", secondSelection:"scissor"}:
                alert("we won, please play for next round");
                result = "win";
                break;
            case {firstSelection:"paper", secondSelection:"rock"}:
                alert("we won, please play for next round");
                result = "win";
                break;
            case {firstSelection:"scissor", secondSelection:"paper"}:
                alert("we won, please play for next round");
                result = "win";
                break;
            default:
                alert("we lost, please play for next round");
                result = "loss";
        }
    }

    return result;
}

function getComputerChoice() {
    let temp = Math.floor(Math.random() * 3);
    switch(temp) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        default:
            return "scissor";
    }
}
   
function game() {
    let winTimes = 0;
    let result = "loss";

    //test
    // console.log('test:' + ({test:'r'} == {test: "r"}))
    // let test1 = {test:'r'};
    // let test2 = {test:"r"};
    // let test11 = JSON.parse(JSON.stringify([test1]));

    for (i = 0; i < 3; i++) {
        let playerSelection = prompt("What's your sign?").toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == "win") {
            winTimes++;
        }
    }
    if (winTimes >= 2) {
        result = "win"
    }
    alert("Finally we " + result);
    console.log("Finally we " + result);
}
// const playerSelection = prompt("What's your sign?").toLocaleLowerCase();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

const button = document.querySelector('button');
const content = document.querySelector('body');
// const player = document.querySelector('input');



// const playButton = document.createElement('button');
// playButton.textContent = 'Play';


button.addEventListener('click', () => {
    const playButton = document.createElement('button');
    playButton.class = 'new';
    playButton.textContent = 'Play';
    const newButton = document.querySelector('.new');
    newButton.addEventListener('click', () => {
        let player = document.querySelector('input');
        let msg = document.createElement('div');
        msg.textContent = player.value;
        content.appendChild(msg);
        content.removeChild(playButton);
    })

    const choice = document.createElement('input');
    choice.type = 'password';
    choice.name = 'password';

    content.appendChild(choice);
    content.appendChild(playButton);
    content.removeChild(button);
})




