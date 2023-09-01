var timeEl = document.getElementById('time');
var highestScoreEl = document.getElementById('highestScore');
var containerEl = document.getElementById('container');
var score = 0;
containerEl.setAttribute('style', 'display: flex;  flex-direction: column; justify-content: center; align-items: center; font-size:larger; font-weight: bold');
startScreen = function () {
  startQuestion = document.createElement('p');
  startQuestion.textContent = 'Are you ready to take javascript quiz?';

  startBtn = document.createElement('button');
  startBtn.textContent = 'Start';
  startBtn.setAttribute('style','background-color: green; margin-top:20px; margin-bottom:20px; padding:20px; font-size:larger;' )

startBtn.addEventListener('click', function(){
questionOne();
});

containerEl.appendChild(startQuestion);
containerEl.appendChild(startBtn);
}

function questionOne() {
  firstQuestion = document.createElement('p');
  firstQuestion.textContent = 'A set of statements that performs a task or calculates a value. define what JavaScript element?';

  questionOneAnswerA = document.createElement('button');
  questionOneAnswerA.textContent = 'Function';
  questionOneAnswerB = document.createElement('button');
  questionOneAnswerB.textContent = 'Object';
  questionOneAnswerC = document.createElement('button');
  questionOneAnswerC.textContent = 'Api';
  questionOneAnswerD = document.createElement('button');
  questionOneAnswerD.textContent = 'Variable';
  questionOneAnswerA.addEventListener('click', function(){
    questionTwo();
    if(questionOneAnswerA = true){ 
      score += 3;
    }
  });
  questionOneAnswerB.addEventListener('click', function(){
    questionTwo();
    if(questionOneAnswerB = true){
      secondsLeft = -5;
    }
  });
  questionOneAnswerC.addEventListener('click', function(){
    questionTwo();
    if(questionOneAnswerC = true){
      secondsLeft = -5;
    }

  });
  questionOneAnswerD.addEventListener('click', function(){
    questionTwo();
    if(questionOneAnswerD = true){
      secondsLeft = -5;
    }

  });
  questionOneAnswerC.addEventListener('click', function(){
    questionTwo();
  });
containerEl.appendChild(firstQuestion);
containerEl.appendChild(questionOneAnswerA);
containerEl.appendChild(questionOneAnswerB);
containerEl.appendChild(questionOneAnswerC);
containerEl.appendChild(questionOneAnswerD);
}
function questionTwo() {
  secondQuestion = document.createElement('p');
  secondQuestion.textContent = 'a collection of properties define what JavaScript element?';

  questionTwoAnswerA = document.createElement('button');
  questionTwoAnswerA.textContent = 'Function';
  questionTwoAnswerB = document.createElement('button');
  questionTwoAnswerB.textContent = 'Object';
  questionTwoAnswerC = document.createElement('button');
  questionTwoAnswerC.textContent = 'Api';
  questionTwoAnswerD = document.createElement('button');
  questionTwoAnswerD.textContent = 'Variable';
  questionTwoAnswerA.addEventListener('click', function(){
    questionThree();
    if(questionTwoAnswerC = true){
      secondsLeft = -5;
    }
  });
  questionTwoAnswerB.addEventListener('click', function(){
    questionThree();
    if(questionTwoAnswerA = true){ 
      score += 3;
    }
  });
  questionTwoAnswerC.addEventListener('click', function(){
    questionThree();
    if(questionTwoAnswerC = true){
      secondsLeft = -5;
    }

  });
  questionTwoAnswerD.addEventListener('click', function(){
    questionThree();
    if(questionTwoAnswerD = true){
      secondsLeft = -5;
    }

  });
  questionTwoAnswerC.addEventListener('click', function(){
    questionThree();
  });
containerEl.appendChild(secondQuestion);
containerEl.appendChild(questionTwoAnswerA);
containerEl.appendChild(questionTwoAnswerB);
containerEl.appendChild(questionTwoAnswerC);
containerEl.appendChild(questionTwoAnswerD);
}
function questionThree() {
  thirdQuestion = document.createElement('p');
  thirdQuestion.textContent = ' Application Programming Interface is ?';

  questionThreeAnswerA = document.createElement('button');
  questionThreeAnswerA.textContent = 'Function';
  questionThreeAnswerB = document.createElement('button');
  questionThreeAnswerB.textContent = 'Object';
  questionThreeAnswerC = document.createElement('button');
  questionThreeAnswerC.textContent = 'Api';
  questionThreeAnswerD = document.createElement('button');
  questionThreeAnswerD.textContent = 'Variable';
  questionThreeAnswerA.addEventListener('click', function(){
    questionFour();
    
  });
  questionThreeAnswerB.addEventListener('click', function(){
    questionFour();
    if(questionOneAnswerB = true){
      secondsLeft = -5;
    }
  });
  questionThreeAnswerC.addEventListener('click', function(){
    questionFour();
    if(questionThreeAnswerA = true){ 
      score += 3;
    }
  });
  questionThreeAnswerD.addEventListener('click', function(){
    questionFour();
    if(questionOneAnswerC = true){
      secondsLeft = -5;
    }
  });
containerEl.appendChild(thirdQuestion);
containerEl.appendChild(questionThreeAnswerA);
containerEl.appendChild(questionThreeAnswerB);
containerEl.appendChild(questionThreeAnswerC);
containerEl.appendChild(questionThreeAnswerD);
}
function questionFour() {
  fourthQuestion = document.createElement('p');
  fourthQuestion.textContent = 'Containers for Storing Data define what JavaScript element?';

  questionFourAnswerA = document.createElement('button');
  questionFourAnswerA.textContent = 'Function';
  questionFourAnswerB = document.createElement('button');
  questionFourAnswerB.textContent = 'Object';
  questionFourAnswerC = document.createElement('button');
  questionFourAnswerC.textContent = 'Api';
  questionFourAnswerD = document.createElement('button');
  questionFourAnswerD.textContent = 'Variable';
  questionFourAnswerA.addEventListener('click', function(){
    highestScore();
    if(questionFourAnswerD = true){
      secondsLeft = -5;
    }
  });
  questionFourAnswerB.addEventListener('click', function(){
    highestScore();
    if(questionOneAnswerB = true){
      secondsLeft = -5;
    }
  });
  questionFourAnswerC.addEventListener('click', function(){
    highestScore();
    if(questionOneAnswerB = true){
      secondsLeft = -5;
    }
  });
  questionFourAnswerD.addEventListener('click', function(){
    highestScore();
    if(questionThreeAnswerA = true){ 
      score += 3;
    }
  });
containerEl.appendChild(fourthQuestion);
containerEl.appendChild(questionFourAnswerA);
containerEl.appendChild(questionFourAnswerB);
containerEl.appendChild(questionFourAnswerC);
containerEl.appendChild(questionFourAnswerD);
}
startScreen();

var secondsLeft = 60;
var timerInterval;

function Timer() {
    if (!timerInterval){
   timerInterval = setInterval(function() {

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
        timerInterval=null;
        return;
    }
     secondsLeft--;
    timeEl.textContent = secondsLeft;

  }, 1000);
}
}

startBtn.addEventListener('click', Timer)

