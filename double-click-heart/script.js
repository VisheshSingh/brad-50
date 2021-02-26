const loveMe = document.getElementById('loveMe');
const times = document.getElementById('times');

let clickTime = 0,
  timesClick = 0;
loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  const left = e.clientX;
  const top = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const x = left - leftOffset;
  const y = top - topOffset;

  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  heart.style.top = `${y}px`;
  heart.style.left = `${x}px`;

  loveMe.appendChild(heart);
  times.innerText = ++timesClick;
  setTimeout(() => heart.remove(), 1000);
}
