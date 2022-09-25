const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');

const TIMING = 1000;
let timer;

function toggleBtn(started) {
  started
    ? btnStopRef.removeAttribute('disabled')
    : btnStopRef.setAttribute('disabled', true);

  started
    ? btnStartRef.setAttribute('disabled', true)
    : btnStartRef.removeAttribute('disabled');

  clearInterval(timer);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function changeColor() {
  timer = setInterval(setColor, TIMING);
}

window.addEventListener('load', () => {
  const started = false;

  toggleBtn(started);
});

btnStartRef.addEventListener('click', () => {
  const started = true;

  toggleBtn(started);
  changeColor();
});

document.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    const started = true;

    toggleBtn(started);
    changeColor();
  }
});

btnStopRef.addEventListener('click', () => {
  const started = false;

  toggleBtn(started);
});

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    const started = false;

    toggleBtn(started);
  }
});
