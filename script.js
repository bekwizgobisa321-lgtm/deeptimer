let seconds = 0;
let isRunning = false;
let timer;

/*those elements live in your HTML page. But your JS file is separate — it can't just magically see them. You have to tell JS to go find them. */
// so document is the whole html page
// getElemntById is get the element in the html file and find it by id

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const resumeBtn = document.getElementById("resumeBtn");

function updateDisplay() {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  display.textContent =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (secs < 10 ? "0" + secs : secs);
}

// function start() {
//     if (isRunning) return;   //if the time is running do nothing
//     isRunning = true;   // mark the timer as running
//     timer = setInterval(function() {  //run the code inside every 1000ms (1seconds)
//         seconds++; //add 1 seconds every thick
//         updateDisplay(); //update the screen everytick

function start() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(function () {
    seconds++;
    updateDisplay();
  }, 1000);
}

function pause() {
    isRunning = false;
    clearInterval(timer); //this one is the one that freezes the timer 

}

function reset() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
}

//-- connceting the buttons---//
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

//wow i finshed it my first js project
