const player1 = {
    score:0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const player2 = {
    score:0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset')
let winningScoreSelect = document.querySelector('#playto')
let winningScore = 3;
let isGameOver = false;

function updateScores(player,opponent){ //if multiple opponents, pass an array of opponents
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}



player1.button.addEventListener('click',function(){
    updateScores(player1,player2); 
})

player2.button.addEventListener('click',function(){
   updateScores(player2,player1); 
 })

winningScoreSelect.addEventListener('change',function(){

    winningScore = parseInt(this.value)
    reset()
})

resetButton.addEventListener('click',reset)

function reset() {
    player1.score = 0;
    player2.score = 0;
    player1.display.textContent = player1.score;
    player2.display.textContent = player2.score;
    isGameOver = false
    player1.display.classList.remove('has-text-success','has-text-danger')
    player2.display.classList.remove('has-text-success','has-text-danger')
    player1.button.disabled = false
    player2.button.disabled = false
    }