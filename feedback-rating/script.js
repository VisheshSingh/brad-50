const rating = document.querySelectorAll('.rating');
const ratingContainer = document.querySelector('.rating-customer');
const sendBtn = document.getElementById('btn');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied';

ratingContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerText;
  }
});

function removeActive() {
  rating.forEach((item) => item.classList.remove('active'));
}

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
          <i class='fas fa-heart'></i><br/>
          <strong>Thank you!</strong><br />
          <strong>Feedback: ${selectedRating}</strong>
          <p>We will use your feedback to improve our customer support</p>
      `;
});
