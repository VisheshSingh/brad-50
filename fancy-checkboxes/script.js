const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target))
);

function doTheTrick(element) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good == element) {
      fast.checked = false;
    }
    if (cheap == element) {
      good.checked = false;
    }
    if (fast == element) {
      cheap.checked = false;
    }
  }
}
