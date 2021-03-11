const resultContainer = document.querySelector('.result');
const search = document.querySelector('input');
const listItems = [];

fetchRandomUsers();

async function fetchRandomUsers() {
  const res = await fetch('https://randomuser.me/api/?results=50');
  const data = await res.json();

  const { results } = data;

  results.forEach((result) => {
    const item = document.createElement('div');
    item.classList.add('item');
    const picture = result.picture.thumbnail;
    const name = `${result.name.first} ${result.name.last}`;
    const location = result.location.city;
    item.innerHTML = `
        <img
            src="${picture}"
            alt="profile"
        />
        <div class="info">
            <h3>${name}</h3>
            <p>${location}</p>
        </div>
      `;
    resultContainer.appendChild(item);
    listItems.push(item);
  });
}
search.addEventListener('input', (e) => filterItems(e.target.value));

function filterItems(inputText) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(inputText.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
