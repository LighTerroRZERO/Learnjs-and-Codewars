// 1 задание: Создайте скрипт, который запрашивает ввод двух чисел и после показывает их сумму

const a = +prompt("Введите число а: ");
const b = +prompt("Введите число b: ");
let sum = a + b;
alert(`Сумма = ${sum.toFixed(1)}`);

/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

const readNumber = () => {

  while(true) {
    let number = prompt("Введите числовое значение: ","0");

    if (isNaN(number)) {
      continue;
    } else if (number === null || number === '') {
      return null;
    } else {
      return alert(`Число: ${+number}`);
    }
  }
};

readNumber();

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

const randomInteger = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );