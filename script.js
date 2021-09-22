var nextQuestionIndex=0;
var startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startQuiz);
var answersEl = document.getElementById('answers')
var questionsEl = document.getElementById('questionsContainer')
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
  ];
  for(var i=0; i< questions.length; i++){

  }

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
}

