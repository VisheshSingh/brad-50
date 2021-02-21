const ripple = document.querySelector('.ripple');

ripple.addEventListener('click', function (e) {
  e.offsetX;
  e.offsetY;

  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.top = e.offsetY + 'px';
  circle.style.left = e.offsetX + 'px';

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
});
