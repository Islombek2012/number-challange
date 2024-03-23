// O'zgaruvchilar
const  again = document.querySelector('.again');
const  guess = document.querySelector('.guess');
const  check = document.querySelector('.check');
const  message = document.querySelector('.message');
const  scoreEl = document.querySelector('.score');
const  highscoreEl = document.querySelector('.highscore');
const  number = document.querySelector('.number');
guess.focus()
let score = 20;
let highscore = 0;
let gameOver = true;
let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);
      

function playing(){
      guess.focus()
      let inputValue = +guess.value.trim();

      if(guess.value && inputValue > 0 && score > 0 && gameOver) {
      if(inputValue > randomNumber){
            message.textContent = 'To High'
            score--;
            if(score <= 0){
                  gameOver = false;
                  message.textContent = 'Game Over';
                  document.querySelector('body').style.background = 'crimson';
            }
            scoreEl.textContent = score;
      }else if(inputValue < randomNumber){
            message.textContent = 'To Low'
            score--;
            if(score <= 0){
                  gameOver = false;
                  message.textContent = 'Game Over';
                  document.querySelector('body').style.background = 'crimson'
                  let music1 = new Audio('lose.mp3');
                  music1.play()
            }
            scoreEl.textContent = score;
      }else if(inputValue == randomNumber){
            message.textContent = 'You are Winner!!!'
            document.querySelector('body').style.background = 'Green';
            number.textContent = randomNumber;
            gameOver = false;
            let music = new Audio('winner.mp3');
            music.play()
            if(score > highscore){
                  highscore = score;
                  highscoreEl.textContent = highscore;
            }
      }else{
            console.log('error');
      }
      };
      
      guess.value = '';
}
again.addEventListener('click', ()=>{
      randomNumber = Math.floor(Math.random() * 20 + 1);
      console.log(randomNumber);
      score = 20;
      scoreEl.textContent = score; 
      gameOver = true;
      document.querySelector('body').style.background = 'rgba(80, 80, 80, 0.541)';
      message.textContent = 'Start guessing...';
      number.textContent = '?'
});
check.addEventListener('click', playing)

document.addEventListener('keydown', (key)=>{
      if(key.key === 'Enter'){
            playing()
      }
})