const container = document.querySelector('.container');
const colors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];
const squares = 506;

for (let i = 0; i < squares; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseenter', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));

  container.appendChild(square);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(el) {
  const color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(el) {
  el.style.background = '#1d1d1d';
  el.style.boxShadow = `0 0 2px #000`;
}
