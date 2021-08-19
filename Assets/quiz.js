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
scoreBoard.innerHTML = 0; //starts the HTML text content at 0 for the scoreboard that updates as the user goes through the quiz
secondsLeft = 100 //starting time for the timer
timerElement.textContent = secondsLeft; //makes sure the timer is using the secondsLeft as text content
let questionNumber = 0; //starts the question indexing
let score = 0; //starts the score counter
var over = false; //This is here to make the timer stop correctly when the quizOver function is fired
let finalScore = 0; //makes sure the secondsLeft get added to the final score and stored locally
var quizOverMsg; //declaring this variable which is accessed in the quizOver function and the goToHighScore function


// Questions for the quiz
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

// This will show the question and all the possible choices for the user
function showquestion(){
    answersUL.setAttribute("style", "display: flex")
    question.innerHTML = questions[questionNumber].question
    let questionChoices = questions[questionNumber].choices
    for(let i=0; i<questionChoices.length; i++){
        answersUL.children[i].textContent = questionChoices[i]
    }
}

// This is run if the user selects the correct answer. It will fire quizOver if it is the last question, or progress to the next question if not and re-fire showQuestion
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

// This runs when the user selects the correct answer
function scoreIncrease(){
    score = score+50
    scoreBoard.innerHTML = score
}

// This is run if the user selects the correct answer. It will fire quizOver if it is the last question, or progress to the next question if not and re-fire showQuestion. It also deducts time off the timer.
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

// This runs when the user selects the wrong answer. It does not allow the score to go below 0.
function scoreDecrease(){
    if(score <= 0){
        score -0
    } else {
        score = score-10
    }
    scoreBoard.innerHTML = score
}

// This is the timer function. It also has CSS styling if the timer falls below 15 seconds
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
    } else if(finalScore >= 400 < finalScore <= 500){
        scoreMessage.textContent = great
    } else {
        scoreMessage.textContent = fantastic
    }

    // This is the container that is appended and holds the input label, input element, and submit score button. The submit score button will fire the goToHighScore function
    let miniContainer = document.createElement("section")
    mainContainer.appendChild(miniContainer);
    miniContainer.setAttribute("style","margin-bottom: 5rem; display: flex; flex-direction: row; justify-content: space-around; align-items: center; height: fit-content;")

    let inputLabel = document.createElement("label")
    miniContainer.appendChild(inputLabel)
    inputLabel.textContent = "Enter your initials:"

    let inputInitials = document.createElement("input")
    inputInitials.setAttribute("type","text")
    miniContainer.appendChild(inputInitials);
    inputInitials.setAttribute("style","margin: 0 2rem 0 1rem;");

    
    let submitHighscore = document.createElement("button");
    miniContainer.appendChild(submitHighscore)
    submitHighscore.textContent = "Submit Score"
    
    // This is where the submission of user initials is saved to local storage so that the High Scores page can access scores. This event will also send the user to the High Scores page.
    submitHighscore.addEventListener("click", function(event){
        event.preventDefault();

        let newRecord = {
            userName: inputInitials.value,
            userScore: finalScore,
        }

        var existingRecords = JSON.parse(localStorage.getItem("allScores"));
        if (existingRecords == null) {existingRecords = []}
        
        existingRecords.push(newRecord);
        localStorage.setItem("allScores", JSON.stringify(existingRecords))
        
        window.location.href='highscores.html'

    })
}


// Global event listeners
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


highScoreButton.addEventListener("click", function(){
    for(let i=0; i<mainContainer.children.length; i++){
        mainContainer.children[i].remove()
    }
    goToHighScore()
})



// Score Messages that will be displayed under the user's score at the end
var horrible = "You might need to read up a bit on JavaScript basics before you are ready for this quiz."
var bad = "Ok. Definintely not your best, but I know you can do better. Study up and try again!"
var okay = "Not bad! Keep studying and you will continue to improve!"
var great = "Great score! You truly know your stuff when it comes to JavaScript!"
var fantastic = "Fantastic score! You are truly a master!"