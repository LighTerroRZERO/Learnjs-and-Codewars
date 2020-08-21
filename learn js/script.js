// Создать конструктор калькулятора

function Calculator() {
  this.read = () => {
    this.firstNumber = +prompt("Введите первое число",'');
    this.secondNumber = +prompt("Введите второе число",'');
  };
  this.sum = () => {
    return this.firstNumber + this.secondNumber;
  };
  this.mul = () => {
    return this.firstNumber * this.secondNumber;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Создать Accumulator

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    return this.value += +prompt("Введите значение: ", "");
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read();
accumulator.read();

alert(accumulator.value);