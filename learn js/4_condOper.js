// Первое задание
const answer = prompt('Какое "официальное" название JavaScript?','');
if(answer == "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}

// Второе задание

const number = prompt('Введите любое число!','');
if(number > 0) {
  alert(1);
} else if(number == 0) {
  alert(0);
} else {
  alert(-1);
}

// Третье задание

const a = 1;
const b = 2;

const result = (a + b < 4) ? "Мало" : "Много";

alert(result);

// Четвёртое задание

const login = prompt('Введите логин!','');

const message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';

alert(message);