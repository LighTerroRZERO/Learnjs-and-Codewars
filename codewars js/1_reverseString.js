// Сам сделал
const str = prompt('Введите строку', '');

const solution = (str) => {
  let reverseStr = '';
  for(let i = 1; i <= str.length; i++) {
    reverseStr += str[str.length - i];
  }
  alert(reverseStr);
};

solution(str);

// После ревью Мирика

const solutionNew = (str) => str.split("").reverse().join("");

console.log(solutionNew(str));