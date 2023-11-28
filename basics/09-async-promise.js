import { readFile } from 'node:fs/promises';

const fsPromise = readFile('input.txt', 'utf-8');

fsPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });

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

// const result = doSomethingAsync(new Error('whoops'), false, 1);
const result = doSomethingAsync('Hallo Welt', true, 1);

result
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });

const p1 = doSomethingAsync('P1', true, 1);
const p2 = doSomethingAsync('P2', false, 1_000);
const p3 = doSomethingAsync('P3', true, 1);

// Promise.all, zusammenführen aller Ergebnisse
const result2 = Promise.all([p1, p2, p3]);
result2
  .then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));

// Promise.race, mit dem schnellsten weiterabeiten
const result3 = Promise.race([p1, p2, p3])
  .then((data) => console.log('race: ', data))
  .catch((error) => console.log('race: ', error));

// Promise.any wenn mindestens 1 resolve - mit dem schnellsten
Promise.any([p1, p2, p3])
  .then((data) => console.log('any', data))
  .catch((error) => console.log('any', error));

// Promise.allSettled - Ergebnisse aller Promises, egal was für ein Status
Promise.allSettled([p1, p2, p3])
  .then((result) => console.log('allSettled', result))
  .catch((error) => console.log('allSettled', error));

// Promise chain - mehrere voneinander abhängige Operationen
doSomethingAsync('W1', true, 1)
  .then((value) => {
    console.log(value);
    return doSomethingAsync('W2', true, 1);
  })
  .then((value) => {
    console.log(value);
    return doSomethingAsync('W3', true, 1);
  })
  .then((value) => {
    console.log(value);
    return 42; // auch einfache Werte werden in Promises geschachtelt
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log('chain', error);
  });

function doSomethingOther(value, success) {
  if (success) {
    return Promise.resolve(value);
  } else {
    return Promise.reject(value);
  }
}

doSomethingOther('success!', true)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

console.log('----------------------------');
console.log('a');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('b');
