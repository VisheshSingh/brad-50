const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let num = 0;
let int = setInterval(blurry, 30);

function blurry() {
  num++;

  if (num > 99) {
    clearInterval(int);
  }

  loadingText.innerText = `${num}%`;
  const opacity = scale(num, 0, 100, 1, 0);
  const blur = scale(num, 0, 100, 30, 0);
  loadingText.style.opacity = opacity;
  bg.style.filter = `blur(${blur}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
