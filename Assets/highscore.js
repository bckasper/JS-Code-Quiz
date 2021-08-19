//element variables
var clearHighScoresBtn = document.getElementById("clearHighScore")
var scoreOL = document.getElementById("highscores")
var highScoreHeader = document.getElementById("header")
var highScoreContainer = document.getElementById("container")

highScoreHeader.setAttribute("style","margin:3rem auto 2rem auto;")
highScoreContainer.setAttribute("style","min-height:150%;")
scoreOL.setAttribute("style","margin-bottom: 2rem")
clearHighScoresBtn.setAttribute("style","margin-bottom: 2rem")

// Appends a UL to the highscores page and appends a LI for each score in the local storage
function appendHighScores(){
    var allScores = JSON.parse(localStorage.getItem("allScores"))
    
    if (allScores == null){
        return
    } else {
        for(let i=0; i < allScores.length; i++){
            var scoreLi = document.createElement("li");
            scoreLi.textContent = allScores[i].userName+": "+allScores[i].userScore;
            scoreOL.appendChild(scoreLi);
        }
    }
}

appendHighScores()

// clear local storage
function clearLocalStorage(){
    for(i=0; i<scoreOL.children.length; i++){
        scoreOL.children[i].remove();
    }
    
    localStorage.clear();
    location.reload();
}


// Global event listeners
clearHighScoresBtn.addEventListener("click", clearLocalStorage)