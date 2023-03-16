import add from "./add.js";
import subtract from "./subtract.js";
import multiply from "./multiply.js";
import divide from "./divide.js";

const [, , firstArg, operator, secondArg] = process.argv;
const num1 = Number(firstArg);
const num2 = Number(secondArg);
let result;

switch (operator) {
  case 'plus':
    result = add(num1, num2);
    break;
  case 'minus':
    result = subtract(num1, num2);
    break;
  case 'times':
    result = multiply(num1, num2);
    break;
  case 'over':
    result = divide(num1, num2);
    break;
  default:
    console.log('invalid operator');
}

if (result !== undefined) {
  console.log('result:', result);
}
