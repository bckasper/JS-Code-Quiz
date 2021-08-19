//element variables
var clearHighScoresBtn = document.getElementById("clearHighScore")



// clear local storage
function clearLocalStorage(){
    localStorage.clear();
}


// Global event listeners
clearHighScoresBtn.addEventListener("click", clearLocalStorage)