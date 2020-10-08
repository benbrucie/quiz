const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});
saveHighScore = e =>{
  e.preventDefault();
};
