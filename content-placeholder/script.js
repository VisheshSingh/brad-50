const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBg = document.querySelectorAll('.animated-bg');
const animatedBgText = document.querySelectorAll('.animated-bg-text');

setTimeout(loadData, 2000);

function loadData() {
  header.innerHTML = `<img
    src="https://images.unsplash.com/photo-1613859135969-98535b091eb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    alt="image"
  />`;
  title.innerText = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, velit.';
  profileImg.innerHTML = `<img
    src="https://randomuser.me/api/portraits/men/99.jpg"
    alt="profile photo"
  />`;
  name.innerText = 'John Doe';
  date.innerText = '4-July-2017';

  animatedBg.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgText.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
