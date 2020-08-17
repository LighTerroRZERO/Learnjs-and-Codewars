// Первое задание

const age = prompt('Введите свой возраст:', '');

if(age >= 14 && age <= 90) {
  alert(`Ваш возраст в норме!`);
}

// Второе задание

if(!(age >= 14 && age <= 90)) {
  alert(`Вы либо слишком молоды, либо слишком стары!`);
}

if(age < 14 || age > 90) {
  alert(`Вы либо слишком молоды, либо слишком стары!`);
}

// Третье задание

const login = prompt('Кто там?', '');

if (login == null || login == '') {
  alert(`Отменено!`);
} else if (login != `Админ`) {
  alert(`Я вас не знаю!`);
} else {
  const password = prompt('Пароль?', '');

  if (password == null || password == '') {
    alert(`Отменено!`);
  } else if (password == "Я Главный") {
    alert(`Здравствуйте!`);
  } else {
    alert(`Неверный пароль!`);
  }
}