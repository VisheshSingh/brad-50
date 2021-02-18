const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('.liters');
const remained = document.getElementById('.remained');
const percentage = document.getElementById('.percentage');

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => fillCup(idx));
});

function fillCup(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
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
}
