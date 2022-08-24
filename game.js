const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "How many toes do we have?",
        choice1: "6",
        choice2: "3",
        choice3: "8",
        choice4: "10",
        answer: 4
    },
    {
        question: "How many fingers do we have?",
        choice1: "4",
        choice2: "7",
        choice3: "10",
        choice4: "6",
        answer: 3
    },
    {
        question: "How many arms do we have?",
        choice1: "2",
        choice2: "3",
        choice3: "1",
        choice4: "8",
        answer: 1
    },
    {
        question: "How many legs do we have?",
        choice1: "4",
        choice2: "2",
        choice3: "1",
        choice4: "9",
        answer: 2
    },
    {
        question: "How many nails do we have?",
        choice1: "40",
        choice2: "30",
        choice3: "20",
        choice4: "10",
        answer: 3
    },
];

// fetch("questions.json")
//     .then(res => {
//         return res.json();
//     })
//     .then(loadedQuestions => {
//         console.log(loadedQuestions);
//         questions = loadedQuestions;
//         startGame();
//     })
//     .catch( err => {
//         console.log(err);
//     });

const correct_bonus = 10;
const max_questions = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions)
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= max_questions) {
        // go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach( choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();