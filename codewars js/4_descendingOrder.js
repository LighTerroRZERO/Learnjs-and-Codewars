// функция, которая выводит цифры в строке по убыванию

const descendingOrder = (n) => {
  n = String(n);
  return +n.split('').sort().reverse().join('');
};

alert(descendingOrder(153));