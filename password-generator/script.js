const result = document.getElementById('result');
const clipboard = document.getElementById('clipboard');
const lengthEl = document.getElementById('length');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');

function genRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function genRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function genRandomNum() {
  return Math.floor(Math.random() * 10) + 1;
}

function genRandomSymbol() {
  const symbol = '!@#$%^&*()?/,._+{}';
  return symbol[Math.floor(Math.random() * symbol.length)];
}

const random = {
  lower: genRandomLower,
  upper: genRandomUpper,
  num: genRandomNum,
  symbol: genRandomSymbol,
};

generate.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercase.checked;
  const hasUpper = uppercase.checked;
  const hasNum = numbers.checked;
  const hasSymbol = symbols.checked;

  result.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNum,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, num, symbol, length) {
  let pwd = '';
  const typesCount = lower + upper + num + symbol;
  const typesArr = [{ lower }, { upper }, { num }, { symbol }].filter(
    (type) => Object.values(type)[0]
  );

  if (typesCount === 0) return;

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type);
      pwd += random[funcName]();
    });
  }
  return pwd.slice(0, length);
}
