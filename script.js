const studyImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGD7Bb1Lh9xlf4jdqRYSdn1Nef9vrsQ6uaWmi-ErpjSai7U0ZJm-zMRzP0lZw9wNZtEs&usqp=CAU';
const restImage = 'https://external-preview.redd.it/hcTFboQgKn-3vES5nTwr-3ZUqwhQ4sZk5SXQs0emZxg.jpg?width=1080&crop=smart&auto=webp&s=1c81a5d815863a59b5b357fa1279fdb1ef64a372';
const resetImage = 'https://img.freepik.com/free-photo/laptop-notebooks-girls-bed_53876-153294.jpg?semt=ais_hybrid&w=740';

const body = document.body;
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isPaused = true;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (!isPaused) return;
  isPaused = false;
  body.style.backgroundImage = `url(${studyImage})`;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      body.style.backgroundImage = "url('https://i.pinimg.com/originals/67/f1/dc/67f1dc1c33f6d9f5f8680cba6d195b2f.gif')"; // Done image
    }
  }, 1000);
}

function pauseTimer() {
  if (isPaused) return;
  isPaused = true;
  clearInterval(timer);
  body.style.backgroundImage = `url(${restImage})`;
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 25 * 60;
  isPaused = true;
  updateDisplay();
  body.style.backgroundImage = `url(${resetImage})`;
}

// Event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();

