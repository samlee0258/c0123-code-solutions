let currentCount = 3;

const interval = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(interval);
  } else {
    console.log(currentCount);
    currentCount--;
  }
}, 1000)
