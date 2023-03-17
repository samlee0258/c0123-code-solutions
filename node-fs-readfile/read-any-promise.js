import fs from 'node:fs/promises';

fs.readFile(process.argv[2], 'utf-8')
  .then((data) => {console.log(data)})
  .catch((error) => {
    console.error('error:', error.message)
    process.exit(1);
});

// async / await:
// async function foo() {
//   try {
//     const data = await readFile(process.argv[2], 'utf8');
//     console.log(data);
//   } catch (error) {
//     console.error('error:', error.message)
//     process.exit(1);
//   }
// }

// foo();
