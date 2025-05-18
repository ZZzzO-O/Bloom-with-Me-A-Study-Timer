const studyImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUGD7Bb1Lh9xlf4jdqRYSdn1Nef9vrsQ6uaWmi-ErpjSai7U0ZJm-zMRzP0lZw9wNZtEs&usqp=CAU';
const restImage = 'https://external-preview.redd.it/hcTFboQgKn-3vES5nTwr-3ZUqwhQ4sZk5SXQs0emZxg.jpg?width=1080&crop=smart&auto=webp&s=1c81a5d815863a59b5b357fa1279fdb1ef64a372';
const resetImage = 'https://img.freepik.com/free-photo/laptop-notebooks-girls-bed_53876-153294.jpg?semt=ais_hybrid&w=740';

const body = document.body;
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
  body.style.backgroundImage = `url(${studyImage})`;
  // Start timer logic
});

pauseBtn.addEventListener('click', () => {
  body.style.backgroundImage = `url(${restImage})`;
  // Pause timer logic
});

resetBtn.addEventListener('click', () => {
  body.style.backgroundImage = `url(${resetImage})`;
  // Reset timer logic
  });

  let timer;
  let timeLeft = 25 * 60; // 25 minutes in seconds
  let isPaused = true;

  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("start");
  const pauseBtn = document.getElementById("pause");
  const resetBtn = document.getElementById("reset");

  function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function startTimer() {
    if (!isPaused) return; // Prevent multiple intervals
    isPaused = false;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        // Optional: Change background to "done" image
        document.body.style.backgroundImage = "url('YOUR_DONE_IMAGE_URL')";
      }
    }, 1000);
  }

  function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
  }

  function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isPaused = true;
    updateDisplay();
    // Optional: Reset to original study image
    document.body.style.backgroundImage = "url('YOUR_STUDY_IMAGE_URL')";
  }

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);

  // Initialize on load
  updateDisplay();


