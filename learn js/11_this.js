// Создать объект калькулятор с тремя методами

const calculator = {
  read() {
    this.firstNumber = +prompt("Введите первое число",'');
    this.secondNumber = +prompt("Введите второе число",'');
  },
  sum() {
    return this.firstNumber + this.secondNumber;
  },
  mul() {
    return this.firstNumber * this.secondNumber;
  }
};

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

//  Переписать функцию так чтобы можно было создать цепь вызовов

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep();