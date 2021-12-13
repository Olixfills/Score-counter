// const playerName1 = prompt("Please input Player 1 Name");
// const playerName2 = prompt("Please input Player 2 Name");

// let playerNameUpdate1 = document.getElementById('player-1').textContent = playerName1;
// let playerNameUpdate2 = document.getElementById('player-2').textContent = playerName2;


const buttonLess = document.getElementById('score-less');
const buttonPlus = document.getElementById('score-plus');

let setScore = 1;

function lessScoreLimit(){
    setScore--;
    if(setScore > 0){
    return setScore;
} 
}

function addScoreLimit(){
    setScore++;
    return setScore;
}

function scoreMinus(){
    document.getElementById('score-limit').textContent = lessScoreLimit();
}

function scorePlus(){
    document.getElementById('score-limit').textContent = addScoreLimit();

}


buttonLess.addEventListener('click', scoreMinus);
buttonPlus.addEventListener('click', scorePlus);








const buttonForPlayer1 = document.getElementById('button-1');
const buttonForPlayer2 = document.getElementById('button-2');

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




// console.log(updatePlayerScore2());



//conclusion function