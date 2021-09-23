var nextQuestionIndex=0;
var timerCount= 75;
var timer;
var startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startQuiz);
var choicesEl = document.getElementById('choices')
var questionsEl = document.getElementById('questionsContainer')
var timerEl = document.getElementById('timer')
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

function choiceClick(answer){

if (answer.textContent != questions[nextQuestionIndex].answer){
timerCount -= 10;
console.log(answer)
if (timerCount <0) {
    timer = 0;
}
nextQuestionIndex++;

if (nextQuestionIndex === questions.length){
    endQuiz();
}
else {
    nextQuestion();
}
}

      
    }
  

function endQuiz(){
    clearInterval(timer);
  timerEl.textContent = timerCount;

  var finishedEl = document.getElementById("finished");
    finishedEl.setAttribute("class","");

    var scoreEl= document.getElementById("score");
    scoreEl.textContent = timerCount;

    questionsEl.setAttribute("class", "hide")
}



