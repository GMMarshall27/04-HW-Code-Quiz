var startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startQuiz);

function startQuiz(){
    //console.log("You clicked the button!")
    var startContainer = document.getElementById('startContainer');
    startContainer.setAttribute("class", "start hide");
};

