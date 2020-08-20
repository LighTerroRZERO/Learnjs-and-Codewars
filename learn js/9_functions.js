// Перепишите функцию, используя оператор ? или ||

const checkAgeTernar = (age) => {
  return age > 18 ? true : confirm(`Родители разрешили?`);
};

const checkAgeOr = (age) => {
  return (age > 18) || confirm(`Родители разрешили?`);
};

/* alert(checkAgeTernar(17));

alert(checkAgeOr(19)); */

// Функция которая возвращающая меньшее из чисел

const min = (a, b) => {
  return (a < b) ? a : b;
};

alert(min(5, 3));

//  Функция которая возводит в степень

const pow = (a, b) => {
  let result = 1;
  for (let i = 0; i < b; i++) result *= a;
  return result;
};

alert(pow(5, 3));

// Заменить код Function Expression стрелочной функцией

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);