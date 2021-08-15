// Element variables
var header = document.getElementById("header")
var timerElement = document.getElementById("timer")
var welcomeText = document.getElementById("welcome-text")
var startButton = document.getElementById("startBtn")
var question = document.getElementById("question")
var answersUL = document.getElementById("answers")



// Questions
var questions = [
    {
        question: "This is question number 1?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "This is question number 2",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "This is question number 3",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "This is question number 4",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "This is question number 5",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "This is question number 6",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "This is question number 7",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "This is question number 8",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "This is question number 9",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "This is question number 10",
        choices: [1,2,3,4],
        answer: 1,
    },
]


// Functions of the application

//Start quiz function will remove the header text, welcome text, button, and render the first question
function startQuiz(){
    header.remove()
    welcomeText.remove()
    startButton.remove()

    showquestion()
}

function showquestion(){
    
}


// My event listeners
startButton.addEventListener("click", startQuiz)

