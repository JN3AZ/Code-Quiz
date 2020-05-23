let localScore = localStorage.getItem("score");

$("#finalscore").text(localScore);

$("#saveScoreBtn").on("click", function (event) {
  event.preventDefault();
  let initals = $("#username").val();
  console.log(initals, localScore);
  var highscores = localStorage.getItem("highscores");
  if (highscores) {
    highscores = JSON.parse(highscores);
    highscores[initals] = localScore;
    localStorage.setItem("highscores", JSON.stringify(highscores));
  } else {
    highscores = {};
    highscores[initals] = localScore;
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }
});
