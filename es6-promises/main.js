import takeAChance from './take-a-chance.js';

const result = takeAChance('Sam');

result
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject.message));
