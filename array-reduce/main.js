const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 },
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' },
];

const initialValue = 0;
const sum = numbers.reduce(
  (num1, num2) => num1 + num2, initialValue
);
console.log('sum:', sum);

const startingNum = 1;
const product = numbers.reduce(
  (num1, num2) => num1 * num2, startingNum
);
console.log('product:', product);


const totalBalance = account.reduce((balance, transaction) => {
  ? balance: transaction.type
});
