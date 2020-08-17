// При помощи цикла for вывести четные числа от 2 до 10

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0 && i != 0) {
    alert(i);
  }
}

// Заменить цикл for на while

let i = 0;

while (i < 3 ) {
  alert(`number ${i}!`);
  i++;
}

// Повторять цикл, пока ввод неверен

while(true){
  const number = prompt(`Введите число больше 100: `, ``);

  if(number > 100 || number == null) break;
}

// Вывести простые числа

const endInterval = prompt("Введите конец интервала чисел: ", '');

nextNumber:
for (let i = 2; i <= endInterval; i++) {
  for (j = 2; j <= i; j++) {
    if(i % j == 0) {
      if(i == j) {
        alert(`Число ${i} простое!`);
      }
      continue nextNumber;
    }
  }
}