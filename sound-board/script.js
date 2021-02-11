const sounds = ['👏', '🥴', '👎', '📯', '🥁', '😁', '🎉'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSounds();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSounds() {
  sounds.forEach((s) => {
    const sound = document.getElementById(s);
    sound.pause();
    sound.currentTime = 0;
  });
}
