var nextQuestionIndex=0;
var startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startQuiz);
var choicesEl = document.getElementById('choices')
var questionsEl = document.getElementById('questionsContainer')
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

    nextQuestion();
}

function nextQuestion(){
   var currentQuestion = questions[nextQuestionIndex];
   questionsEl.children[0].textContent = currentQuestion.title;


for(var i = 0; i < currentQuestion.choices.length; i++){
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = currentQuestion.choices[i];

    choicesEl.appendChild(choiceBtn);
}

}
