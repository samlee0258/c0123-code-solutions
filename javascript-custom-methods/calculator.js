/* exported calculator */
var calculator = {
  add: function add(x, y) {
    var sum = x + y;
    return sum;
  },
  subtract: function subtract(x, y) {
    var difference = x - y;
    return difference;
  },
  multiply: function multiply(x, y) {
    var product = x * y;
    return product;
  },
  divide: function divide(x, y) {
    var quotient = x / y;
    return quotient;
  },
  square: function square(x) {
    var square = x * x;
    return square;
  },
  sumAll: function sumAll(numbers) {
    var currentNumber = 0;
    for (var index = 0; index < numbers.length; index++) {
      currentNumber += numbers[index];
    }
    return currentNumber;
  },
  getAverage: function getAverage(numbers) {
    var currentNumber = 0;
    for (var index = 0; index < numbers.length; index++) {
      currentNumber += numbers[index];
    }
    var average = currentNumber / numbers.length;
    return average;
  }
};
