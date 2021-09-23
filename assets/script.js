//delcaring variables
var nextQuestionIndex=0;
var timerCount= 75;
var timer;
var startButton = document.getElementById('startBtn');
var submitButton = document.getElementById('submit');
startButton.addEventListener('click', startQuiz);
var choicesEl = document.getElementById('choices')
var questionsEl = document.getElementById('questionsContainer')
var timerEl = document.getElementById('timer')
var intitialsEl = document.getElementById('initials')
var scoreEl= document.getElementById("score");
var scoreboardEL = document.getElementById('scoreboard');
var returnButtonEl = document.getElementById('return');
var clearButtonEl = document.getElementById('clear');
//Questions variables
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
        title: "Inside which HTML element do we put the JavaScript",
        choices: ["<script>", "<scripting>", "<js>","<javascript>"],
        answer: "<script>"
    },

    {
        title: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello Word')", "alertBox('Hello World')", "msg('Hello World')", "alert('Hello World')"],
        answer: "alert('Hello World')"
    },

    {
        title: "Which of these is Not a flex direction property?",
        choices: ["row", "column", "wrap", "column-reverse"],
        answer: "wrap"
    }

  ];
//function to start the quiz
function startQuiz(){
    //console.log("You clicked the button!")
    var startContainer = document.getElementById('startContainer');
    startContainer.setAttribute("class", "start hide");
//unhidding questions
    questionsEl.setAttribute("class", "")
// sets timer to start couting down
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if(timerCount < 1){
            console.log(timer)
            endQuiz();
            clearInterval(timer);
        return;
        }
    },1000);

    

    nextQuestion();
}


  
// function to start next question
function nextQuestion(){
   var currentQuestion = questions[nextQuestionIndex];
  
   questionsEl.children[0].textContent = currentQuestion.title;
// hides previous questions choices
   choicesEl.innerHTML = "";

//for loop to run through questions and there choices
for(var i = 0; i < currentQuestion.choices.length; i++){
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = currentQuestion.choices[i];
//adds event listener to the choices
    choiceBtn.onclick =choiceClick;
//shows choices on screen
    choicesEl.appendChild(choiceBtn);
}

};
//checks in answer is correct or not when clicked
function choiceClick(event){
var element = event.target.textContent;
var state = questions[nextQuestionIndex].answer;
//console.log(element);
//console.log(state);
// reduces time by 10 seconds when wrong answer is chosen
if (element != state){
timerCount -= 10;
}
if (timerCount <0) {
    timer = 0;
}
//continues to next question
nextQuestionIndex++;

if (nextQuestionIndex === questions.length){
    clearInterval(timer);
    endQuiz();
}


nextQuestion();
      
    }
  
//function for once quiz ends
function endQuiz(){
// finished variable for once quiz is over and unhides the content
  var finishedEl = document.getElementById("finished");
    finishedEl.setAttribute("class","");
//displays score from timercount
    scoreEl.textContent = timerCount;
    //hides the questions content
    questionsEl.setAttribute("class", "hide")
// submit button for scores 
    var submitButtonEl = document.getElementById("submit");
    submitButtonEl.addEventListener('click', savedHighScores)
}
// function for saved highscores
function savedHighScores(event){
    event.preventDefault();
    var swifty = scoreEl.textContent;
    var scoresSubmission = swifty + ":" + intitialsEl.value;
    console.log(intitialsEl.value);
    //if statement saves scores to local storage
    if(JSON.parse(localStorage.getItem("scores")) == null){
        scores = [scoresSubmission];
        localStorage.setItem("scores", JSON.stringify(scores));
    }
    else {
        scores = JSON.parse(localStorage.getItem('scores'));
        scores.push(scoresSubmission);
        localStorage.setItem("scores", JSON.stringify(scores));
    }
    displayedScores();
}
    function displayedScores(){
        var highScoresEl = document.getElementById('highScores');
        //displays highscores on page
        highScoresEl.style.display = "contents";
        //adds event listener to clear button and clears highscores
        clearButtonEl.addEventListener('click', function(){
            localStorage.clear("scores");
            scoreboardEL.style.display = "none";
        })
        //adds event listener to return button and returns to start of quiz
        returnButtonEl.addEventListener('click', function(){
            location.reload();
        })
    //if state running through arrays and displaying them
        if(scores != null){
            for (i=0; i < scores.length; i++){
                var listName = scores[i];
                var finalOl = document.createElement("ol")
                finalOl.textContent = listName;
                scoreboardEL.appendChild(finalOl);
            }
        }
    
//console.log(scores);
}
