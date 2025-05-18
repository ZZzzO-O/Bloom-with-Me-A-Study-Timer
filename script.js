const studyImage = 'https://i.etsystatic.com/36165453/r/il/52d59f/4166357998/il_fullxfull.4166357998_fwiw.jpg';
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
