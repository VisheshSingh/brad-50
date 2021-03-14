const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  const rangeVal = +range_width.slice(0, range_width.length - 2);
  const labelVal = +label_width.slice(0, label_width.length - 2);

  const min = +e.target.min;
  const max = +e.target.max;

  const left = value * (rangeVal / max) - labelVal / 2;
  label.style.left = `${left}px`;

  label.textContent = value;
});
