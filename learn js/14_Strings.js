// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

const ucFirst = (str) => {
  if(str != '') {
   return str[0].toUpperCase() + str.slice(1);
  }
  return str;
};

alert(ucFirst("вася"));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

const checkSpam = (str) => {
  str = str.toLowerCase();
  if(str.includes('viagra') || str.includes('xxx')) {
    return true;
  }
  return false;
};

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

const truncate = (str, maxLength) => {
  if(str.length > maxLength) {
    return str.slice(0, maxLength - 1) + '…';
  }
  return str;
};

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

const extractCurrencyValue = (str) => {
  return +str.slice(1);
};

alert( extractCurrencyValue('$120') === 120 );