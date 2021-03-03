const imgContainer = document.querySelector('.image-container');
const imgs = document.querySelectorAll('#imgs img');
const right = document.getElementById('right');
const left = document.getElementById('left');

let idx = 0;
const len = imgs.length;

let interval = setInterval(run, 2000);

function run() {
  idx++;

  changeImage();
}

function changeImage() {
  if (idx > len - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = len - 1;
  }

  imgContainer.style.transform = `translateX(${-idx * 400}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

right.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});

left.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
