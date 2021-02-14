const tagsEl = document.getElementById('tags');
const textarea = document.querySelector('textarea');

textarea.focus();

textarea.addEventListener('keydown', (e) => {
  createTag(e.target.value);

  if (e.key === 'Enter') {
    randomSelect();
    e.target.value = '';
  }
});

function createTag(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  let interval = setInterval(() => {
    let random = pickRandomTag();
    highlight(random);

    setTimeout(() => {
      unhighlight(random);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      let random = pickRandomTag();
      highlight(random);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add('highlight');
}

function unhighlight(tag) {
  tag.classList.remove('highlight');
}
