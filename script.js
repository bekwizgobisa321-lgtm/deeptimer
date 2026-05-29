let seconds = 0;
let isRunning = false;
let timer;

/*those elements live in your HTML page. But your JS file is separate — it can't just magically see them. You have to tell JS to go find them. */ 
// so document is the whole html page getElemntById is get the element in the html file and find it by id

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const resetBtn = document.getElementById("resetBtn");
const resumeBtn = document.getElementById("resumeBtn")

function updateDisplay() {
    let minutes = Math.floor(seconds/60);
    let secs = seconds % 60;

    display.textContent = 
    (minutes < 10 ? "0" + minutes : minutes)
    (secs < 10 ? "0" + secs : secs);
    
}