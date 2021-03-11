const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    code.value = '';
    if (e.key >= 0 && e.key <= 9) {
      setTimeout(() => {
        codes[idx + 1].focus();
      }, 0);
    } else if (e.key === 'Backspace') {
      setTimeout(() => {
        codes[idx - 1].focus();
      }, 0);
    }
  });
});
