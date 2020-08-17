const str = prompt('Введите строку', '');

const solution = (str) => {
  let reverseStr = '';
  for(let i = 1; i <= str.length; i++) {
    reverseStr += str[str.length - i];
  }
  alert(reverseStr);
};

solution(str);