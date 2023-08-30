var timeEl = document.getElementsByClassName('time')[0];
var highestScoreEl = document.getElementsByClassName('highestScore')[0];
var containerEl = document.getElementsByClassName('container')[0];

var startBtn = document.createElement('button');
var startQuestionEl = document.createElement('p');

containerEl.setAttribute('style', 'display: flex;  flex-direction: column; justify-content: center; align-items: center; font-size:larger; font-weight: bold');

startQuestionEl.textContent = 'Are you ready to take javascript quiz?';
containerEl.appendChild(startQuestionEl);

startBtn.textContent = 'Start';
startBtn.setAttribute('style','background-color: green; margin-top:20px; margin-bottom:20px; padding:20px; font-size:larger;' )
containerEl.appendChild(startBtn);

var secondsLeft = 60;
var timerInterval;

function Timer() {
    if (!timerInterval){
   timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
        timerInterval=null;
    }
  }, 1000);
}
}
startBtn.addEventListener('click', Timer)

