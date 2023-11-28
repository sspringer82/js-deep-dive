function doSomethingAsync(value, success, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(value);
      } else {
        reject(value);
      }
    }, timeout);
  });
}

/*
console.log('a');

// top level await
const result = await doSomethingAsync('value', true, 5000); // a - 5sek - value - b
console.log(result);

doSomethingAsync('value', true, 5000).then((result) => console.log(result)); // a - b - 5sek - value
console.log('b');
*/

// async functions geben immer promises zurück
async function execute() {
  const result = await doSomethingAsync('value', true, 500);
  return result;
}

// asynchroner Ablauf
// console.log('a');
// execute();
// console.log('b');

// Kombinationsmöglichkeiten mit Promises
/*
const result = await Promise.all([execute(), execute(), execute()]).then(
  (results) => {
    console.log(results);
    return execute();
  }
);

console.log(result);
*/

// async/await kette
/*
console.log('a');
(async function () {
  const result = await execute();
  console.log(result);
  const result2 = await execute();
  console.log(result2);
  const result3 = await execute();
  console.log(result3);
})();
console.log('b');
*/

try {
  const result = await doSomethingAsync('Value', false, 10);
  console.log(result);
} catch (error) {
  console.log('error', error);
} finally {
  console.log('cleanup');
}

import { readFile } from 'node:fs/promises';

try {
  const fileContent = await readFile('input.txt', 'utf-8');
  console.log(fileContent);
} catch (error) {
  console.log(error);
}
