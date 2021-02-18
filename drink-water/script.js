const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');

console.log(percentage);

function updateBugCup() {
  const total = smallCups.length;
  const filled = document.querySelectorAll('.full').length;
  if (filled === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.innerText = `${(filled / total) * 100}%`;
    percentage.style.height = `${(filled / total) * 100}%`;
  }

  if (filled === total) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    remained.style.height = 'auto';
    liters.innerText = `${(2000 - filled * 250) / 1000}L`;
  }
}

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => fillCup(idx));
});

function fillCup(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling?.classList.contains('full')
  ) {
    idx--;
  }
  smallCups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBugCup();
}
