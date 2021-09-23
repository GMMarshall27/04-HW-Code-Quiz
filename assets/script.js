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
//var highScoresEl = document.getElementById('highScores');
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

function startQuiz(){
    //console.log("You clicked the button!")
    var startContainer = document.getElementById('startContainer');
    startContainer.setAttribute("class", "start hide");

    questionsEl.setAttribute("class", "")

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


  

function nextQuestion(){
   var currentQuestion = questions[nextQuestionIndex];
  
   questionsEl.children[0].textContent = currentQuestion.title;

   choicesEl.innerHTML = "";


for(var i = 0; i < currentQuestion.choices.length; i++){
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = currentQuestion.choices[i];
    choiceBtn.onclick =choiceClick;

    choicesEl.appendChild(choiceBtn);
}

};

function choiceClick(event){
var element = event.target.textContent;
var state = questions[nextQuestionIndex].answer;
console.log(element);
console.log(state);
if (element != state){
timerCount -= 10;
}
if (timerCount <0) {
    timer = 0;
}
nextQuestionIndex++;

if (nextQuestionIndex === questions.length){
    clearInterval(timer);
    endQuiz();
}


nextQuestion();
      
    }
  

function endQuiz(){

  var finishedEl = document.getElementById("finished");
    finishedEl.setAttribute("class","");

    //var scoreEl= document.getElementById("score");
    scoreEl.textContent = timerCount;
    
    questionsEl.setAttribute("class", "hide")

    var submitButtonEl = document.getElementById("submit");
    submitButtonEl.addEventListener('click', savedHighScores)
}

function savedHighScores(event){
    event.preventDefault();
    var swifty = scoreEl.textContent;
    var scoresSubmission = swifty + ":" + intitialsEl.value;
    console.log(intitialsEl.value);
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
        //scoreboardEl.setAttribute("class","");
        highScoresEl.style.display = "contents";
        //scoreEl.style.disply = "none";
        //questionsEl.style.disply = "none";
        //finishedEl.style.disply = "none";
        //submitButtonEl.style.display = "none";
        clearButtonEl.addEventListener('click', function(){
            localStorage.clear("scores");
            scoreboardEL.style.display = "none";
        })
        returnButtonEl.addEventListener('click', function(){
            location.reload();
        })
    
        if(scores != null){
            for (i=0; i < scores.length; i++){
                //var listScore = scores[i];
                var listName = scores[i];
                var finalOl = document.createElement("ol")
                finalOl.textContent = listName;
                scoreboardEL.appendChild(finalOl);
            }
        }
    
//console.log(scores);
//console.log(newScore);
}



