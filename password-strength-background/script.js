const bg = document.getElementById('background');
const pwd = document.getElementById('password');

pwd.addEventListener('input', (e) => {
  const inputVal = e.target.value;
  const blurValue = 20 - inputVal.length * 2;
  bg.style.filter = `blur(${blurValue}px)`;
});
