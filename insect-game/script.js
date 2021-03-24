const screens = document.querySelectorAll('.screen');
const playBtn = document.getElementById('btn');
const chooseInsects = document.querySelectorAll('.choose-insect-btn');

playBtn.addEventListener('click', () => {
  screens[0].classList.add('up');
});
