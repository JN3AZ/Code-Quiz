var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

let time = 100;
var $timer = document.querySelector("#timer");

$timer.textContent = time;
var timer = setInterval(function () {
  time--;
  $timer.textContent = time;

  if (time === 0) {
    clearInterval(timer);
  }
}, 1000);

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = questionIndex + 1 + ". " + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type=radio]:checked");
  if (!selectedOption) {
    alert("Please Select your answer!");
    return;
  }
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer === answer) {
    score += 10;
  } else {
    time -= 10;
  }

  selectedOption.checked = false;
  currentQuestion++;
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  if (currentQuestion == totQuestions) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = "Your Score: " + score;
    localStorage.setItem("score", score)
    setTimeout(function (){
      window.location = "score.html";
      
    }, 3000)

  }
  loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
//reveal total at the end
function endGame() {
  Questionsdiv.setAttribute("hidden", "true");
  EndScreen.removeAttribute("hidden");
  finalscore.textContent = score + "/" + questions.length;
}

var initials = document.getElementById("initials");
var highscores = document.getElementById("highscores");

initials.addEventListener("click", function (event) {
  window.location.href = "score.html";
});

var highscores = localStorage.getItem("highscores");
if (highscores) {
  highscores = JSON.parse(highscores);
} else {
  highscores = [];
}
