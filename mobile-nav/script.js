const photos = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('li');

listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAllPhotos();
    hideAllActive();
    item.classList.add('active');
    photos[idx].classList.add('show');
  });
});

function hideAllActive() {
  listItems.forEach((item) => item.classList.remove('active'));
}

function hideAllPhotos() {
  photos.forEach((item) => item.classList.remove('show'));
}
