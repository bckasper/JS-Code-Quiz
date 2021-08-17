// Element variables
var header = document.getElementById("header")
var highScoreButton = document.getElementById("highscore")
var timerElement = document.getElementById("timer")
var welcomeText = document.getElementById("welcome-text")
var startButton = document.getElementById("startBtn")
var mainContainer = document.getElementById("container")
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
let score = 0;
var over = false; 
let finalScore = 0;


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
    for (let i=0; i<answersUL.children.length; i++){
        answersUL.children[i].setAttribute("style", "background-color: rgb(15,15,53);")
    }
    if(questionNumber === questions.length-1){
        return quizOver()
    } else {
    questionNumber++
    showquestion()}

}

function scoreIncrease(){
    score = score+50
    scoreBoard.innerHTML = score
}

function wrongAnswer() {
    for (let i=0; i<answersUL.children.length; i++){
        answersUL.children[i].setAttribute("style", "background-color: rgb(15,15,53);")
    }
    if(questionNumber === questions.length-1){
        return quizOver()
    } else {
    questionNumber++
    secondsLeft = secondsLeft-10
    showquestion()}    
}

function scoreDecrease(){
    if(score <= 0){
        score -0
    } else {
        score = score-10
    }
    scoreBoard.innerHTML = score
}

function startTimer(){
    let timer = setInterval(() => {
        secondsLeft--
        timerElement.textContent = secondsLeft

        if(secondsLeft < 15){
            timerElement.setAttribute("style","color: red")
        }

        if(secondsLeft <= 0 && questionNumber <= questions.length-1){
            clearInterval(timer)
            quizOver()
        } else if(secondsLeft > 0 && over == true){
            clearInterval(timer)
        }
    }, 1000);
}

// This function will run when the quiz concludes either by time running out or questions finished.
function quizOver () {
    over = true
    question.remove();
    answersUL.remove();
    for(let i=0; i<answersUL.children.length; i++){
        answersUL.children[i].remove();
    }
    
    score = score + secondsLeft
    scoreBoard.innerHTML = score
    finalScore = score;

    let quizOverMsg = document.createElement("h1");
    mainContainer.appendChild(quizOverMsg);
    quizOverMsg.setAttribute("style","margin: auto 5rem auto 5rem; text-align: center;")
    quizOverMsg.textContent = "Score: "+score

    let scoreMessage = document.createElement("p");
    mainContainer.appendChild(scoreMessage);
    scoreMessage.setAttribute("style","margin: auto 5rem auto 5rem; text-align: center; font-size: 200%;")
    if(finalScore < 100){
        scoreMessage.textContent = horrible;
    } else if(finalScore >= 100 && finalScore < 250){
        scoreMessage.textContent = bad;
    } else if (finalScore >= 250 && finalScore < 400){
        scoreMessage.textContent = okay
    } else if(finalScore >= 400 < finalScore < 500){
        scoreMessage.textContent = great
    } else {
        scoreMessage.textContent = fantastic
    }

    let miniContainer = document.createElement("section")
    mainContainer.appendChild(miniContainer);
    miniContainer.setAttribute("style","margin-bottom: 5rem; display: flex; flex-direction: row; justify-content: space-around; align-items: center; height: fit-content;")

    let inputLabel = document.createElement("label")
    miniContainer.appendChild(inputLabel)
    inputLabel.textContent = "Enter your initials:"

    let inputInitials = document.createElement("input")
    miniContainer.appendChild(inputInitials);
    inputInitials.setAttribute("style","margin: 0 2rem 0 1rem;")

    let submitHighscore = document.createElement("button");
    miniContainer.appendChild(submitHighscore)
    submitHighscore.textContent = "Submit Score"
    submitHighscore.addEventListener("click", goToHighScore)
}


function goToHighScore(){
    console.log("Go to HighScore")
}




// My global event listeners
startButton.addEventListener("click", startQuiz)

for(let i = 0; i<answersUL.children.length; i++){
    answersUL.children[i].addEventListener("click", function(event){
        var answer = questions[questionNumber].answer
        var userChoice = event.target.textContent
        if(userChoice === answer){
            scoreIncrease()
            event.target.setAttribute("style","background-color: green")
            setTimeout(() => {
                correctAnswer()
            }, 1000); 
        } else {
           scoreDecrease()
           event.target.setAttribute("style","background-color: red")
           setTimeout(() => {
            wrongAnswer()
           }, 1000); 
        }  
    })
}


highScoreButton.addEventListener("click", goToHighScore)

// Score Messages that will be displayed under the user's score at the end
var horrible = "You might need to read up a bit on JavaScript basics before you are ready for this quiz."
var bad = "Ok. Definintely not your best, but I know you can do better. Study up and try again!"
var okay = "Not bad! Keep studying and you will continue to improve!"
var great = "Great score! You truly know your stuff when it comes to JavaScript!"
var fantastic = "Fantastic score! You are truly a master!"