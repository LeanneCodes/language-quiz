const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">&nbsp&nbsp&nbsp${score.category} - ${score.name} - ${score.score}</li>`;
})
.join("");