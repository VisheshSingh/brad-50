const API_KEY = 'd620e91d55d898d76fea102541d21c76';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMAGE_URI = `https://image.tmdb.org/t/p/w1280`;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm);
    searchTerm = '';
  } else {
    window.location.reload();
  }
});
