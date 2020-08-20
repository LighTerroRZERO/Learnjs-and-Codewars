// Напишите код выполнив задание из каждого пункта отдельной строкой

const user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

delete user.name;

// Написать функцию которая проверяет объект на пустоту

const emptyObject = {};

const isEmpty = (obj) => {
  for( let prop in obj) {
    return false;
  }
  return true;
};

console.log( isEmpty(emptyObject) );

emptyObject.name = "John";

console.log( isEmpty(emptyObject) );

// Сумма свойств обьекта

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for( let prop in salaries) {
  sum += salaries[prop];
}

console.log(sum);

// Умножать все числовые свойства на 2

const menu = {
  width: 200,
  heigth: 300,
  title: 'My menu',
};

const multiplyNumeric = (obj) => {
  for( let prop in obj) {
    if(typeof(obj[prop]) == "number") obj[prop] *= 2;
  }
};

multiplyNumeric(menu);

console.log(menu);
