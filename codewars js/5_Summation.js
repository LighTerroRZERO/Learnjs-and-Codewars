// функция должна работать как факториал только со сложением

const summ = (num) => {
  let sum = 0;
  for( let i = 1; i<= num; i++) sum += i;
  return sum;
};

alert(summ(8));