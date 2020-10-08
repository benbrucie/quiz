//Reference: https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/
const highScoreList = document.getElementById("highScoreList");
const highscore = JSON.parse(localStorage.getItem("highScore")) || [];

highScoreList.innerHTML = highScore.map(score => {
    return '<li class="high-score">${score.name}-${score.score}</li>';
  }).join("");
