const container = document.querySelector('.container');
const unsplashUrl = `https://source.unsplash.com/random`;
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const image = document.createElement('img');
  image.src = `${unsplashUrl}/${imgDim()}`;
  container.appendChild(image);
}

function imgDim() {
  return `${getRand()}x${getRand()}`;
}

function getRand() {
  return Math.floor(Math.random() * 10) + 300;
}
