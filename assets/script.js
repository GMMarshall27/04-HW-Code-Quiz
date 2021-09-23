var nextQuestionIndex=0;
var timerCount= 75;
var timer;
var startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startQuiz);
var choicesEl = document.getElementById('choices')
var questionsEl = document.getElementById('questionsContainer')
var timerEl = document.getElementById('timer')
var intitialsEl = document.getElementById('initials')
var scoreEl= document.getElementById("score");
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
    
//console.log(scores);
//console.log(newScore);
}



