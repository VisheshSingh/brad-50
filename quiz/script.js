const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quizContainer = document.querySelector('#quiz');
const question = document.querySelector('.question');
const answers = document.querySelectorAll('.answer');
const aText = document.querySelector('#a_text');
const bText = document.querySelector('#b_text');
const cText = document.querySelector('#c_text');
const dText = document.querySelector('#d_text');
const submit = document.querySelector('button');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  unselectOptions();

  const cur = quizData[currentQuiz];
  question.innerHTML = cur.question;

  aText.textContent = cur.a;
  bText.textContent = cur.b;
  cText.textContent = cur.c;
  dText.textContent = cur.d;
}

function unselectOptions() {
  answers.forEach((ans) => (ans.checked = false));
}

function getSelected() {
  let answer;
  answers.forEach((ans) => {
    if (ans.checked) {
      answer = ans.id;
    }
  });
  return answer;
}

submit.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `
        <h2>You have answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick='location.reload()'>Reload</button>
        `;
    }
  }
  console.log({ currentQuiz });
});
