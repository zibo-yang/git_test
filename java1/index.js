function playRound(playerSelection, computerSelection) {

    let pairSelection = {
        firstSelection: playerSelection,
        secondSelection: computerSelection
    }
    let result;

    //bad issue: JSON naturally convert double quote to single quote, which makes
    //the pattern matching failure latter(wait to be solved latter)
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
   
function game(round, player) {
    let winTimes = 0;
    let result = "loss";

    for (i = 0; i < round; i++) {
        let playerSelection = player.value.toLocaleLowerCase();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == "win") {
            winTimes++;
        }
    }
    if (winTimes * 2 >= round) {
        result = "win"
    }
    // alert("Finally we " + result);
    // console.log("Finally we " + result);
    return "Result: finally we " + result;
}


const button = document.querySelector('button');
const content = document.querySelector('body');

button.addEventListener('click', () => {
    //create second button
    const playButton = document.createElement('button');
    playButton.className = 'new';
    playButton.textContent = 'Play';

    //create input box
    const choice = document.createElement('input');
    choice.type = 'password';
    choice.name = 'password';

    //update webpage
    content.appendChild(choice);
    content.appendChild(playButton);
    content.removeChild(button);

    //add eventlistener for second button 
    const newButton = document.querySelector('.new');
    newButton.addEventListener('click', () => {
        //create div to show your result
        const player = document.querySelector('input');
        const msg = document.createElement('div');

        //assign game result to msg
        msg.textContent = game(1, player);
        
        //update webpage
        content.appendChild(msg);
        content.removeChild(playButton);
        content.removeChild(player);
    })
})




