const search = document.getElementById('search');
const form = document.getElementById('form');
const main = document.querySelector('.main');

const API_URI = 'https://api.github.com/users/';

async function getUser(user) {
  try {
    const res = await axios.get(API_URI + user);
    const userData = res.data;
    createCard(userData);

    const resRepo = await axios.get(API_URI + user + '/repos?sort=created');
    const repos = resRepo.data;
    addReposToCard(repos);
  } catch (error) {
    createCardError('No profile found for the given user 💩');
  }
}

function createCardError(msg) {
  main.innerHTML = `<div class='card'><h1>${msg}</h1></div>`;
}

function addReposToCard(repos) {
  const reposEl = document.querySelector('.repos');

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement('a');
    repoEl.href = repo.html_url;
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

function createCard(user) {
  const { avatar_url, login, bio, followers, following, public_repos } = user;
  const createCardHTML = `
    <div class="card">
        <div>
          <img
            src="${avatar_url}"
            alt="${login}"
          />
        </div>
        <div class="user-info">
          <h3 class="name">${login}</h3>
          <p class="info">
            ${bio}
          </p>
          <ul>
            <li>${followers} <span class="label">Followers</span></li>
            <li>${following} <span class="label">Following</span></li>
            <li>${public_repos} <span class="label">Repos</span></li>
          </ul>

          <div class="repos">
          </div>
        </div>
      </div>
  `;

  main.innerHTML = createCardHTML;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  getUser(user);
  search.value = '';
});
