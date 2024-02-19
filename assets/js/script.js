// Get the elements from the html file
var timeEl = document.getElementById("time");
var containerEl = document.getElementById("container");
var scoreContainerEl = document.getElementById("scorecontainer");
var messageEl = document.getElementById("message");
// set the timer to 60 seconds
var secondsLeft = 60;
var timerInterval;
var score = 0;
// get users data from local storage and parse it to an array
var usersData = JSON.parse(localStorage.getItem("users")) || [];
// set the timer that will count down from 60 seconds and update every second if the timer reaches 0 then the game is over
function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
};
// if the user answers correctly then add 5 points to the score and display correct
function correctAnswer() {
    score += 5;
    messageEl.textContent = "Correct!";
};
// if the user answers incorrectly then subtract 10 seconds from the timer and display wrong
function wrongAnswer() {
    secondsLeft -= 10;
    messageEl.textContent = "Wrong!";
};
// start screen that will display the title, instructions, and start button
function startScreen() {
    containerEl.innerHTML = `
    <h3> Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will decrease time by ten seconds! </h3>
    <button id="startButton"> Start Quiz </button>`;
    var startButton = document.getElementById("startButton");
// when the start button is clicked then the timer will start and the first question will be displayed timer and score will be reset
    startButton.addEventListener("click", function() {
        secondsLeft = 60;
        score = 0;
        setTime();
        questionOne();
    });
};
// after the user answers the first question then the second question will be displayed
function questionOne() {
    containerEl.innerHTML = `<h2> A set of statements that performs a task or calculates a value. define what JavaScript element?</h2>
    <button id="answer1"> 1. Function </button>
    <button id="answer2"> 2. Object </button>
    <button id="answer3"> 3. Api </button>
    <button id="answer4"> 4. Variable </button>`;
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    answer1.addEventListener("click", function() {
        correctAnswer();
        questionTwo();
    });
    answer2.addEventListener("click", function() {
        wrongAnswer();
        questionTwo();
    });
    answer3.addEventListener("click", function() {
        wrongAnswer();
        questionTwo();
    });
    answer4.addEventListener("click", function() {
        wrongAnswer();
        questionTwo();
    });
};

function questionTwo() {
    containerEl.innerHTML = `<h2>A collection of properties define what JavaScript element?</h2>
    <button id="answer1"> 1. Function </button>
    <button id="answer2"> 2. Object </button>
    <button id="answer3"> 3. Api </button>
    <button id="answer4"> 4. Variable </button>`;
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    answer1.addEventListener("click", function() {
        wrongAnswer();
        questionThree();
    });
    answer2.addEventListener("click", function() {
        correctAnswer();
        questionThree();
    });
    answer3.addEventListener("click", function() {
        wrongAnswer();
        questionThree();
    });
    answer4.addEventListener("click", function() {
        wrongAnswer();
        questionThree();
    });
};

function questionThree() {
    containerEl.innerHTML = `<h2> Application Programming Interface is?</h2>
    <button id="answer1"> 1. Function </button>
    <button id="answer2"> 2. Object </button>
    <button id="answer3"> 3. Api </button>
    <button id="answer4"> 4. Variable </button>`;
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    answer1.addEventListener("click", function() {
        wrongAnswer();
        questionFour();
    });
    answer2.addEventListener("click", function() {
        wrongAnswer();
        questionFour();
    });
    answer3.addEventListener("click", function() {
        correctAnswer();
        questionFour();
    });
    answer4.addEventListener("click", function() {
        wrongAnswer();
        questionFour();
    });
};
// after the user answers the last question then the game is over
function questionFour() {
    containerEl.innerHTML = `<h2> A container for a value is?</h2>
    <button id="answer1"> 1. Function </button>
    <button id="answer2"> 2. Object </button>
    <button id="answer3"> 3. Api </button>
    <button id="answer4"> 4. Variable </button>`;
    var answer1 = document.getElementById("answer1");
    var answer2 = document.getElementById("answer2");
    var answer3 = document.getElementById("answer3");
    var answer4 = document.getElementById("answer4");
    answer1.addEventListener("click", function() {
        wrongAnswer();
        gameOver();
    });
    answer2.addEventListener("click", function() {
        wrongAnswer();
        gameOver();
    });
    answer3.addEventListener("click", function() {
        wrongAnswer();
        gameOver();
    });
    answer4.addEventListener("click", function() {
        correctAnswer();
        gameOver();
        
    });
};
// when the game is over then the timer will stop and the user will be prompted to enter their initials and the score will be displayed
function gameOver() {
    clearInterval(timerInterval);
    containerEl.innerHTML = `<h2> Game Over! </h2>
    <p> Your score is: ${score} </p>
    <form id="scoreForm">
        <label for="initials"> Enter your initials: </label>
        <input type="text" id="initials" name="initials">
        <button type="submit"> Submit </button>
        <button id="clear"> Do Not Save </button>
    </form>`;
    var scoreForm = document.getElementById("scoreForm");
    var doNotSave = document.getElementById("clear");
    // if the user do not want to save their score then they will be taking to the start screen
    doNotSave.addEventListener("click", function() {
        startScreen();
    });
    scoreForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        var initialsInput = document.getElementById("initials");
        var initials = initialsInput.value;
        // if the user enters their initials then the users data will be stored in local storage
        if (initials !== "") {
            var userData = {
                initials: initials,
                score: score,
                time: secondsLeft
            };
            // the users data will be pushed to the users data array and then the users data will be stored in local storage
            usersData.push(userData);
            localStorage.setItem("users", JSON.stringify(usersData));
            // the page will reload and the high score will be displayed and the start screen will be displayed
            location.reload();
            startScreen();
        }
    });
};
 // the high score will be displayed in order from highest to lowest score and will display the top 10 scores
function highScore() {
    usersData.sort((a, b) => b.score - a.score);
    var displayLimit = Math.min(usersData.length, 10);
    scoreContainerEl.innerHTML = `<h2> High Scores </h2>`;
    for (var i = 0; i < displayLimit; i++) {
        var user = usersData[i];
        var li = document.createElement("li");
        li.textContent = user.initials + " Score " + user.score + " Time Left " + user.time;
        scoreContainerEl.appendChild(li);
    }
    // when the clear button is clicked then the local storage will be cleared and the page will reload
    var clearButton = document.createElement("button");
    clearButton.textContent = "Clear";
    clearButton.setAttribute("id", "clear");
    scoreContainerEl.appendChild(clearButton);
    clearButton.addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    });
}

startScreen();
highScore();