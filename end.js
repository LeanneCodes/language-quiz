const username = document.getElementById('username');
const categories = document.getElementById('categories');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 10;
const max_questions = 10;

finalScore.innerText = `You scored\n${mostRecentScore}/${MAX_HIGH_SCORES * max_questions}`;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    alert("Your score has been saved!\nBest of luck to get in the top 10 :)");
    setTimeout( () => {
        window.location.assign('/highscores.html');
    }, 1000);
    
};