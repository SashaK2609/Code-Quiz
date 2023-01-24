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


