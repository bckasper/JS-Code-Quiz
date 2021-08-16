// Element variables
var header = document.getElementById("header")
var timerElement = document.getElementById("timer")
var welcomeText = document.getElementById("welcome-text")
var startButton = document.getElementById("startBtn")
var question = document.getElementById("question")
var answersUL = document.getElementById("answers")
var answer1 = document.getElementById("answer-1")
var answer2 = document.getElementById("answer-2")
var answer3 = document.getElementById("answer-3")
var answer4 = document.getElementById("answer-4")
var scoreBoard = document.getElementById("scoreboard")


// Global Variables
scoreBoard.innerHTML = 0;
timerElement.textContent = 100;
let questionNumber = 0;
let score = 0


// Questions
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript or link to a JavaScript document?",
        choices: ["<java>","<javascript>","<script>","<code>"],
        answer: "<script>",
    },
    {
        question: "What does the modulus operator (%) return?",
        choices: ["The remainder of one operand divided by another operand","A percentage-formatted value","The square root of an operand","Nothing. Modulus does not exist"],
        answer: "The remainder of one operand divided by another operand",
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
    answersUL.setAttribute("style", "display: flex")
    question.innerHTML = questions[questionNumber].question
    let questionChoices = questions[questionNumber].choices
    for(let i=0; i<questionChoices.length; i++){
        answersUL.children[i].textContent = questionChoices[i]
        answersUL.children[i].addEventListener("click", function(event){
            var answer = questions[questionNumber].answer
            var userChoice = event.target.textContent
            if(userChoice === answer){
                correctAnswer()
            } else {
                wrongAnswer()
            }
        })
    }
}

function correctAnswer() {
    questionNumber++
    score = score+50
    scoreBoard.innerHTML = score
    showquestion()
    
}

function wrongAnswer() {
    questionNumber++
    score = score-10
    scoreBoard.innerHTML = score
    showquestion()
    console.log(questionNumber)
}




// function validateAnswer(event){
//     var answer = questions[questionNumber].answer
    
//     var userChoice = event.target.textContent
    
//     if(userChoice === answer){
//         console.log("correct")
//     }
// }






// My event listeners
startButton.addEventListener("click", startQuiz)
// answer1.addEventListener("click", validateAnswer)
// answer2.addEventListener("click", validateAnswer)
// answer3.addEventListener("click", validateAnswer)
// answer4.addEventListener("click", validateAnswer)