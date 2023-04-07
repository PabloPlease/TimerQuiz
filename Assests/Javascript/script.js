const quizQuestions = [
  {
    question: "Select the correct HTML tag to make a text bold",
    answers: ["b", "bold", "max", "uppercase"],
    correctAnswer: 0,
  },
  {
    question: "Select the correct HTML for creating a hyperlink?",
    answers: ["<href>", "<a href>", "<link>", "<src>"],
    correctAnswer: 1,
  },
  {
    question: "In CSS, choose the correct option to select this image by its id?",
    answers: ["img {}", "src{}", "#mainpic{}", "pic{}"],
    correctAnswer: 2,
  },
  {
    question: "In CSS, what is the correct option to select all the tags on a page?",
    answers: ["class p", "<p>{}", ".p{}", "p{}"],
    correctAnswer: 3,
  },
  {
    question: "In CSS,Select the property used to set the spacing in between lines of text?",
    answers: ["items-align", "letter-spacing", "line-height", "space-between"],
    correctAnswer: 2,
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<link>", "<scripting>", "<js>", "<script>"],
    correctAnswer: 3,
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["The <body> section", "The <head> section", "Both the <head> and <body> section are correct", "The footer section"],
    correctAnswer: 2,
  },
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    answers: ["<script scr='script.js>'", "<script href='script.js'>", "<script link='script.js'>", "<script name='script.js'>"],
    correctAnswer: 0,
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: ["alert('Hello World');", "alertBox('Hello World');", "line-height", "space-between"],
    correctAnswer: 0,
  },
  {
    question: "Inside whe JavaScript?",
    answers: ["<link>", "<scripting>", "<js>", "<script>"],
    correctAnswer: 3,
  },
];

const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer");
const introCont = document.getElementById("quiz-intro");
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerId;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  quizContainer.classList.remove("hide");
  showQuestion();
  timerId = setInterval(updateTimer, 1000);
}

function showQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("btn");
    button.addEventListener("click", () => {
      if (index === question.correctAnswer) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex === quizQuestions.length) {
        endQuiz();
      } else {
        showQuestion();
      }
    });
    answerButtonsElement.appendChild(button);
  });
}

function endQuiz() {
  clearInterval(timerId);
  quizContainer.classList.add("hide");
  timerElement.classList.add("hide");
  const result = `You got ${score} out of ${quizQuestions.length} questions correct!`;
  const scoreElement = document.createElement("p");
  scoreElement.innerText = result;
  quizContainer.appendChild(scoreElement);
}


function updateTimer() {
  timeLeft--;
  timerElement.innerText = `Time left: ${timeLeft} seconds`;
  if (timeLeft <= 0) {
    endQuiz();
  }
}