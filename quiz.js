const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
			question: "Name of the screen that recognizes touch input is :",
			choice1: "Recog screen",
			choice2: "Point Screen",
			choice3: "Touch Screen",
			choice4: "Android Screen",
			answer: 3
	},
	{
			question: "Identify the device through which data and instructions are entered into a computer",
			choice1: "Software",
			choice2: "Input Device",
			choice3: "Output Device",
			choice4: "Memory",
			answer: 2
	},
	{
			question: "Arrange in ascending order the units of memory TB, KB, GB, MB",
			choice1: "TB>MB>GB>KB",
			choice2: "TB>GB>MB>KB",
			choice3: "MB>GB>TB>KB",
			choice4: "GB>MB>KB>TB",
			answer: 2
	}
];

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 3;

function startQuiz()
{
	 questionCounter = 0;
   score = 0;
	 availableQuestions = [...questions];
	 console.log(availableQuestions);
	 getNewQuestion();
}


function getNewQuestion()
{
	if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS ){
	    return window.location.assign("/end.html");
   }

	 questionCounter++;
   progressText.innerText = 'Question ' + questionCounter + "/" + MAX_QUESTIONS;


	 const questionIndex = Math.floor(Math.random() * availableQuestions.length);
	 currentQuestion = availableQuestions[questionIndex];
	 question.innerText = currentQuestion.question;

	 choices.forEach(choice => {
		 const number = choice.dataset['number'];
		 choice.innerText = currentQuestion['choice' + number];
	 });

	 availableQuestions.splice(questionIndex, 1);
   console.log(availableQuestions);
	 acceptingAnswers = true;

 };

choices.forEach(choice => {
	 choice.addEventListener("click", e => {
		 if (!acceptingAnswers) return;

		 acceptingAnswers = false;
		 const selectedChoice = e.target;
		 const selectedAnswer = selectedChoice.dataset["number"];

     const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

     if (classToApply === 'correct'){
       increamentScore(CORRECT_BONUS);
     }

     selectedChoice.parentElement.classList.add(classToApply);

     setTimeout(() => {
       selectedChoice.parentElement.classList.remove(classToApply);
       getNewQuestion();
     }, 1000);

	});
});

increamentScore = num => {
  score +=num;
  scoreText.innerText = score;
}

startQuiz();
