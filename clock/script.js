const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');
const toggle = document.querySelector('.toggle');
const htmlEl = document.body.parentNode;

toggle.addEventListener('click', () => {
  htmlEl.classList.toggle('dark');

  if (htmlEl.classList.contains('dark')) {
    toggle.innerText = 'Light Mode';
  } else {
    toggle.innerText = 'Dark Mode';
  }
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hour = time.getHours();
  const hourByClock = hour % 12;
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  //   console.log({ month, day, date, hourByClock, min, sec });

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hourByClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    min,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    sec,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerText = `${hourByClock}:${
    min < 10 ? `0${min}` : `${min}`
  } ${ampm}`;
  dateEl.innerHTML = `${weekdays[day]}, ${months[month]} <span class='circle'>${date}</span>`;
}

setTime();

setInterval(setTime, 100);
