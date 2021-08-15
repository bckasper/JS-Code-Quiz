// Element variables
var header = document.getElementById("header")
var timerElement = document.getElementById("timer")
var welcomeText = document.getElementById("welcome-text")
var startButton = document.getElementById("startBtn")


// Questions
var questions = [
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
    {
        question: "How many variable types are there?",
        choices: [1,2,3,4],
        answer: 1,
    },
]



function startQuiz(){
    header.innerHTML = ""
    welcomeText.innerHTML = ""
    startButton.setAttribute("style", "display:none")
    startButton.disabled
}

startButton.addEventListener("click", startQuiz)