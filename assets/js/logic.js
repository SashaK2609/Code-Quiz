//defining a list of questions
const questions = [
	{
		 question: 'Inside which HTML element do we put the JavaScript?',
		 options: [
			  '<js>',
			  '<script>',
			  '<scripting>',
			  '<javascript>'
		 ],
		 answer: '<script>'
	},
	{
		 question: `
			  What is the correct JavaScript syntax to change the content of the HTML element below?

			  <p id="demo">This is a demonstration.</p>
		 `,
		 options: [
			  '#demo.innerHTML = "Hello World!";',
			  'document.getElement("p").innerHTML = "Hello World!";',
			  'document.getElementByName("p").innerHTML = "Hello World!";',
			  'document.getElementById("demo").innerHTML = "Hello World!";'
		 ],
		 answer: 'document.getElementById("demo").innerHTML = "Hello World!";'
	},
	{
		 question: `Where is the correct place to insert a JavaScript?`,
		 options: [
			  'The <body> section',
			  'The <head> section',
			  'Both the <head> section and the <body> section are correct'
		 ],
		 answer: 'Both the <head> section and the <body> section are correct'
	},
	{
		 question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
		 options: [
			  '<script src="xxx.js">',
			  '<script name="xxx.js">',
			  '<script script="xxx.js">'
		 ],
		 answer: '<script src="xxx.js">'
	},
];

//defined veriables
const startScreenId = 'start-screen';
const questionsId = 'questions';
const questionsTitleId = 'question-title';
const choicesId = 'choices';
const endScreenId = 'end-screen';
const timeId = 'time';
const initialsId = 'initials';
const scoreId = 'final-score';
const storageKey = 'answers';

let quizTime = 90;
let interval;
let currentQuestion = 0;
let score = 0;
let answers = [];


function toggleVisibility(elementId) {
	document.getElementById(elementId).classList.toggle('hide');
};

function submitScore() {
	const initials = document.getElementById(initialsId).value;

	const savedAnswers = JSON.parse(localStorage.getItem(storageKey)) || [];

	savedAnswers.push({ initials, score, questionsCount: questions.length });
	localStorage.setItem(storageKey, JSON.stringify(savedAnswers));

	answers = [];
	score = 0;

	toggleVisibility(endScreenId);
	toggleVisibility(startScreenId);
	document.getElementById(timeId).innerText = quizTime;
	document.getElementById(initialsId).value = '';
};

function finishQuiz() {
	clearInterval(interval);
	quizTime = 90;
	currentQuestion = 0;

	toggleVisibility(questionsId);
	toggleVisibility(endScreenId);

	answers.forEach(function(isAnswerCorrect) {
		 if (isAnswerCorrect) {
			  score = score + 1;
		 }
	});

	document.getElementById(scoreId).innerHTML = score + ' / ' + questions.length;
};

function startTimer() {
	interval = setInterval(function() {
		 if (quizTime <= 0) {
			  finishQuiz();
		 } else {
			  quizTime = quizTime - 1;
		 }
		 
		 document.getElementById(timeId).innerText = quizTime;
	}, 1000);
};

function submitAnswer(event) { 
	const userAnswer = event.target.innerText;
	const isAnswerCorrect = userAnswer === questions[currentQuestion].answer;
	answers[currentQuestion] = isAnswerCorrect;

	if (!isAnswerCorrect) {
		 quizTime = quizTime - 10;
	}

	if (currentQuestion === questions.length - 1) {
		 finishQuiz();
	} else {
		 currentQuestion = currentQuestion + 1;
		 renderQuestion();
	}
};

function renderQuestion() {
	const question = questions[currentQuestion];

	document.getElementById(questionsTitleId).innerHTML = question.question;
	const choices = document.getElementById(choicesId);
	choices.innerHTML = '';
	
	question.options.forEach(function(option) {
		 const optionButton = document.createElement('button');
		 optionButton.innerText = option;
		 optionButton.addEventListener('click', submitAnswer);

		 choices.appendChild(optionButton);
	});  
};

function start() {
	toggleVisibility(startScreenId);
	toggleVisibility(questionsId);
	document.getElementById(timeId).innerText = quizTime;
	
	startTimer();
	renderQuestion();
};

document.getElementById('start').addEventListener('click', start);
document.getElementById('submit').addEventListener('click', submitScore);