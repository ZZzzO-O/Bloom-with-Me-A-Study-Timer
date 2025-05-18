const studyImage = 'https://i.pinimg.com/736x/20/3f/a8/203fa8a60f3b11f449651445431daaae.jpg';
const restImage = 'https://external-preview.redd.it/hcTFboQgKn-3vES5nTwr-3ZUqwhQ4sZk5SXQs0emZxg.jpg?width=1080&crop=smart&auto=webp&s=1c81a5d815863a59b5b357fa1279fdb1ef64a372';
const resetImage = 'https://img.freepik.com/free-photo/laptop-notebooks-girls-bed_53876-153294.jpg?semt=ais_hybrid&w=740';
const doneImage = 'https://i.pinimg.com/1200x/05/17/1a/05171a8dfe286ef7a2e90383f312162d.jpg'; // Add your done image URL

const body = document.body;
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds (work session)
let breakTimeLeft = 5 * 60; // 5 minutes in seconds (short break)
let longBreakTimeLeft = 15 * 60; // 15 minutes for long break
let isPaused = true;
let pomodoroCount = 0;

function updateDisplay(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateText(message) {
  const subtitle = document.querySelector(".subtitle");
  subtitle.textContent = message; // Change the subtitle text
}

function startTimer() {
  if (!isPaused) return;
  isPaused = false;
  body.style.backgroundImage = `url(${studyImage})`; // Change to study background
  updateText("Stay focused!"); // Update text when timer starts

  // Work session timer (Pomodoro)
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay(timeLeft);
    } else {
      clearInterval(timer);
      pomodoroCount++;
      body.style.backgroundImage = `url(${doneImage})`; // Change to "done" background
      updateText("Well Done! Take a break!"); // Change text when timer finishes
      if (pomodoroCount % 4 === 0) {
        // Every 4 Pomodoros, take a long break
        startLongBreak();
      } else {
        startShortBreak();
      }
    }
  }, 1000);
}

function startShortBreak() {
  timeLeft = breakTimeLeft;
  updateDisplay(timeLeft);
  body.style.backgroundImage = `url(${restImage})`; // Change to rest background
  updateText("Take a short break!"); // Change text for short break

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay(timeLeft);
    } else {
      clearInterval(timer);
      startTimer(); // Restart Pomodoro after short break
    }
  }, 1000);
}

function startLongBreak() {
  timeLeft = longBreakTimeLeft;
  updateDisplay(timeLeft);
  body.style.backgroundImage = `url(${restImage})`; // Change to rest background
  updateText("Take a long break!"); // Change text for long break

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay(timeLeft);
    } else {
      clearInterval(timer);
      startTimer(); // Restart Pomodoro after long break
    }
  }, 1000);
}

function pauseTimer() {
  if (isPaused) return;
  isPaused = true;
  clearInterval(timer);
  body.style.backgroundImage = `url(${restImage})`; // Change to rest background
  updateText("Take a break!"); // Update text when paused
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60; // Reset work session to 25 minutes
  breakTimeLeft = 5 * 60; // Reset short break to 5 minutes
  longBreakTimeLeft = 15 * 60; // Reset long break to 15 minutes
  isPaused = true;
  pomodoroCount = 0; // Reset Pomodoro count
  updateDisplay(timeLeft);
  body.style.backgroundImage = `url(${resetImage})`; // Change to reset background
  updateText("Timer Reset. Ready to go!"); // Update text when reset
}

// Event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay(timeLeft);
