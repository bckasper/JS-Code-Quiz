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
secondsLeft = 100
timerElement.textContent = secondsLeft;
let questionNumber = 0;
let score = 0


// Questions
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript or link to a JavaScript document?",
        choices: ["<java>","<javascript>","<script>","<code>"],
        answer: "<script>"
    },
    {
        question: "What does the modulus operator (%) return?",
        choices: ["The remainder of one operand divided by another operand","A percentage-formatted value","The square root of an operand","Nothing. Modulus does not exist"],
        answer: "The remainder of one operand divided by another operand",
    },
    {
        question: "An array is bounded by which syntax?",
        choices: ["{ }","( )","' '","[ ]"],
        answer: "[ ]",
    },
    {
        question: "Which is the correct syntax for writing an IF statement?",
        choices: ["if(x === 5){console.log(x)}","if x = 5, then console.log(x)","if[x == 5] then {console.log(x)}","if(x === 5; console.log(x))"],
        answer: "if(x === 5){console.log(x)}",
    },
    {
        question: "How does a FOR LOOP start?",
        choices: ["for(let i=0; i++; i < array.length)","for(i++; let i=0; i < array.length)","for(let i=0; i < array.length; i++)","for(i++; i < array.length; i=0)"],
        answer: "for(let i=0; i < array.length; i++)",
    },
    {
        question: "How do you start a comment line in JavaScript?",
        choices: ["**","<!--","--","//"],
        answer: "//",
    },
    {
        question: "What will Math.random() return?",
        choices: ["Any random whole number","A number between 0 and 1","Any random integer rounded to the nearest hundreth","Any randome number, including negative numbers"],
        answer: "A number between 0 and 1",
    },
    {
        question: "How do you write an IF statement for executing code if x is NOT EQUAL to y?",
        choices: ["if(x <> y)","if(x != y)","if(x not y)","if(x $= y)"],
        answer: "if(x != y)",
    },
    {
        question: "How do you declare a JavaScript variable?",
        choices: ["variable","v","vari","var"],
        answer: "var",
    },
    {
        question: "What is the case structure of the variable newItem called?",
        choices: ["kebab case","pascal case","camel case","snake case"],
        answer: "camel case",
    },
]


// Functions of the application

//Start quiz function will remove the header text, welcome text, button, and render the first question
function startQuiz(){
    header.remove()
    welcomeText.remove()
    startButton.remove()

    showquestion()
    startTimer()
}

function showquestion(){
    answersUL.setAttribute("style", "display: flex")
    question.innerHTML = questions[questionNumber].question
    let questionChoices = questions[questionNumber].choices
    for(let i=0; i<questionChoices.length; i++){
        answersUL.children[i].textContent = questionChoices[i]
    }

}

function correctAnswer() {
    if(questionNumber === questions.length-1){
        score = score+50
        scoreBoard.innerHTML = score
        return quizOver()
    } else {
    questionNumber++
    score = score+50
    scoreBoard.innerHTML = score
    showquestion()}
    

}

function wrongAnswer() {
    if(questionNumber === questions.length-1){
        score = score-10
        scoreBoard.innerHTML = score
        return quizOver()
    } else {
    questionNumber++
    score = score-10
    scoreBoard.innerHTML = score
    secondsLeft = secondsLeft-10
    showquestion()}
    
}

function startTimer(){
    let timer = setInterval(() => {
        secondsLeft--
        timerElement.textContent = secondsLeft

        if(secondsLeft < 15){
            timerElement.setAttribute("style","color: red")
        }

        if(secondsLeft === 0){
            clearInterval(timer)
            quizOver()
        }
    }, 1000);
}


function quizOver () {
    question.remove();
    answersUL.remove();
    for(let i=0; i<answersUL.children.length; i++){
        answersUL.children[i].remove();
    }

    alert("Nice! You got a " + score)
}




// My event listeners
startButton.addEventListener("click", startQuiz)

for(let i = 0; i<answersUL.children.length; i++){
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