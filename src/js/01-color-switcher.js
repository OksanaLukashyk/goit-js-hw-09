const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;
let intervalId;

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', changeColorReset);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  stopBtn.disabled = false;
  startBtn.disabled = true;

  intervalId = setInterval(
    () => (body.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

function changeColorReset() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(intervalId);
}
