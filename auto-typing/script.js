const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');

const text = 'JavaScript is awesome!';
let idx = 1;
let speed = 300 / idx;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  if (idx > text.length) {
    idx = 1;
  }

  idx++;

  setTimeout(writeText, speed);
}

speedEl.addEventListener('change', (e) => (speed = 300 / e.target.value));
