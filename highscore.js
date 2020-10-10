//Reference: https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/
//Reference: https://www.w3schools.com/js/js_htmldom_html.asp

const highScoreList = document.getElementById("highScoreList");
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

highScoreList.innerHTML = highScore.map(score => {
    return '<li class="high-score">'+ score.name + '-' + score.score + '</li>';
  }).join("");
//
