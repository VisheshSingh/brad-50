const toasts = document.getElementById('toasts');
const btn = document.getElementById('btn');

const messages = [
  'Message one',
  'Message two',
  'Message three',
  'Message four',
  'Message Five',
];

const types = ['info', 'success', 'error'];

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(getRandomType());

  notif.innerText = getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

btn.addEventListener('click', createNotification);
