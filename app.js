//Constants
const submitPlayer1Name = document.getElementById('confirm1');
const submitPlayer2Name = document.getElementById('confirm2');
const inputPlayer1Name = document.getElementById('player1-name');
const inputPlayer2Name = document.getElementById('player2-name');

const buttonLess = document.getElementById('score-less');
const buttonPlus = document.getElementById('score-plus');
const buttonForPlayer1 = document.getElementById('button-1');
const buttonForPlayer2 = document.getElementById('button-2');

const startgameButton = document.getElementById('start-game');


//Get player names
function confirmPlayer1Name(){
    let inputVar = inputPlayer1Name.value;

    let runner = document.getElementById('player-1').textContent = inputVar;

    buttonForPlayer1.classList.remove('no-display');
    inputPlayer1Name.classList.add('no-display');
    submitPlayer1Name.classList.add('no-display');
    inputPlayer1Name.value = "";

    return runner;
}

function confirmPlayer2Name(){
    let inputVar = inputPlayer2Name.value;

    let runner = document.getElementById('player-2').textContent = inputVar;

    buttonForPlayer2.classList.remove('no-display');
    inputPlayer2Name.classList.add('no-display');
    submitPlayer2Name.classList.add('no-display');
    inputPlayer2Name.value = "";

    return runner;
}




submitPlayer1Name.addEventListener('click', confirmPlayer1Name);
submitPlayer2Name.addEventListener('click', confirmPlayer2Name);



//Increase score limit count

let setScore = 1;

function lessScoreLimit() {
    setScore--;
    if (setScore > 0) {
        return setScore;
    }
}

function addScoreLimit() {
    setScore++;
    return setScore;
}

function scoreMinus() {
    document.getElementById('score-limit').textContent = lessScoreLimit();
}

function scorePlus() {
    document.getElementById('score-limit').textContent = addScoreLimit();

}


buttonLess.addEventListener('click', scoreMinus);
buttonPlus.addEventListener('click', scorePlus);




//Score Counter
let v = 0;
let i = 0;

// functions to update counter
function updatePlayerScore1() {
    v++;
    if (v < setScore) {
        return v;

    } else {
        document.getElementById('player1-deck').classList.add('winner-deck');
        document.getElementById('player2-deck').classList.add('loser-deck');
        document.getElementById('congrats1').textContent = 'WINNER!';
        document.getElementById('button-1').classList.add('loser-btn');
        document.getElementById('button-2').classList.add('loser-btn');
    }


}

function updatePlayerScore2() {
    i++;
    if (i < setScore) {
        return i;
    } else {
        document.getElementById('player2-deck').classList.add('winner-deck');
        document.getElementById('player1-deck').classList.add('loser-deck');
        document.getElementById('congrats2').textContent = 'WINNER!';
        document.getElementById('button-1').classList.add('loser-btn')
        document.getElementById('button-2').classList.add('loser-btn');
    }
}

//function to update text in html
function addScorePlayer1() {
    document.getElementById('score-1').textContent = updatePlayerScore1();

}

function addScorePlayer2() {
    document.getElementById('score-2').textContent = updatePlayerScore2();

}


buttonForPlayer1.addEventListener('click', addScorePlayer1);
buttonForPlayer2.addEventListener('click', addScorePlayer2);




//disable buttons untill all names are inputed


    buttonForPlayer1.disabled = true;
    buttonForPlayer2.disabled = true;

function startGame(){
    buttonForPlayer1.disabled = false;
    buttonForPlayer2.disabled = false;
}

startgameButton.addEventListener('click', startGame);